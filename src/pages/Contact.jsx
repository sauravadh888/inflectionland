import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans">
      <Header />
      <main className="py-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-slate-300">
          Reach out to Inflection to learn how we can collaborate or answer any questions you may have.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;