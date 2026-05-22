"use client";

import { useState } from "react";
import { pricingData } from "@/data/pricing";

export default function SpendForm() {

  const [tool, setTool] = useState("chatgpt");
  const [plan, setPlan] = useState("plus");
  const [seats, setSeats] = useState(1);

  const [result, setResult] = useState<any>(null);

  const generateAudit = () => {

    const currentPrice =
  (pricingData as any)[tool][plan] * seats;

    let recommendation =
      "Your current plan is optimized.";

    let savings = 0;

    if (tool === "chatgpt" && plan === "team" && seats <= 2) {
      recommendation =
        "Switch to ChatGPT Plus for smaller teams.";

      savings = 10 * seats;
    }

    if (tool === "cursor" && plan === "business") {
      recommendation =
        "Cursor Pro may be sufficient for your needs.";

      savings = 20 * seats;
    }

    setResult({
      currentPrice,
      recommendation,
      savings,
    });
  };

  return (
    <section className="px-6 py-24">

      <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <h2 className="text-4xl font-bold text-center">
          AI Spend Audit
        </h2>

        <p className="text-zinc-400 text-center mt-4">
          Analyze your AI subscriptions and discover savings opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">

          <select
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="bg-black border border-zinc-700 rounded-xl p-4"
          >
            <option value="chatgpt">ChatGPT</option>
            <option value="claude">Claude</option>
            <option value="cursor">Cursor</option>
            <option value="copilot">Copilot</option>
            <option value="gemini">Gemini</option>
          </select>

          <input
            type="text"
            placeholder="Plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="bg-black border border-zinc-700 rounded-xl p-4"
          />

          <input
            type="number"
            placeholder="Seats"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="bg-black border border-zinc-700 rounded-xl p-4"
          />

        </div>

        <button
          onClick={generateAudit}
          className="mt-8 w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.01] transition"
        >
          Generate Audit
        </button>

        {result && (

          <div className="mt-10 bg-black border border-zinc-800 rounded-2xl p-6">

            <h3 className="text-2xl font-bold">
              Audit Results
            </h3>

            <p className="text-zinc-400 mt-4">
              Current Spend: ${result.currentPrice}/month
            </p>

            <p className="text-zinc-400 mt-2">
              Recommendation: {result.recommendation}
            </p>

            <p className="text-green-400 mt-2 font-semibold">
              Potential Savings: ${result.savings}/month
            </p>

          </div>

        )}

      </div>

    </section>
  );
}