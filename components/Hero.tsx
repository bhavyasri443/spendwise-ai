export default function Hero() {
  return (
    <section className="py-24 px-6 text-center">

      <div className="max-w-4xl mx-auto">

        <div className="inline-block px-4 py-2 rounded-full border border-zinc-700 text-sm text-zinc-300 mb-6">
          Trusted by growing AI teams
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Stop Overpaying <br />
          for AI Tools
        </h1>

        <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
          Audit your AI stack instantly and discover hidden monthly savings across ChatGPT, Claude, Cursor, Copilot and more.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            Run Free Audit
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-2xl text-white hover:bg-zinc-900 transition">
            View Demo
          </button>

        </div>

      </div>

    </section>
  );
}