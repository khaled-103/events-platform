"use client";
import { useState } from "react";
import Logo from "./Logo";
import { navLinks } from "@/constants";
import Link from "next/link";
import { AiOutlineUser,AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";
import LogoutBtn from "./LogoutBtn";
const userDropdownLinks = [
  { name: "My Profile", href: "/profile", icon: AiOutlineUser },
  { name: "My Events", href: "/user/events", icon: MdOutlineEventNote },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const isAuthenticated = true;
  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-transparent backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="shrink-0 hover:opacity-90 transition-opacity">
              <Logo />
            </div>

            {/* Desktop Links */}
            <DesktopLinks navLinks={navLinks} />

            {/* Desktop Auth */}
            <DesktopAuth isAuthenticated={isAuthenticated}/>

            {/* Mobile Toggle */}
            <MobileToggleBtn
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenuPanel
          isMobileMenuOpen={isMobileMenuOpen}
          isAuthenticated={isAuthenticated}
        />
      </nav>
    </header>
  );
}


export  function DesktopLinks({ navLinks }: { navLinks: typeof import("@/constants").navLinks }) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="relative text-rose-100 hover:text-rose-300 px-3 py-2 font-medium text-sm group transition-all duration-300"
        >
          {link.name}
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-rose-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </Link>
      ))}
    </div>
  );
}



export function DesktopAuth({isAuthenticated}:{isAuthenticated:boolean}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userName = "Alex";

  return (
    <div className="hidden md:flex items-center space-x-4 relative">
      {isAuthenticated ? (
        <UserDropdown
          userName={userName}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      ) : (
        <>
          <Link
            href="/login"
            className="text-rose-100 hover:text-rose-300 px-4 py-2 text-sm font-medium transition-all duration-300"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="bg-linear-to-r from-rose-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}


export  function UserDropdown({
  userName,
  isDropdownOpen,
  setIsDropdownOpen,
}: {
  userName: string;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (val: boolean) => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-rose-600/20 to-purple-600/20 text-rose-100 hover:from-rose-500/30 hover:to-purple-500/30 transition-all duration-300 shadow-md hover:shadow-rose-500/20"
      >
        
        <span className="font-semibold text-sm">{userName}</span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-3 w-60 bg-black/90 backdrop-blur-xl border border-rose-900/30 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="py-2">
            {userDropdownLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsDropdownOpen(false)}
                className="flex items-center gap-3 px-5 py-3.5 text-rose-100 text-sm hover:bg-rose-950/50 hover:text-rose-300 transition-colors duration-200"
              >
                <item.icon className="w-5 h-5 text-rose-400" />
                {item.name}
              </Link>
            ))}

            <div className="my-2 border-t border-rose-900/30" />

            <LogoutBtn className="flex items-center gap-3 w-full px-5 py-3.5 text-rose-400 text-sm font-medium hover:bg-rose-950/50 hover:text-rose-300 transition-colors duration-200" />
          </div>
        </div>
      )}
    </div>
  );
}


export function MobileToggleBtn({
  isMobileMenuOpen,
  toggleMobileMenu,
}: {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}) {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMobileMenu}
        className="inline-flex items-center justify-center p-2.5 rounded-full bg-rose-600/20 hover:bg-rose-500/40 text-rose-300 hover:text-white border border-rose-500/50 transition-all duration-300 shadow-md"
      >
        {isMobileMenuOpen ? <AiOutlineClose className="h-5 w-5" /> : <AiOutlineMenu className="h-5 w-5" />}
      </button>
    </div>
  );
}


export function MobileMenuPanel({
  isMobileMenuOpen,
  isAuthenticated
}: {
  isMobileMenuOpen: boolean;
  isAuthenticated: boolean
}) {
  return (
    <div className={`md:hidden bg-neutral-900/95 backdrop-blur-lg border-t border-rose-800/30 transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
      <div className="px-4 pt-3 pb-5 space-y-2">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="block text-rose-100 hover:text-rose-300 hover:bg-rose-800/20 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300">
            {link.name}
          </Link>
        ))}

        {isAuthenticated ? (
          <>
            {userDropdownLinks.map((item) => (
              <Link key={item.name} href={item.href} className="flex items-center text-rose-100 hover:text-rose-300 hover:bg-rose-800/20 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300">
                <item.icon className="h-5 w-5 mr-3 text-rose-400" />
                {item.name}
              </Link>
            ))}
            <LogoutBtn className="w-full mt-2" />
          </>
        ) : (
          <>
            <Link href="/login" className="block text-rose-100 hover:text-rose-300 hover:bg-rose-800/20 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300">
              Log In
            </Link>
            <Link href="/signup" className="block bg-linear-to-r from-rose-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-bold px-4 py-3 rounded-lg text-base text-center transition-all duration-300 shadow-lg transform hover:scale-105">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
}