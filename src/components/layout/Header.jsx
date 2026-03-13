
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/industries", label: "Industries", hasMegaMenu: true },
  { href: "/clients", label: "Clients" },
  { href: "/career", label: "Career" },
  { href: "/blog", label: "News & Insights" },
  { href: "/contact", label: "Contact" },
];

// Sample industries data - you can replace this with actual data from props
const industriesData = [
  {
    category: "Manufacturing",
    industries: [
      { name: "Automotive", slug: "automotive" },
      { name: "Aerospace", slug: "aerospace" },
      { name: "Electronics", slug: "electronics" },
      { name: "Industrial Machinery", slug: "industrial-machinery" },
    ]
  },
  {
    category: "Energy & Utilities",
    industries: [
      { name: "Oil & Gas", slug: "oil-gas" },
      { name: "Renewable Energy", slug: "renewable-energy" },
      { name: "Power Generation", slug: "power-generation" },
      { name: "Mining", slug: "mining" },
    ]
  },
  {
    category: "Infrastructure",
    industries: [
      { name: "Construction", slug: "construction" },
      { name: "Transportation", slug: "transportation" },
      { name: "Marine & Shipping", slug: "marine-shipping" },
      { name: "Railways", slug: "railways" },
    ]
  },
  {
    category: "Technology",
    industries: [
      { name: "Telecommunications", slug: "telecommunications" },
      { name: "Data Centers", slug: "data-centers" },
      { name: "Semiconductors", slug: "semiconductors" },
      { name: "Medical Technology", slug: "medical-technology" },
    ]
  }
];

