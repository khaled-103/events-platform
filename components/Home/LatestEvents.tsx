import { FaCalendarAlt } from "react-icons/fa";
import LatestEventsSwiper from "./LatestEventsSwiper";
export default function LatestEvents() {
  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="flex items-center gap-2 mb-8">
          <FaCalendarAlt className="text-rose-500 text-xl" />
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Latest Events
          </h2>
        </div>
        {/* Swiper */}
        <LatestEventsSwiper />
      </div>
    </section>
  );
}