import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-6 mt-12">
      <p>© 2025 GTSS Language School Ⓡ </p>
      <p>
        <Link to="/app/terms" className="underline">
          {" "}
          Terms of Service<span> | </span>
        </Link>
        <Link to="/app/privacy" className="underline">
          {" "}
          Privacy Policy<span> | </span>
        </Link>
        <Link to="/app/trading" className="underline">
          {" "}
          特定商取引法に基づく表記
        </Link>
      </p>
    </footer>
  );
}
