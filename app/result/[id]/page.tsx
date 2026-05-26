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

  if (!data) return <div style={{color:'white', padding:'40px'}}>Loading...</div>

  const totalSpend = data.tools.reduce((sum, t) => sum + t.spend, 0)
  const wastage = Math.round(totalSpend * 0.34) // 34% wastage
  const yearlySavings = wastage * 12

  const s = {
    bg: { background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh', color: 'white', padding: '40px 20px', fontFamily: 'system-ui' },
    card: { maxWidth: '700px', margin: '0 auto', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '40px', border: '1px solid rgba(255,255,255,0.1)' },
    h1: { fontSize: '32px', fontWeight: '800', marginBottom: '24px' },
    stat: { background: 'rgba(59,130,246,0.1)', padding: '20px', borderRadius: '12px', marginBottom: '16px' },
    big: { fontSize: '48px', fontWeight: '800', color: '#60a5fa' }
  }

  return (
    <div style={s.bg}>
      <div style={s.card}>
        <h1 style={s.h1}>Your AI Spend Audit</h1>
        
        <div style={s.stat}>
          <div style={{color:'#94a3b8'}}>Total Monthly Spend</div>
          <div style={s.big}>${totalSpend}</div>
        </div>

        <div style={s.stat}>
          <div style={{color:'#94a3b8'}}>Estimated Wastage (34%)</div>
          <div style={{...s.big, color:'#f87171'}}>${wastage}/mo</div>
        </div>

        <div style={s.stat}>
          <div style={{color:'#94a3b8'}}>Potential Yearly Savings</div>
          <div style={{...s.big, color:'#4ade80'}}>${yearlySavings}/yr</div>
        </div>

        <h3 style={{marginTop:'32px', marginBottom:'16px'}}>Your Tools:</h3>
        {data.tools.map(t => (
          <div key={t.id} style={{padding:'12px', background:'rgba(255,255,255,0.05)', borderRadius:'8px', marginBottom:'8px'}}>
            {t.name} - {t.plan} - ${t.spend}/mo - {t.seats} seats
          </div>
        ))}
      </div>
    </div>
  )
}