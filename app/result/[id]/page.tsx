export default function Page({ params }: { params: { id: string } }) {
  const auditData = {
    id: params.id,
    score: 86,
    status: "Completed",
    date: "28-05-2026",
    monthlySavings: "₹42,500",
    yearlySavings: "₹5,10,000",
    reduction: "34%",
    issues: [
      { level: "High", count: 2, color: "#ef4444", desc: "Unused AWS EC2 instances detected in us-east-1" },
      { level: "Medium", count: 5, color: "#f59e0b", desc: "Over-provisioned RDS databases found" },
      { level: "Low", count: 3, color: "#3b82f6", desc: "Missing cost allocation tags on S3 buckets" }
    ]
  }

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '32px 16px'
    },
    wrapper: { maxWidth: '900px', margin: '0 auto' },
    card: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '32px',
      marginBottom: '24px',
      border: '1px solid rgba(255,255,255,0.2)'
    },
    h1: { fontSize: '36px', fontWeight: 'bold', marginBottom: '8px' },
    h2: { fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' },
    badge: { display: 'inline-block', padding: '4px 12px', borderRadius: '6px', fontSize: '14px', background: '#10b981' }
  }

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <a href="/" style={{ color: '#60a5fa', textDecoration: 'none', marginBottom: '16px', display: 'inline-block' }}>
          ← Back to Audit
        </a>
        
        <h1 style={styles.h1}>Cloud Cost Audit Report</h1>
        <p style={{ color: '#94a3b8', marginBottom: '32px' }}>
          Result ID: <span style={{ color: '#34d399', fontFamily: 'monospace' }}>{auditData.id}</span>
        </p>

        {/* Main Score Card */}
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <p style={{ color: '#cbd5e1', marginBottom: '8px' }}>Audit Score</p>
              <p style={{ fontSize: '64px', fontWeight: 'bold', color: '#34d399', lineHeight: 1 }}>{auditData.score}/100</p>
              <span style={styles.badge}>{auditData.status}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: '#cbd5e1', marginBottom: '8px' }}>Annual Savings</p>
              <p style={{ fontSize: '40px', fontWeight: 'bold', color: '#fbbf24' }}>{auditData.yearlySavings}</p>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>{auditData.reduction} cost reduction</p>
            </div>
          </div>
        </div>

        {/* Issues */}
        <div style={styles.grid}>
          {auditData.issues.map((issue, idx) => (
            <div key={idx} style={{...styles.card, padding: '24px'}}>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: issue.color, marginBottom: '8px' }}>
                {issue.count} {issue.level}
              </p>
              <p style={{ color: '#cbd5e1', fontSize: '14px' }}>{issue.desc}</p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={styles.card}>
          <h2 style={styles.h2}>Cost Optimization Summary</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>Monthly Savings</p>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#34d399' }}>{auditData.monthlySavings}</p>
            </div>
            <div>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>Annual Savings</p>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#34d399' }}>{auditData.yearlySavings}</p>
            </div>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '12px', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            Generated on {auditData.date} • CredEx Audit Engine v1.0
          </p>
        </div>
      </div>
    </div>
  )
}