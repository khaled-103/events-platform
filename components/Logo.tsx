import Link from "next/link";
import { FaTicketAlt } from "react-icons/fa";

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center group" // Use a group for hover effects
        >
            {/* Icon - using rose-500, with rose-400 on hover */}
            <FaTicketAlt
                className="text-rose-500 text-xl mr-2 
                         group-hover:scale-110 
                           transition duration-300 ease-in-out transform"
            />
            {/* Text - main text light gray, "CO" in rose-400, rose-300 on hover */}
            <span
                className="text-xl font-bold text-gray-100 tracking-tight 
                           transition duration-300 ease-in-out"
            >
                EVENTS<span className="text-rose-400">CO</span>
            </span>
        </Link>
    );
}