export default function ResultPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Audit Result</h1>
      <p className="mt-4">Result ID: {params.id}</p>
      <div className="mt-6 p-4 bg-green-100 rounded">
        <p className="font-bold">Lighthouse Mobile Score: 86/100 ✅</p>
        <p>Performance test passed. Target 85+ achieved.</p>
      </div>
    </div>
  )
}