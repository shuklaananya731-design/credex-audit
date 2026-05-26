'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [form, setForm] = useState({
    cursor_spend: 20, cursor_seats: 1,
    chatgpt_spend: 20, chatgpt_seats: 1, 
    copilot_spend: 19, copilot_seats: 1,
    email: ''
  })
  const router = useRouter()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const id = crypto.randomUUID()
    localStorage.setItem(id, JSON.stringify(form))
    router.push(`/result/${id}`)
  }

  return (
    <div style={{background:'#0f172a',color:'white',minHeight:'100vh',padding:'40px'}}>
      <h1>AI Tools Spend Audit</h1>
      <p>Find 30%+ savings on Cursor, ChatGPT, GitHub Copilot</p>
      <form onSubmit={handleSubmit}>
        <h3>Cursor Pro</h3>
        <input type="number" placeholder="Monthly $ Spend" value={form.cursor_spend} onChange={e=>setForm({...form, cursor_spend:+e.target.value})} />
        <input type="number" placeholder="Seats" value={form.cursor_seats} onChange={e=>setForm({...form, cursor_seats:+e.target.value})} />
        
        <h3>ChatGPT Plus</h3>
        <input type="number" placeholder="Monthly $ Spend" value={form.chatgpt_spend} onChange={e=>setForm({...form, chatgpt_spend:+e.target.value})} />
        
        <h3>GitHub Copilot</h3>
        <input type="number" placeholder="Monthly $ Spend" value={form.copilot_spend} onChange={e=>setForm({...form, copilot_spend:+e.target.value})} />

        <input type="email" placeholder="Work Email" required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
        <button type="submit">Run Free Audit</button>
      </form>
    </div>
  )
}