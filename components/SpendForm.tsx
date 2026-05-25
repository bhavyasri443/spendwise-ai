"use client";

import { useEffect, useState } from "react";
import { pricingData } from "@/data/pricing";

const plans: any = {
  chatgpt: ["plus", "team", "enterprise"],
  claude: ["pro", "team", "enterprise"],
  cursor: ["pro", "business", "enterprise"],
  copilot: ["individual", "business", "enterprise"],
  gemini: ["pro", "ultra"],
};

const toolOptions = [
  "chatgpt",
  "claude",
  "cursor",
  "copilot",
  "gemini",
];

export default function SpendForm() {

  const [tools, setTools] = useState([
    {
      tool: "chatgpt",
      plan: "plus",
      seats: 1,
    },
  ]);

  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const savedTools =
      localStorage.getItem("audit-tools");

    if (savedTools) {
      setTools(JSON.parse(savedTools));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "audit-tools",
      JSON.stringify(tools)
    );
  }, [tools]);

  const addTool = () => {
    setTools([
      ...tools,
      {
        tool: "chatgpt",
        plan: "plus",
        seats: 1,
      },
    ]);
  };

  const removeTool = (index: number) => {
    const updated = tools.filter(
      (_, i) => i !== index
    );

    setTools(updated);
  };

  const updateTool = (
    index: number,
    field: string,
    value: any
  ) => {

    const updated = [...tools];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    if (field === "tool") {
      updated[index].plan =
        plans[value][0];
    }

    setTools(updated);
  };

  const generateAudit = () => {

    const auditResults = tools.map((item: any) => {

      const currentPrice =
        (pricingData as any)[item.tool][item.plan] *
        item.seats;

      let recommendation =
        "Your current plan is optimized.";

      let savings = 0;

      if (
        item.tool === "chatgpt" &&
        item.plan === "team" &&
        item.seats <= 2
      ) {
        recommendation =
          "Switch to ChatGPT Plus for smaller teams.";

        savings = 10 * item.seats;
      }

      if (
        item.tool === "cursor" &&
        item.plan === "business"
      ) {
        recommendation =
          "Cursor Pro may be sufficient for smaller teams.";

        savings = 20 * item.seats;
      }

      return {
        ...item,
        currentPrice,
        recommendation,
        savings,
      };
    });

    setResults(auditResults);
  };

  return (
    <section
      id="audit"
      className="px-6 py-24"
    >

      <div className="max-w-5xl mx-auto">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

          <h2 className="text-4xl font-bold text-center">
            AI Spend Audit
          </h2>

          <p className="text-zinc-400 text-center mt-4">
            Analyze your AI stack and reduce unnecessary spending.
          </p>

          <div className="space-y-6 mt-10">

            {tools.map((tool: any, index: number) => (

              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-2xl p-6"
              >

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                  <select
                    value={tool.tool}
                    onChange={(e) =>
                      updateTool(
                        index,
                        "tool",
                        e.target.value
                      )
                    }
                    className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"
                  >

                    {toolOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                      >
                        {option}
                      </option>
                    ))}

                  </select>

                  <select
                    value={tool.plan}
                    onChange={(e) =>
                      updateTool(
                        index,
                        "plan",
                        e.target.value
                      )
                    }
                    className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"
                  >

                    {plans[tool.tool].map(
                      (plan: string) => (
                        <option
                          key={plan}
                          value={plan}
                        >
                          {plan}
                        </option>
                      )
                    )}

                  </select>

                  <input
                    type="number"
                    value={tool.seats}
                    onChange={(e) =>
                      updateTool(
                        index,
                        "seats",
                        Number(e.target.value)
                      )
                    }
                    className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"
                  />

                </div>

                <button
                  onClick={() => removeTool(index)}
                  className="mt-4 text-red-400 text-sm hover:text-red-300"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-8">

            <button
              onClick={addTool}
              className="border border-zinc-700 px-6 py-4 rounded-2xl hover:bg-zinc-800 transition"
            >
              Add Another Tool
            </button>

            <button
              onClick={generateAudit}
              className="bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Generate Audit
            </button>

          </div>

        </div>

        {results.length > 0 && (

          <div className="space-y-6 mt-10">

            {results.map((result, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >

                <h3 className="text-2xl font-bold capitalize">
                  {result.tool}
                </h3>

                <p className="text-zinc-400 mt-2">
                  Current Spend:
                  ${result.currentPrice}/month
                </p>

                <p className="text-zinc-400 mt-2">
                  Recommendation:
                  {" "}
                  {result.recommendation}
                </p>

                <p className="text-green-400 mt-2 font-semibold">
                  Potential Savings:
                  ${result.savings}/month
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}