import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-zinc-50">
      <div className="flex flex-col items-center text-center space-y-8 px-6">
        <h1 className="text-8xl md:text-[150px] font-bold tracking-tighter bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
          404
        </h1>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Page not found</h2>
          <p className="text-zinc-400 max-w-[500px] text-lg">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <Link 
          href="/"
          className="mt-8 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
