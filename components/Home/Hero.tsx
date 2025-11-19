import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-28 overflow-hidden">
      {/* Rose linear glow */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-rose-500/10 via-transparent to-black opacity-60 pointer-events-none"></div> */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main content */}
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Discover and Share  
            <span className="text-rose-400"> Amazing Events</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg leading-relaxed">
            Explore trending activities, add your own events, and connect with people 
            who share the same passions in your city.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-4 mt-4">
            <Link
              href="#events"
              className="px-6 py-3 bg-rose-500 hover:bg-rose-400 text-black font-semibold rounded-xl transition"
            >
              Explore Events
            </Link>

            <Link
              href="/event/new"
              className="px-6 py-3 bg-transparent border border-rose-500 hover:bg-rose-500/20 text-rose-400 font-semibold rounded-xl transition"
            >
              Add Event
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Rose circle (modern) */}
      <div className="absolute -right-20 top-10 w-72 h-72 bg-rose-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 bottom-0 w-72 h-72 bg-rose-400/10 rounded-full blur-2xl"></div>
    </section>
  );
}
