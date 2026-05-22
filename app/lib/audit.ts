
   export type ToolInput = {
  name: string
  plan: string
  users: number
  monthlyCost: number
}

export type AuditResult = ToolInput & {
  recommendation: string
  savings: number
}

export function runAudit(tools: ToolInput[]) {
  let totalMonthlySavings = 0
  
  const results = tools.map(tool => {
    let savings = 0
    let recommendation = "Current plan is optimal"
    
    // Rule 1: ChatGPT Plus → Credex Credits
    if (tool.name.toLowerCase().includes("chatgpt")) {
      const credexCost = 15 * tool.users
      if (tool.monthlyCost > credexCost) {
        savings = tool.monthlyCost - credexCost
        recommendation = `Switch to Credex Credits & save $${savings}/mo`
      }
    }
    
    // Rule 2: Cursor Pro for solo user
    if (tool.name.toLowerCase().includes("cursor") && tool.users === 1) {
      savings = 20
      recommendation = "Use Cursor Free if you're working solo"
    }

    // Rule 3: GitHub Copilot check
    if (tool.name.toLowerCase().includes("copilot") && tool.monthlyCost > 10) {
      savings = tool.monthlyCost - 10
      recommendation = "Downgrade to Copilot Individual $10/mo"
    }
    
    totalMonthlySavings += savings
    return { ...tool, recommendation, savings }
  })
  
  return { 
    results, 
    totalSavings: {
      monthly: totalMonthlySavings,
      yearly: totalMonthlySavings * 12
    }
  }
}