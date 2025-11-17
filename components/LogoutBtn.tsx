import { ComponentProps } from "react";
import { IoMdLogOut } from "react-icons/io";

export default function LogoutBtn({ className, ...props }: ComponentProps<"button">) {
    const handleLogout = () => {
        console.log("Logging out...");
    };
    return (
        <button
            onClick={handleLogout}
            {...props}
            className={`flex items-center px-4 py-2 text-sm text-red-400 hover:bg-gray-700 ${className}`}
        >
            <IoMdLogOut className="mr-2 h-4 w-4" />
            Log Out
        </button>
    );
}