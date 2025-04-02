import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'; // ✅ if in src/pages/

const Athletes = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans">
      <Header />
      <main className="py-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Athletes</h1>
        <p className="text-lg text-slate-300">
          Discover how Inflection helps student-athletes maximize NIL opportunities with personalized support and guidance.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Athletes;