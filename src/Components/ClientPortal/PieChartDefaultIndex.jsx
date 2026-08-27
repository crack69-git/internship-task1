"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Structure",
    value: 1,
    progress: 100,
    color: "#22c55e",
  },
  {
    name: "Config",
    value: 1,
    progress: 100,
    color: "#3b82f6",
  },
  {
    name: "Layouts",
    value: 0,
    progress: 0,
    color: "#f59e0b",
  },
  {
    name: "Navigation",
    value: 0,
    progress: 0,
    color: "#a855f7",
  },
];

export default function PieChartDefaultIndex({ isAnimationActive = true }) {
  return (
    <div className="h-50 w-50">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={45}
            outerRadius={75}
            paddingAngle={3}
            isAnimationActive={isAnimationActive}
            stroke="#ffffff"
            strokeWidth={2}
          >
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>

          <Tooltip
            formatter={(_, __, item) => [
              `${item.payload.progress}%`,
              item.payload.name,
            ]}
          />

          {/* <Legend iconType="circle" /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
