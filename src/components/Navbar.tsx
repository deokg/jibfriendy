"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navigation, cta, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/90 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-narrow flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-lg md:text-xl font-bold tracking-tight transition-colors whitespace-nowrap",
            scrolled ? "text-charcoal-900" : "text-white"
          )}
        >
          {siteConfig.legalName}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-gold-500",
                    scrolled ? "text-charcoal-900" : "text-white/90"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={cta.topNav.href}
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-600"
          >
            {cta.topNav.label}
            <ArrowRight className="size-4" />
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "lg:hidden p-2 transition-colors",
            scrolled ? "text-charcoal-900" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-cream border-t border-charcoal-100 shadow-lg">
          <nav className="container-narrow py-6 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-charcoal-900 py-2 hover:text-gold-500"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={cta.topNav.href}
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-white"
            >
              {cta.topNav.label}
              <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
