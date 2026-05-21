export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800 bg-black/50 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-white">
          SpendWise AI
        </h1>

        <div className="hidden md:flex gap-8 text-zinc-300">
          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#" className="hover:text-white transition">
            Benchmarks
          </a>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:scale-105 transition">
          Start Audit
        </button>
      </div>
    </nav>
  );
}