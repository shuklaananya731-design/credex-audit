'use client'

import { useState } from 'react'

export default function Home() {
  const [teamSize, setTeamSize] = useState('5')
  const [tool, setTool] = useState('ChatGPT')
  const [category, setCategory] = useState('Team')
  const [quantity, setQuantity] = useState('2')
  const [hours, setHours] = useState('60')

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">AI Efficiency Audit</h1>
        
        {/* Your Team Size */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Your Team Size</label>
          <input
            type="number"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            placeholder="5"
            className="border rounded-lg px-4 py-2 w-24 text-black placeholder:text-gray-500"
          />
        </div>

        {/* Your AI Tools */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Your AI Tools</label>
          <div className="flex gap-3">
            <input
              type="text"
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              placeholder="ChatGPT"
              className="border rounded-lg px-3 py-2 flex-1 text-black placeholder:text-gray-500"
            />
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Team"
              className="border rounded-lg px-3 py-2 flex-1 text-black placeholder:text-gray-500"
            />
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="2"
              className="border rounded-lg px-3 py-2 w-20 text-black placeholder:text-gray-500"
            />
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="60"
              className="border rounded-lg px-3 py-2 w-20 text-black placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Run Audit Button */}
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
          Run Audit
        </button>
      </div>
    </main>
  )
}