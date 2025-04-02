import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Colleges = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans">
      <Header />
      <main className="py-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Colleges</h1>
        <p className="text-lg text-slate-300">
          Inflection enables college programs to offer compliance, marketing, and advisory support to their student-athletes.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Colleges;