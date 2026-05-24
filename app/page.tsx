'use client'
import { useState } from 'react'

export default function Dashboard() {
  const [tools] = useState([
    {
      name: 'ChatGPT Plus',
      plan: '$20/month',
      usage: 80,
      limit: 100,
      wastage: 4,
      status: 'healthy'
    },
    {
      name: 'Cursor Pro',
      plan: '$20/month',
      usage: 30,
      limit: 100,
      wastage: 14,
      status: 'warning'
    },
    {
      name: 'GitHub Copilot',
      plan: '$10/month',
      usage: 70,
      limit: 100,
      wastage: 3,
      status: 'healthy'
    }
  ])

  const totalWastage = tools.reduce((sum, tool) => sum + tool.wastage, 0)
  const totalSpend = 50

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Credex Audit Dashboard</h1>
        <p className="text-gray-400 mb-8">Track your AI tool usage vs spending</p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm">Monthly Spend</p>
            <p className="text-3xl font-bold">${totalSpend}</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm">Potential Savings</p>
            <p className="text-3xl font-bold text-red-400">${totalWastage}/mo</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm">Annual Savings</p>
            <p className="text-3xl font-bold text-green-400">${totalWastage * 12}/yr</p>
          </div>
        </div>

        {/* Tools Table */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-xl font-bold">Tool Usage Breakdown</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="text-left p-4">Tool</th>
                  <th className="text-left p-4">Plan</th>
                  <th className="text-left p-4">Usage</th>
                  <th className="text-left p-4">Wastage</th>
                  <th className="text-left p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool) => (
                  <tr key={tool.name} className="border-b border-gray-800">
                    <td className="p-4 font-medium">{tool.name}</td>
                    <td className="p-4 text-gray-400">{tool.plan}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-800 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${tool.status === 'warning'? 'bg-red-500' : 'bg-green-500'}`}
                            style={{ width: `${tool.usage}%` }}
                          />
                        </div>
                        <span className="text-sm">{tool.usage}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={tool.wastage > 10? 'text-red-400' : 'text-gray-400'}>
                        ${tool.wastage}/mo
                      </span>
                    </td>
                    <td className="p-4">
                      {tool.status === 'warning'? (
                        <button className="bg-red-500/20 text-red-400 px-3 py-1 rounded-lg text-sm hover:bg-red-500/30">
                          Downgrade
                        </button>
                      ) : (
                        <button className="bg-gray-800 text-gray-400 px-3 py-1 rounded-lg text-sm">
                          Optimal
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
          <p className="text-blue-400 text-sm">
            💡 <strong>Insight:</strong> You are wasting ${totalWastage}/month on underused tools.
            Consider downgrading Cursor Pro to save $168/year.
          </p>
        </div>
      </div>
    </div>
  )
}