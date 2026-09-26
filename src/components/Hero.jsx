import bannerImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Build Your Ideal{" "}
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="mt-5 max-w-md text-base text-slate-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="bg-brand-gradient rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImage}
            alt="Isometric illustration of a development stack"
            className="w-64 sm:w-80 md:w-96"
          />
        </div>
      </div>
    </section>
  );
}
