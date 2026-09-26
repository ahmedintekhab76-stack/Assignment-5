import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";
import useTechnologies from "./hooks/useTechnologies";
import { useState } from "react";

export default function App() {
  const { technologies, isLoading, error } = useTechnologies();

  // The stack lives in the parent (App) because both the technology grid
  // (to disable an "added" card) and the sidebar (to list/remove items)
  // need to read and update the same data. Lifting state up here is what
  // lets a child (TechnologyCard's button) send data back to the parent.
  const [stack, setStack] = useState([]);

  function handleAddToStack(technology) {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warn(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack.`);
  }

  function handleRemove(id) {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) {
      toast.info(`${removed.name} removed from your stack.`);
    }
  }

  function handleRemoveAll() {
    setStack([]);
    toast.info("All technologies removed from your stack.");
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Explore the <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="mt-2 text-slate-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {isLoading ? (
          <LoadingState />
        ) : error ? (
          <p className="text-sm text-red-500">Could not load technology data: {error}</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some((item) => item.id === technology.id)}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            <StackSidebar stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        )}
      </section>

      <Footer />

      <ToastContainer position="top-right" autoClose={2500} theme="light" />
    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-slate-500">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-transparent" />
      <p className="text-sm">Loading technologies...</p>
    </div>
  );
}
