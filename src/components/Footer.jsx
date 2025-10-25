import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 text-center mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Naptile Tech Studio — All Rights Reserved.
      </p>
    </footer>
  );
}
