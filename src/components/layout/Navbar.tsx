"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Home Link - Left */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-foreground hover:text-foreground/90 transition-colors">
            Samuel Nwabuze
          </span>
        </Link>

        {/* Navigation - Center */}
        <nav className="hidden md:flex flex-1 justify-center gap-10">
          <Link 
            href="/#projects" 
            className="text-lg font-semibold transition-colors hover:text-foreground text-foreground/70 hover:scale-105 transform duration-200"
          >
            Work
          </Link>
          <Link 
            href="/#impact" 
            className="text-lg font-semibold transition-colors hover:text-foreground text-foreground/70 hover:scale-105 transform duration-200"
          >
            Experience
          </Link>
          <Link 
            href="/#tech" 
            className="text-lg font-semibold transition-colors hover:text-foreground text-foreground/70 hover:scale-105 transform duration-200"
          >
            Skills
          </Link>
        </nav>

        {/* Right Section - Theme Toggle & Contact Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link 
            href="/#contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-rose-500 px-4 py-2 text-sm font-medium text-white hover:from-purple-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}