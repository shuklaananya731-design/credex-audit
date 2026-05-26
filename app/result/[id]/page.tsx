export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Audit Result</h1>
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="text-xl">
          Result ID: <span className="text-green-400 font-mono">{params.id}</span>
        </p>
      </div>
    </div>
  )
}