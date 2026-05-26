'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

type Tool = { id: string, name: string, plan: string, spend: number, seats: number }

export default function Result() {
  const params = useParams()
  const [data, setData] = useState<{tools: Tool[], email: string} | null>(null)
  
  useEffect(() => {
    const id = params.id as string
    const stored = localStorage.getItem(id)
    if (stored) setData(JSON.parse(stored))
  }, [params.id])

  if (!data) return <div style={{background:'#f8fafc', minHeight:'100vh', color:'#0f172a', padding:'40px'}}>Loading...</div>

  const totalSpend = data.tools.reduce((sum, t) => sum + t.spend, 0)
  const wastage = Math.round(totalSpend * 0.34)
  const yearlySavings = wastage * 12

  const s = {
    bg: { background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', minHeight: '100vh', color: '#0f172a', padding: '40px 20px', fontFamily: 'system-ui' },
    card: { maxWidth: '700px', margin: '0 auto', background: 'white', borderRadius: '20px', padding: '40px', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
    h1: { fontSize: '32px', fontWeight: '800', marginBottom: '24px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    stat: { background: '#f8fafc', padding: '20px', borderRadius: '12px', marginBottom: '16px', border: '1px solid #e2e8f0' },
    big: { fontSize: '48px', fontWeight: '800', color: '#2563eb' },
    tool: { padding:'12px', background:'#f8fafc', borderRadius:'8px', marginBottom:'8px', border:'1px solid #e2e8f0' }
  }

  return (
    <div style={s.bg}>
      <div style={s.card}>
        <h1 style={s.h1}>Your AI Spend Audit</h1>
        
        <div style={s.stat}>
          <div style={{color:'#64748b', fontSize:'14px', fontWeight:'500'}}>Total Monthly Spend</div>
          <div style={s.big}>${totalSpend}</div>
        </div>

        <div style={s.stat}>
          <div style={{color:'#64748b', fontSize:'14px', fontWeight:'500'}}>Estimated Wastage (34%)</div>
          <div style={{...s.big, color:'#dc2626'}}>${wastage}/mo</div>
        </div>

        <div style={s.stat}>
          <div style={{color:'#64748b', fontSize:'14px', fontWeight:'500'}}>Potential Yearly Savings</div>
          <div style={{...s.big, color:'#16a34a'}}>${yearlySavings}/yr</div>
        </div>

        <h3 style={{marginTop:'32px', marginBottom:'16px', color:'#0f172a'}}>Your Tools:</h3>
        {data.tools.map(t => (
          <div key={t.id} style={s.tool}>
            <strong>{t.name}</strong> - {t.plan} - ${t.spend}/mo - {t.seats} seat{t.seats > 1 ? 's' : ''}
          </div>
        ))}
      </div>
    </div>
  )
}