'use client'
import { useState } from 'react'
import { runAudit, ToolInput } from './lib/audit'

export default function Home() {
  const [tools, setTools] = useState<ToolInput[]>([
    { name: "ChatGPT Plus", plan: "Plus", users: 1, monthlyCost: 20 },
    { name: "Cursor Pro", plan: "Pro", users: 1, monthlyCost: 20 }
  ])

  const [formData, setFormData] = useState({
    name: "",
    users: 1,
    monthlyCost: ""
  })

  const audit = runAudit(tools)
  const showCredexPitch = audit.totalSavings.monthly > 500

  const handleAddTool = () => {
    if (!formData.name ||!formData.monthlyCost) {
      alert("Tool name aur cost daalo")
      return
    }

    const newTool: ToolInput = {
      name: formData.name,
      plan: "Custom",
      users: Number(formData.users),
      monthlyCost: Number(formData.monthlyCost)
    }

    setTools([...tools, newTool])
    setFormData({ name: "", users: 1, monthlyCost: "" })
  }

  const handleDeleteTool = (index: number) => {
    setTools(tools.filter((_, i) => i!== index))
  }

  return (
    <main className="p-8 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">AI Spend Audit</h1>
      <p className="text-gray-600 mb-8">Built by Ananya Shukla</p>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Add Your AI Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Tool Name e.g. Claude"
            className="border border-gray-300 p-2 rounded text-gray-900 focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="number"
            placeholder="Users"
            min="1"
            className="border border-gray-300 p-2 rounded text-gray-900 focus:ring-2 focus:ring-blue-500"
            value={formData.users}
            onChange={(e) => setFormData({...formData, users: Number(e.target.value)})}
          />
          <input
            type="number"
            placeholder="Monthly Cost $"
            min="0"
            className="border border-gray-300 p-2 rounded text-gray-900 focus:ring-2 focus:ring-blue-500"
            value={formData.monthlyCost}
            onChange={(e) => setFormData({...formData, monthlyCost: e.target.value})}
          />
          <button
            onClick={handleAddTool}
            className="bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700 transition"
          >
            + Add Tool
          </button>
        </div>
      </div>

      <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-green-800">
          You can save ${audit.totalSavings.monthly}/month
        </h2>
        <p className="text-xl text-green-700">
          ${audit.totalSavings.yearly}/year
        </p>
        {showCredexPitch && (
          <div className="mt-4 p-3 bg-white rounded border border-green-300">
            <p className="font-bold text-green-800">
              🎯 Saving ${audit.totalSavings.monthly}+ /mo?
            </p>
            <p className="text-gray-800">Try Credex Credits and save even more on AI tools.</p>
          </div>
        )}
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-900">Your Tools Breakdown</h3>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-gray-900">Tool</th>
              <th className="p-3 text-left text-gray-900">Users</th>
              <th className="p-3 text-left text-gray-900">Cost</th>
              <th className="p-3 text-left text-gray-900">Recommendation</th>
              <th className="p-3 text-right text-gray-900">Savings</th>
              <th className="p-3 text-center text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            {tools.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-8 text-gray-500">
                  No tools added yet. Add your first AI tool above to start audit.
                </td>
              </tr>
            )}
            {tools.map((tool, i) => (
              <tr key={i} className="border-t border-gray-200">
                <td className="p-3 font-medium text-gray-900">{tool.name}</td>
                <td className="p-3 text-gray-700">{tool.users}</td>
                <td className="p-3 text-gray-700">${tool.monthlyCost}/mo</td>
                <td className="p-3 text-sm text-gray-700">{audit.results[i]?.recommendation}</td>
                <td className="p-3 font-bold text-green-600 text-right">
                  ${audit.results[i]?.savings}/mo
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleDeleteTool(i)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}