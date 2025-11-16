"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";
import Logo from "./Logo";
import LogoutBtn from "./LogoutBtn";

const navLinks = [
  { name: "Browse Events", href: "/events" },
  { name: "Create Event", href: "/create" },
  { name: "About Us", href: "/about" },
];

const userDropdownLinks = [
  { name: "My Profile", href: "/profile", icon: AiOutlineUser },
  { name: "My Events", href: "/user/events", icon: MdOutlineEventNote },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isAuthenticated = true; // Simulated
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header>
      <nav className="bg-gray-950 shadow-xl sticky top-0 z-50 backdrop-blur-md">
        <div className="self-container">
          <div className="flex justify-between items-center h-16">
            <div className="shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <DesktopLinks />

            {/* Desktop Auth */}
            <AuthStatus isAuthenticated={isAuthenticated} />

            {/* Mobile Toggle */}
            <ControlMobilePanelBtn
              toggleMobileMenu={toggleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenuPanel
          isAuthenticated={isAuthenticated}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </nav>
    </header>
  );
};

export default Navbar;

// Desktop Links
function DesktopLinks() {
  return (
    <div className="hidden md:flex items-center space-x-1">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="relative text-rose-100 hover:text-rose-300 px-4 py-2 text-sm font-medium transition-all duration-300 group"
        >
          {link.name}
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-rose-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
      ))}
    </div>
  );
}

// Mobile Menu Button
function ControlMobilePanelBtn({
  toggleMobileMenu,
  isMobileMenuOpen,
}: {
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}) {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMobileMenu}
        className="inline-flex items-center justify-center p-2.5 rounded-full bg-rose-600/20 hover:bg-rose-500/40 text-rose-300 hover:text-white border border-rose-500/50 transition-all duration-300 shadow-md"
      >
        {isMobileMenuOpen ? (
          <AiOutlineClose className="h-5 w-5" />
        ) : (
          <AiOutlineMenu className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

// Mobile Menu Panel
function MobileMenuPanel({
  isAuthenticated,
  isMobileMenuOpen,
}: {
  isAuthenticated: boolean;
  isMobileMenuOpen: boolean;
}) {
  const mobileMenuClasses = `md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-rose-800/30 transition-all ease-out duration-500 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`;

  return (
    <div className={mobileMenuClasses}>
      <div className="px-4 pt-3 pb-5 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block text-rose-100 hover:text-rose-300 hover:bg-rose-800/20 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
          >
            {link.name}
          </Link>
        ))}

        <div className="border-t border-rose-700/50 pt-4 space-y-2">
          {isAuthenticated ? (
            <>
              {userDropdownLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-rose-100 hover:text-rose-300 hover:bg-rose-800/20 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                >
                  <item.icon className="h-5 w-5 mr-3 text-rose-400" />
                  {item.name}
                </Link>
              ))}
              <LogoutBtn className="w-full mt-2" />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="block text-rose-100 hover:text-rose-300 hover:bg-rose-800/20 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="block bg-linear-to-r from-rose-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-bold px-4 py-3 rounded-lg text-base text-center transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Desktop Auth Status
function AuthStatus({ isAuthenticated }: { isAuthenticated: boolean }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userName = "Alex";

  return (
    <div className="hidden md:flex items-center space-x-4">
      {isAuthenticated ? (
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 bg-linear-to-r from-rose-600/20 to-purple-600/20 hover:from-rose-500/30 hover:to-purple-500/30 text-rose-100 px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-rose-500/20"
          >
            <AiOutlineUser className="h-5 w-5 text-rose-400" />
            <span className="font-semibold text-sm">{userName}</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 rounded-xl shadow-2xl bg-gray-900/95 backdrop-blur-xl ring-1 ring-rose-700/30 overflow-hidden z-50">
              <div className="py-2">
                {userDropdownLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center px-4 py-3 text-sm text-rose-100 hover:bg-rose-800/30 hover:text-rose-300 transition-all duration-300"
                  >
                    <item.icon className="mr-3 h-4 w-4 text-rose-400" />
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-rose-700/40">
                  <LogoutBtn className="w-full px-4 py-3 text-left" />
                </div>
              </div>
            </div>
          )}
        </div>
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