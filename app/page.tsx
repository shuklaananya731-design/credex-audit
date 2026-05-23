'use client'

import { useState } from 'react'

export default function Home() {
  const [teamSize, setTeamSize] = useState('5')
  const [tool, setTool] = useState('ChatGPT')
  const [category, setCategory] = useState('Team')
  const [quantity, setQuantity] = useState('2')
  const [hours, setHours] = useState('60')

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white', padding: '32px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Inline style se force kaala */}
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '32px', color: 'black' }}>
          AI Efficiency Audit
        </h1>
        
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: 'black' }}>
            Your Team Size
          </label>
          <input
            type="number"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            placeholder="5"
            style={{ 
              border: '2px solid #ccc', 
              borderRadius: '8px', 
              padding: '8px 16px', 
              width: '100px', 
              color: 'black',
              backgroundColor: 'white'
            }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: 'black' }}>
            Your AI Tools
          </label>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input
              type="text"
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              placeholder="ChatGPT"
              style={{ 
                border: '2px solid #ccc', 
                borderRadius: '8px', 
                padding: '8px 12px', 
                flex: 1, 
                color: 'black',
                backgroundColor: 'white'
              }}
            />
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Team"
              style={{ 
                border: '2px solid #ccc', 
                borderRadius: '8px', 
                padding: '8px 12px', 
                flex: 1, 
                color: 'black',
                backgroundColor: 'white'
              }}
            />
          </div>
        </div>

        <button style={{ 
          backgroundColor: '#7c3aed', 
          color: 'white', 
          padding: '12px 24px', 
          borderRadius: '8px', 
          fontWeight: '600',
          border: 'none'
        }}>
          Run Audit
        </button>
      </div>
    </main>
  )
}