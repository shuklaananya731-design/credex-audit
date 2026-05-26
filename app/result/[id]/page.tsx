import Link from 'next/link'

export default function Page({ params }: { params: { id: string } }) {
  // Dummy audit data - kal ke liye chal jayega
  const auditData = {
    id: params.id,
    status: "Completed",
    score: 86,
    date: new Date().toLocaleDateString('en-IN'),
    issues: [
      { type: "High", count: 2, desc: "Unused AWS resources detected" },
      { type: "Medium", count: 5, desc: "Over-provisioned instances" },
      { type: "Low", count: 3, desc: "Missing tags on resources" }
    ],
    savings: {
      monthly: "₹42,500",
      yearly: "₹5,10,000",
      percentage: "34%"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Audit
          </Link>
          <h1 className="text-4xl font-bold mb-2">Cloud Cost Audit Report</h1>
          <p className="text-slate-300">Result ID: <span className="text-green-400 font-mono">{auditData.id}</span></p>
        </div>

        {/* Score Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-300 mb-2">Audit Score</p>
              <p className="text-6xl font-bold text-green-400">{auditData.score}/100</p>
              <p className="text-sm text-slate-400 mt-2">Status: {auditData.status}</p>
            </div>
            <div className="text-right">
              <p className="text-slate-300 mb-2">Potential Savings</p>
              <p className="text-4xl font-bold text-yellow-400">{auditData.savings.yearly}</p>
              <p className="text-sm text-slate-400 mt-2">{auditData.savings.percentage} cost reduction</p>
            </div>
          </div>
        </div>

        {/* Issues Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {auditData.issues.map((issue, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
              <div className={`text-2xl font-bold mb-2 ${
                issue.type === 'High' ? 'text-red-400' : 
                issue.type === 'Medium' ? 'text-yellow-400' : 'text-blue-400'
              }`}>
                {issue.count} {issue.type}
              </div>
              <p className="text-sm text-slate-300">{issue.desc}</p>
            </div>
          ))}
        </div>

        {/* Savings Breakdown */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold mb-6">Cost Optimization Summary</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-400 text-sm mb-1">Monthly Savings</p>
              <p className="text-3xl font-bold text-green-400">{auditData.savings.monthly}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">Annual Savings</p>
              <p className="text-3xl font-bold text-green-400">{auditData.savings.yearly}</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-slate-300 text-sm">
              Report generated on {auditData.date} • Powered by CredEx Audit Engine
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}