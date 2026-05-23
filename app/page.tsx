'use client';
import { useState } from 'react';

type ToolData = {
  id: number;
  tool: string;
  plan: string;
  seats: number;
  monthlySpend: number;
};

type AuditResult = {
  totalWaste: number;
  annualWaste: number;
  findings: string[];
  totalSpend: number;
};

const AUDIT_RULES = (tools: ToolData[], teamSize: number): AuditResult => {
  let waste = 0;
  let findings: string[] = [];
  let totalSpend = 0;
  
  tools.forEach(t => {
    totalSpend += t.monthlySpend;
    
    // Rule 1: ChatGPT Team waste if seats < 3
    if (t.tool.toLowerCase() === 'chatgpt' && t.plan.toLowerCase() === 'team' && t.seats < 3) {
      const wastedAmount = t.monthlySpend - (20 * t.seats);
      if (wastedAmount > 0) {
        waste += wastedAmount;
        findings.push(`ChatGPT Team plan wasteful for ${t.seats} seats. Downgrade to Plus: Save $${wastedAmount}/mo`);
      }
    }
    
    // Rule 2: Jasper underutilized for small teams
    if (t.tool.toLowerCase() === 'jasper' && teamSize < 5) {
      const wastedAmount = t.monthlySpend * 0.6;
      waste += wastedAmount;
      findings.push(`Jasper AI underutilized for team of ${teamSize}. Consider alternatives: Save ~$${wastedAmount.toFixed(0)}/mo`);
    }
    
    // Rule 3: Cursor Business vs Pro
    if (t.tool.toLowerCase() === 'cursor' && t.plan.toLowerCase() === 'business') {
      const wastedAmount = 20 * t.seats;
      waste += wastedAmount;
      findings.push(`Cursor Pro is sufficient vs Business plan: Save $${wastedAmount}/mo`);
    }

    // Rule 4: Github Copilot Business for <10 devs
    if (t.tool.toLowerCase() === 'github copilot' && t.plan.toLowerCase() === 'business' && teamSize < 10) {
      const wastedAmount = 9 * t.seats;
      waste += wastedAmount;
      findings.push(`Github Copilot Individual enough for ${teamSize} devs: Save $${wastedAmount}/mo`);
    }
  });

  if (findings.length === 0) {
    findings.push('Your AI spend looks optimized! No major waste detected.');
  }
  
  return { 
    totalWaste: waste, 
    annualWaste: waste * 12, 
    findings,
    totalSpend
  };
};

export default function Home() {
  const [tools, setTools] = useState<ToolData[]>([
    { id: 1, tool: 'ChatGPT', plan: 'Team', seats: 2, monthlySpend: 60 },
    { id: 2, tool: 'Cursor', plan: 'Business', seats: 3, monthlySpend: 120 }
  ]);
  const [teamSize, setTeamSize] = useState(5);
  const [results, setResults] = useState<AuditResult | null>(null);
  const [aiSummary, setAiSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [nextId, setNextId] = useState(3);

  const addTool = () => {
    setTools([...tools, { id: nextId, tool: '', plan: '', seats: 1, monthlySpend: 0 }]);
    setNextId(nextId + 1);
  };

  const removeTool = (id: number) => {
    setTools(tools.filter(t => t.id !== id));
  };

  const updateTool = (id: number, field: keyof ToolData, value: string | number) => {
    setTools(tools.map(t => t.id === id ? {...t, [field]: value } : t));
  };

  const runAudit = async () => {
    setLoading(true);
    const audit = AUDIT_RULES(tools, teamSize);
    setResults(audit);
    
    try {
      const res = await fetch('/api/summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          auditData: { 
            tools, 
            teamSize,
            totalSpend: audit.totalSpend,
            totalWaste: audit.totalWaste,
            findings: audit.findings
          } 
        })
      });
      const data = await res.json();
      setAiSummary(data.summary || 'AI summary unavailable');
    } catch (e) {
      setAiSummary('Failed to generate AI summary');
    }
    setLoading(false);
  };

  return (
    <main className="p-4 md:p-8 max-w-5xl mx-auto bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Credex AI Spend Audit</h1>
        <p className="text-gray-600 mb-8">Find wasted AI tool spend in 60 seconds. Built for startups.</p>
        
        <div className="mb-6 p-4 border-gray-200 rounded-lg bg-gray-50">
          <label className="font-semibold text-gray-700">Your Team Size: </label>
          <input 
            type="number" 
            value={teamSize} 
            onChange={e => setTeamSize(Number(e.target.value))} 
            className="border border-gray-300 p-2 ml-2 w-24 rounded" 
            min="1"
          />
        </div>

        <div className="space-y-3 mb-6">
          <h2 className="font-semibold text-lg text-gray-800">Your AI Tools</h2>
          {tools.map((t) => (
            <div key={t.id} className="border border-gray-200 p-3 rounded-lg flex flex-wrap gap-2 items-center bg-white">
              <input 
                placeholder="Tool name" 
                value={t.tool} 
                onChange={e => updateTool(t.id, 'tool', e.target.value)} 
                className="border border-gray-300 p-2 flex-1 min-w-[120px] rounded" 
              />
              <input 
                placeholder="Plan" 
                value={t.plan} 
                onChange={e => updateTool(t.id, 'plan', e.target.value)} 
                className="border border-gray-300 p-2 flex-1 min-w-[100px] rounded" 
              />
              <input 
                type="number" 
                placeholder="Seats" 
                value={t.seats} 
                onChange={e => updateTool(t.id, 'seats', Number(e.target.value))} 
                className="border border-gray-300 p-2 w-20 rounded" 
                min="1"
              />
              <input 
                type="number" 
                placeholder="$/mo" 
                value={t.monthlySpend} 
                onChange={e => updateTool(t.id, 'monthlySpend', Number(e.target.value))} 
                className="border border-gray-300 p-2 w-24 rounded" 
                min="0"
              />
              <button 
                onClick={() => removeTool(t.id)} 
                className="text-red-500 hover:text-red-700 px-2 text-xl"
              >×</button>
            </div>
          ))}
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={addTool} 
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg font-medium"
          >+ Add Tool</button>
          <button 
            onClick={runAudit} 
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold disabled:bg-blue-400"
          >{loading ? 'Analyzing...' : '✨ Run Audit'}</button>
        </div>

        {results && (
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl text-center">
              <p className="text-lg text-gray-700 font-medium">Potential Annual Savings</p>
              <p className="text-4xl md:text-5xl font-bold text-green-600 my-2">
                ${results.annualWaste.toLocaleString()}
              </p>
              <p className="text-gray-600">
                ${results.totalWaste}/month from ${results.totalSpend}/month total spend
              </p>
            </div>

            <div className="p-5 border border-gray-200 rounded-lg bg-white">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Key Findings</h3>
              <div className="space-y-2">
                {results.findings.map((f: string, i: number) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <p className="text-gray-700">{f}</p>
                  </div>
                ))}
              </div>
            </div>

            {aiSummary && (
              <div className="p-5 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-900 flex items-center gap-2">
                  <span>🤖</span> AI Insights
                </h3>
                <p className="text-gray-700 leading-relaxed">{aiSummary}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}