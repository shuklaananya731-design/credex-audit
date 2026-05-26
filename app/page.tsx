tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Tool = { id: string, name: string, plan: string, spend: number, seats: number }

const TOOL_OPTIONS = [
  { name: 'Cursor', plans: [{v:'free',l:'Free $0'}, {v:'pro',l:'Pro $20/mo'}, {v:'business',l:'Business $40/mo'}] },
  { name: 'ChatGPT', plans: [{v:'free',l:'Free $0'}, {v:'plus',l:'Plus $20/mo'}, {v:'team',l:'Team $25/mo'}] },
  { name: 'Claude', plans: [{v:'free',l:'Free $0'}, {v:'pro',l:'Pro $20/mo'}, {v:'team',l:'Team $25/mo'}] },
  { name: 'GitHub Copilot', plans: [{v:'individual',l:'Individual $10/mo'}, {v:'business',l:'Business $19/mo'}] },
]

export default function Home() {
  const [tools, setTools] = useState<Tool[]>([
    { id: '1', name: 'Cursor', plan: 'pro', spend: 20, seats: 1 },
    { id: '2', name: 'ChatGPT', plan: 'plus', spend: 20, seats: 1 },
  ])
  const [email, setEmail] = useState('')
  const router = useRouter()

  const addTool = () => {
    setTools([...tools, { id: Date.now().toString(), name: 'Cursor', plan: 'pro', spend: 20, seats: 1 }])
  }

  const deleteTool = (id: string) => {
    if(tools.length > 1) setTools(tools.filter(t => t.id !== id))
  }

  const updateTool = (id: string, field: keyof Tool, value: any) => {
    setTools(tools.map(t => t.id === id ? {...t, [field]: value} : t))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if(!email) return alert('Email required')
    const auditId = crypto.randomUUID()
    localStorage.setItem(auditId, JSON.stringify({ tools, email }))
    router.push(`/result/${auditId}`)
  }

  const s = {
    bg: { background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh', color: 'white', padding: '40px 20px', fontFamily: 'system-ui' },
    card: { maxWidth: '700px', margin: '0 auto', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '40px', border: '1px solid rgba(255,255,255,0.1)' },
    h1: { fontSize: '36px', fontWeight: '800', marginBottom: '8px', background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    sub: { color: '#94a3b8', marginBottom: '32px', fontSize: '16px' },
    toolBox: { background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px', marginBottom: '16px', border: '1px solid rgba(255,255,255,0.1)' },
    row: { display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center' },
    input: { flex: 1, padding: '12px', background: 'rgba(15,23,42,0.6)', border: '1px solid #334155', borderRadius: '8px', color: 'white', fontSize: '14px' },
    select: { flex: 1, padding: '12px', background: 'rgba(15,23,42,0.6)', border: '1px solid #334155', borderRadius: '8px', color: 'white', fontSize: '14px' },
    label: { fontSize: '12px', color: '#94a3b8', marginBottom: '4px', display: 'block' },
    btn: { padding: '16px 32px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', border: 'none', borderRadius: '12px', color: 'white', fontSize: '16px', fontWeight: '600', cursor: 'pointer', width: '100%' },
    addBtn: { padding: '12px 24px', background: 'rgba(59,130,246,0.2)', border: '1px solid #3b82f6', borderRadius: '8px', color: '#60a5fa', fontSize: '14px', cursor: 'pointer', marginBottom: '20px' },
    delBtn: { padding: '8px 12px', background: 'rgba(239,68,68,0.2)', border: '1px solid #ef4444', borderRadius: '6px', color: '#f87171', cursor: 'pointer', fontSize: '12px' }
  }

  return (
    <div style={s.bg}>
      <div style={s.card}>
        <h1 style={s.h1}>AI Tools Spend Audit</h1>
        <p style={s.sub}>Stop overpaying for Cursor, ChatGPT, Claude & Copilot. Get free audit in 60 seconds.</p>

        <form onSubmit={handleSubmit}>
          {tools.map((tool, i) => (
            <div key={tool.id} style={s.toolBox}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px'}}>
                <h3 style={{margin:0}}>Tool #{i+1}</h3>
                {tools.length > 1 && <button type="button" style={s.delBtn} onClick={()=>deleteTool(tool.id)}>Delete</button>}
              </div>

              <label style={s.label}>AI Tool</label>
              <select style={s.select} value={tool.name} onChange={e=>updateTool(tool.id, 'name', e.target.value)}>
                {TOOL_OPTIONS.map(opt => <option key={opt.name} value={opt.name}>{opt.name}</option>)}
              </select>

              <div style={s.row}>
                <div style={{flex:1}}>
                  <label style={s.label}>Plan</label>
                  <select style={s.select} value={tool.plan} onChange={e=>updateTool(tool.id, 'plan', e.target.value)}>
                    {TOOL_OPTIONS.find(t=>t.name===tool.name)?.plans.map(p => <option key={p.v} value={p.v}>{p.l}</option>)}
                  </select>
                </div>
                <div style={{flex:1}}>
                  <label style={s.label}>Monthly Spend ($)</label>
                  <input style={s.input} type="number" value={tool.spend} onChange={e=>updateTool(tool.id, 'spend', +e.target.value)} />
                </div>
                <div style={{flex:1}}>
                  <label style={s.label}>Seats</label>
                  <input style={s.input} type="number" value={tool.seats} onChange={e=>updateTool(tool.id, 'seats', +e.target.value)} />
                </div>
              </div>
            </div>
          ))}

          <button type="button" style={s.addBtn} onClick={addTool}>+ Add Another Tool</button>

          <label style={s.label}>Work Email *</label>
          <input style={s.input} type="email" placeholder="you@company.com" required value={email} onChange={e=>setEmail(e.target.value)} />

          <button type="submit" style={{...s.btn, marginTop:'24px'}}>Run Free Audit →</button>
        </form>
      </div>
    </div>
  )
}