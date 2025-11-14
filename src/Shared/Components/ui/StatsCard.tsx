import React from "react";

interface StatsCardProps {
  title: string;
  value: number;
  icon?: React.ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="p-4 bg-white rounded shadow flex items-center justify-between">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
      <div className="text-2xl">{icon}</div>
    </div>
  );
};
