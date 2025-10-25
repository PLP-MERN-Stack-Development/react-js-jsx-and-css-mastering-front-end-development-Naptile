import React from "react";

export default function Card({ title, description, children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-3 border border-gray-200 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-3">{description}</p>
      {children}
    </div>
  );
}