export default function Header({ services, siteName }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const megaMenuRef = useRef(null);
  const navRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = (menuType) => {
    // Clear any pending close timeouts
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    
    if (menuType === 'services') {
      setDropdownOpen(true);
      setMegaMenuOpen(false);
    } else if (menuType === 'industries') {
      setMegaMenuOpen(true);
      setDropdownOpen(false);
    }
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to improve UX when moving between menus
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
      setMegaMenuOpen(false);
    }, 100);
  };

  const handleNavItemMouseEnter = () => {
    // When hovering over any nav item (non-dropdown), close all menus
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownOpen(false);
    setMegaMenuOpen(false);
  };

  const isHome = pathname === "/";
  const isTransparent = !scrolled && isHome;

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || !isHome
          ? "py-3 bg-white dark:bg-[#0d1117] backdrop-blur-lg border-b border-gray-200 dark:border-[#1565c0]/20 shadow-lg"
          : "py-4  bg-transparent",
      )}
    >
      {/* Top accent bar */}
      {(scrolled || !isHome) && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0d47a1] via-[#1565c0] to-[#1976d2] " />
      )}

      <div className="container mx-auto px-2 max-w-7xl">
        <div className="flex items-center justify-between">

          {/* ── KDS Logo ── */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className={clsx(
              "rounded-xl overflow-hidden transition-all duration-500 border-2",
              isTransparent
                ? "border-white/20 shadow-lg shadow-black/30 bg-white/10 backdrop-blur-sm "
                : "border-[#1565c0]/30 dark:border-[#1565c0]/40 bg-white dark:bg-white shadow-md shadow-[#1565c0]/20 ",
            )}>
              <img
                src="/kds-logo.png"
                alt="KDS International Pvt. Ltd"
                className="h-16 w-auto object-contain p-1"
              />
            </div>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center gap-1" ref={navRef}>
            {navLinks.filter(l => l.href !== "/contact").map((link) =>
              link.hasMegaMenu ? (
                <div 
                  key={link.href} 
                  className="relative" 
                  ref={megaMenuRef}
                  onMouseEnter={() => handleMouseEnter('industries')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={clsx(
                      "flex items-center gap-2 px-2 py-2 rounded-lg !text-[14px] whitespace-nowrap !lg:text-[10px] !xl:text-[14px] font-bold uppercase tracking-[0.12em] transition-all duration-300",
                      pathname.startsWith("/industries")
                        ? "text-[#1565c0] dark:text-[#90caf9] bg-[#1565c0]/10"
                        : isTransparent
                          ? "text-white/80 hover:text-white hover:bg-white/10"
                          : "text-gray-600 dark:text-gray-300 hover:text-[#1565c0] dark:hover:text-[#90caf9] hover:bg-[#1565c0]/5 dark:hover:bg-[#1565c0]/10",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={11}
                      className={clsx(
                        "transition-transform duration-300",
                        megaMenuOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Mega Menu */}
                  <div
                    className={clsx(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[1200px] mx-auto bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-[#1565c0]/20 rounded-2xl shadow-2xl shadow-[#1565c0]/10 overflow-hidden transition-all duration-300 origin-top",
                      megaMenuOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-3 pointer-events-none",
                    )}
                  >
                   {/* <div style={{transform:'translateX(auto)',left:'auto', right:'0'}}
                    className={clsx(
                      "absolute top-full left-1/2  mt-3 w-[800px] bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-[#1565c0]/20 rounded-2xl shadow-2xl shadow-[#1565c0]/10 overflow-hidden transition-all duration-300 origin-top",
                      megaMenuOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-3 pointer-events-none",
                    )}
                  > */}
                    {/* Mega Menu header accent */}
                    <div className="h-1 bg-gradient-to-r from-[#0d47a1] via-[#1565c0] to-[#1976d2]" />
                    
                    <div className="p-4">
                      <div className="mb-4 px-3">
                        <p className="text-[13px] font-black text-[#1565c0] dark:text-[#90caf9] uppercase tracking-[0.3em]">
                          Industries We Serve
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-6">
                        {industriesData.map((category, idx) => (
                          <div key={idx} className="space-y-3">
                            <h3 className=" font-black text-gray-800 dark:text-white uppercase tracking-wider border-b border-gray-100 dark:border-white/10 pb-2" style={{fontSize:'18px'}}>
                              {category.category}
                            </h3>
                            <div className="space-y-2">
                              {category.industries.map((industry) => (
                                <Link
                                  key={industry.slug}
                                  href={`/industries/${industry.slug}`}
                                  className="flex items-center justify-between px-3 py-2 mb-2 rounded-xl text-[14px] font-semibold text-gray-600 dark:text-gray-400 hover:text-[#1565c0] dark:hover:text-[#90caf9] hover:bg-[#1565c0]/5 dark:hover:bg-[#1565c0]/10 transition-all group/item"
                                >
                                  {industry.name}
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#1565c0] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/5">
                        <Link
                          href="/industries"
                          className="block px-2 py-3 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] rounded-xl text-[12px] font-black text-center uppercase tracking-widest text-white hover:from-[#1565c0] hover:to-[#1976d2] transition-all"
                        >
                          Explore All Industries →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : link.hasDropdown ? (
                <div 
                  key={link.href} 
                  className="relative" 
                  ref={dropdownRef}
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={clsx(
                      "flex items-center gap-2 px-xxl-4 px-xl-3 px-lg-2 px-4 py-2 rounded-lg !text-[14px] whitespace-nowrap !lg:text-[10px] !xl:text-[15px] font-bold uppercase tracking-[0.12em] transition-all duration-300",
                      pathname.startsWith("/services")
                        ? "text-[#1565c0] dark:text-[#90caf9] bg-[#1565c0]/10"
                        : isTransparent
                          ? "text-white/80 hover:text-white hover:bg-white/10"
                          : "text-gray-600 dark:text-gray-300 hover:text-[#1565c0] dark:hover:text-[#90caf9] hover:bg-[#1565c0]/5 dark:hover:bg-[#1565c0]/10",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={11}
                      className={clsx(
                        "transition-transform duration-300",
                        dropdownOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={clsx(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-[#1565c0]/20 rounded-2xl shadow-2xl shadow-[#1565c0]/10 overflow-hidden transition-all duration-300 origin-top",
                      dropdownOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-3 pointer-events-none",
                    )}
                  >
                    {/* Dropdown header accent */}
                    <div className="h-1 bg-gradient-to-r from-[#0d47a1] via-[#1565c0] to-[#1976d2]" />
                    <div className="p-3 space-y-0.5">
                      <div className="px-3 py-2 mb-1">
                        <p className="text-[13px] font-black text-[#1565c0] dark:text-[#90caf9] uppercase tracking-[0.3em]">
                          Global Capabilities
                        </p>
                      </div>
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-[14px] font-semibold text-gray-600 dark:text-gray-400 hover:text-[#1565c0] dark:hover:text-[#90caf9] hover:bg-[#1565c0]/5 dark:hover:bg-[#1565c0]/10 transition-all group/item"
                        >
                          {service.title}
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1565c0] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                      <div className="pt-1 border-t border-gray-100 dark:border-white/5 mt-1">
                        <Link
                          href="/services"
                          className="block px-3 py-3 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] rounded-xl text-[12px] font-black text-center uppercase tracking-widest text-white hover:from-[#1565c0] hover:to-[#1976d2] transition-all"
                        >
                          Explore All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-xxl-4 px-xl-3 px-lg-2 px-4 py-2 rounded-lg text-[15px] whitespace-nowrap lg:text-[10px] xl:text-[14px] font-bold tracking-[0.12em] transition-all duration-300",
                    pathname === link.href
                      ? "text-[#1565c0] dark:text-[#90caf9] bg-[#1565c0]/10"
                      : isTransparent
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-gray-600 dark:text-gray-300 hover:text-[#1565c0] dark:hover:text-[#90caf9] hover:bg-[#1565c0]/5 dark:hover:bg-[#1565c0]/10",
                  )}
                  onMouseEnter={handleNavItemMouseEnter}
                >
                  {link.label}
                </Link>
              ),
            )}

            {/* CTA Button */}
            <div 
              className="ms-3 ps-3 border-l border-gray-200 dark:border-white/10"
              onMouseEnter={handleNavItemMouseEnter}
            >
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white rounded-lg text-[11px] font-black uppercase tracking-wider hover:from-[#1565c0] hover:to-[#1976d2] transition-all shadow-md shadow-[#1565c0]/30 active:scale-95"
              >
                <Phone size={12} />
                Get a Quote
              </Link>
            </div>
          </nav>

          {/* ── Mobile Menu Toggle ── */}
          <button
            className={clsx(
              "lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border transition-all",
              isTransparent
                ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:text-[#1565c0] dark:hover:text-[#90caf9]  h-10"
            )}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={clsx(
          "lg:hidden fixed inset-0 top-0 bg-white dark:bg-[#0d1117] transition-all duration-500 ease-in-out overflow-y-auto z-10",
          mobileOpen
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-1 translate-x-full pointer-events-none",
        )}
      >
        {/* Blue accent stripe */}
        <div className="h-1 bg-gradient-to-r from-[#0d47a1] via-[#1565c0] to-[#1976d2]" />

        <div className="container mx-auto px-4 py-4 space-y-2">
          {/* Logo in mobile menu */}
          <div className="flex items-center justify-between gap-4 pb-3 border-b border-gray-100 dark:border-white/5">
            <div className="bg-white dark:bg-white rounded-xl p-2 border-2 border-[#1565c0]/30 shadow-md">
              <img src="/kds-logo.png" alt="KDS International" className="h-12 w-auto object-contain" />
            </div>
            {/* ── Mobile Menu Toggle ── */}
          <button
            className={clsx(
              "lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border transition-all",
              isTransparent
                ? "bg-white/10 border-white/20 text-dark hover:bg-white/20"
                : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:text-[#1565c0] dark:hover:text-[#90caf9]"
            )}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          </div>

          {navLinks.map((link, idx) => (
            <div
              key={link.href}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {link.hasDropdown ? (
                <div>
                  <p className="text-2xl tracking-tight font-black  tracking-[0.3em] mb-3 mt-4">
                    Our Services
                  </p>
                  <div className="grid grid-cols-1 gap-1 pl-2">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="text-base font-semibold text-gray-500 dark:text-white/50 hover:text-[#1565c0] dark:hover:text-[#90caf9] transition-colors py-1.5 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1565c0]/40 shrink-0" />
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : link.hasMegaMenu ? (
                <div>
                  <p className="text-2xl tracking-tight font-black tracking-[0.3em] mb-3 mt-4">
                    Industries
                  </p>
                  <div className="space-y-4 pl-2">
                    {industriesData.map((category, idx) => (
                      <div key={idx} className="space-y-2 my-3">
                        <h3 className="text-lg font-black text-[#1565c0] !text-[13px] dark:text-[#90caf9] uppercase tracking-wider">
                          {category.category}
                        </h3>
                        <div className="grid grid-cols-1 gap-1">
                          {category.industries.map((industry) => (
                            <Link
                              key={industry.slug}
                              href={`/industries/${industry.slug}`}
                              className="text-base font-semibold text-gray-500 dark:text-white/50 hover:text-[#1565c0] dark:hover:text-[#90caf9] transition-colors py-1 flex items-center gap-2 text-[13px]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1565c0]/40 shrink-0" />
                              {industry.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={clsx(
                    "block text-2xl font-black tracking-tight py-3 border-b border-gray-50 dark:border-white/5 transition-all",
                    pathname === link.href
                      ? "text-[#1565c0] dark:text-[#90caf9]"
                      : "text-gray-800 dark:text-white hover:text-[#1565c0] dark:hover:text-[#90caf9] hover:pl-2",
                  )}
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-6">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white rounded-xl text-sm font-black uppercase tracking-[0.2em] shadow-lg shadow-[#1565c0]/30 hover:from-[#1565c0] hover:to-[#1976d2] transition-all"
            >
              <Phone size={16} />
              Get a Quote / Booking
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}