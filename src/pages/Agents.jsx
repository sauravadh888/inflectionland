import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'; // ✅ if in src/pages/

const Agents = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans">
      <Header />
      <main className="py-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Agents</h1>
        <p className="text-lg text-slate-300">
          Learn how agents can connect with athletes and provide streamlined support through our AI-powered platform.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Agents;