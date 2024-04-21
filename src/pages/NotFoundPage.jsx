import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="max-container">
      <h1 className="head-text">404 - Page Not Found</h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Enthusiastic and driven, I have a deep passion for software
          development and problem solving. I can easily adapt to new things and
          always ready to take on a challenge. I am able to work well both in a
          team as well as using own initiative.
        </p>
      </div>
      <Link to="/"  className="blue-gradient_text font-semibold drop-shadow">Go Home</Link>{" "}
    </section>
  );
}

export default NotFoundPage;
