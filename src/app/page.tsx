export default function Home() {
  return (
    <main className='flex flex-col min-h-screen items-center justify-center bg-gray-900'>
      <div className='flex flex-col bg-gray-800 border-gray-700 border-2 rounded-lg px-10 py-6 mx-10'>
        <p className='font-mono font-bold text-xl text-center mb-2'>Rate MY Driving</p>
        <p className='font-mono text-sm text-center italic'>A platform for Malaysians to rate other drivers' driving skills</p>
      </div>
      <p className='font-mono text-xs text-center italic mt-3'>By a Malaysian, for Malaysians. Powered by nextjs.</p>
    </main>
  )
}
