export default function Stats() {
  return (
    <section className="py-16 px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <h2 className="text-4xl font-bold text-white">$2.1M+</h2>
          <p className="text-zinc-400 mt-2">AI spend analyzed</p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <h2 className="text-4xl font-bold text-white">4,000+</h2>
          <p className="text-zinc-400 mt-2">Audits completed</p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <h2 className="text-4xl font-bold text-white">38%</h2>
          <p className="text-zinc-400 mt-2">Average savings found</p>
        </div>

      </div>

    </section>
  );
}