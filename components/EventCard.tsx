import { EventType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function EventCard({ event }: { event: EventType }) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="
        block rounded-2xl overflow-hidden
        bg-black/20 backdrop-blur-xl
        border border-rose-500/20 shadow-lg

        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden relative">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />

        {/* Category badge */}
        <span
          className="
            absolute top-3 left-3
            bg-rose-700/80 text-white text-xs px-3 py-1 rounded-full
            backdrop-blur-xl
          "
        >
          {event.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg text-white font-semibold mb-2">
          {event.title}
        </h3>

        {/* Date & Time */}
        <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">

          {/* Date */}
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-rose-500" />
            <span>{event.date}</span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2">
            <FaClock className="text-purple-400" />
            <span>{event.time}</span>
          </div>
        </div>
        <div className="flex text-sm text-gray-300 items-center gap-2">
          <FaLocationDot />
          <p >{event.location}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {event.tags.map((tag, index) => (
            <span
              key={index}
              className="
        relative inline-flex items-center justify-center
        px-3 py-1.5 rounded-full
        bg-linear-to-br from-rose-700/40 via-purple-700/30 to-rose-800/40
        text-rose-100 font-semibold text-xs
        shadow-inner shadow-black/30
        hover:from-rose-500/60 hover:via-purple-500/50 hover:to-rose-600/60
        transition-all duration-300 ease-out
      "
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </Link>
  );
}