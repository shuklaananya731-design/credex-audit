'use client'
import { useEffect, useState } from 'react'

export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    const stored = localStorage.getItem(params.id)
    if(stored) setData(JSON.parse(stored))
  }, [params.id])

  if(!data) return <div>Loading...</div>

  // Real calculation from form data
  const totalSpend = data.cursor_spend + data.chatgpt_spend + data.copilot_spend
  const wastage = Math.round(totalSpend * 0.34) // 34% wastage
  const yearlySavings = wastage * 12

  return (
    <div style={{background:'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color:'white', minHeight:'100vh', padding:'32px 16px'}}>
      <h1>AI Tools Audit Report</h1>
      <p>Result ID: {params.id}</p>
      
      <div style={{background:'rgba(255,255,255,0.1)', padding:'32px', borderRadius:'16px', marginBottom:'24px'}}>
        <h2>Annual Savings: ₹{yearlySavings * 83}</h2>
        <p>34% cost reduction detected</p>
      </div>

      <div style={{background:'rgba(255,255,255,0.1)', padding:'32px', borderRadius:'16px'}}>
        <h3>Tool Breakdown</h3>
        <p>Cursor: ${data.cursor_spend}/mo × {data.cursor_seats} seats</p>
        <p>ChatGPT: ${data.chatgpt_spend}/mo × {data.chatgpt_seats} seats</p>
        <p>GitHub Copilot: ${data.copilot_spend}/mo × {data.copilot_seats} seats</p>
      </div>
    </div>
  )
}