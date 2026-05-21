const features = [
  {
    title: "AI Spend Detection",
    desc: "Identify unnecessary subscriptions and oversized plans."
  },
  {
    title: "Smart Recommendations",
    desc: "Get cheaper alternatives tailored to your use case."
  },
  {
    title: "Instant Savings Report",
    desc: "See monthly and annual savings immediately."
  },
  {
    title: "Team Benchmarks",
    desc: "Compare your AI spend with similar companies."
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Everything you need to optimize AI costs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="text-zinc-400 mt-4">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}