"use client"
import Link from "next/link";
import {
  FaLinkedin,

  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaUser,
} from "react-icons/fa";
import Logo from "./Logo";
import { contactInfo } from "@/constants/contact";
import { navLinks } from "@/constants";

export default function Footer() {
  return (
    <footer className="relative py-8 lg:py-16 mt-8 overflow-hidden  border-t border-rose-800/30">
      <div className="relative self-container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo + Description */}
          <div className="space-y-6">
            <Logo />
            <p className="text-sm lg:text-base text-gray-400 leading-relaxed max-w-xs">
              A platform to explore, publish, and manage events with category filtering and real-time updates.
            </p>
            <p className="text-xs text-gray-500">
              Join thousands of event enthusiasts in worldwide communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold bg-linear-to-r from-rose-400 via-rose-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-300">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block hover:text-rose-400 transition-colors duration-300 hover:translate-x-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold bg-linear-to-r from-rose-400 via-rose-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-rose-400 text-lg" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-rose-400 text-lg" />
                <span>{contactInfo.phone}</span>
              </li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div className="space-y-10">
            {/* Social Icons */}
            <div>
              <h3 className="text-xl lg:text-2xl font-bold bg-linear-to-r from-rose-400 via-rose-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Follow Us
              </h3>
              <div className="flex gap-5">
                {[
                  { Icon: FaLinkedin, href: contactInfo.socialLinks.linkedIn, label: "Linkedin" },
                  { Icon: FaGithub, href: contactInfo.socialLinks.github, label: "GitHub" },
                  { Icon: FaUser, href: contactInfo.socialLinks.portfolio, label: "Portfolio" },
                ].map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group w-12 h-12 rounded-full bg-linear-to-br from-rose-500/20 to-pink-600/20 flex items-center justify-center hover:scale-110 hover:from-rose-500/40 hover:to-pink-600/40 transition-all duration-300 shadow-lg hover:shadow-rose-500/30"
                  >
                    <Icon className="text-xl text-rose-100 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-16 pt-8">
          <div className="h-px bg-linear-to-r from-transparent via-rose-500/40 to-transparent mb-6" />
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} EventHub — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}