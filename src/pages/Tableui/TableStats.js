import React from "react";
import{result} from "../../components/Seed/Tabledata"

export default function TableStats() {
  return (
    <div>
      <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3 bg-blue-950">
        {result.map((stat) => (
          <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-blue-300">
              {stat.increment}
            </dt>
            <dd className="order-first text-2xl font-bold tracking-tight text-blue-300">
              {stat.title}
            </dd>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white">
              {stat.amt}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
