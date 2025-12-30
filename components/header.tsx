"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Get Started", href: "/getstarted" },
        { name: "Check My Credit", href: "/check-my-credit" },
        { name: "Credit Center", href: "/creditbuildingcenter" },
        { name: "FAQ", href: "/faq" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
                isScrolled ? "py-2" : "py-4"
            )}
        >
            <nav className={cn(
                "container mx-auto max-w-7xl transition-all duration-500 rounded-full px-6 py-2 flex items-center justify-between",
                isScrolled ? "glass py-2" : "bg-transparent py-4"
            )}>
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="relative h-12 w-12 overflow-hidden transition-transform group-hover:scale-110">
                        <Image
                            src="/images/dfp-logo--e1617032654293.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={cn(
                        "font-black text-xl tracking-tighter uppercase hidden sm:block",
                        isScrolled ? "text-davis-purple" : "text-white"
                    )}>
                        Davis <span className="text-davis-green">Future</span> Planning
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all rounded-full hover:bg-davis-green/10",
                                isScrolled ? "text-slate-700 hover:text-davis-purple" : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="https://www.secureclientaccess.com/" target="_blank" rel="noopener noreferrer">
                        <Button className="ml-4 bg-davis-purple hover:bg-davis-indigo text-white font-black px-6 rounded-full shadow-glow animate-shimmer transition-transform hover:scale-105">
                            MEMBER LOGIN
                        </Button>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className={isScrolled ? "text-slate-900" : "text-white"} /> : <Menu className={isScrolled ? "text-slate-900" : "text-white"} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 bg-slate-950/95 backdrop-blur-xl border border-white/10 p-6 rounded-3xl md:hidden flex flex-col space-y-4 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-black text-white uppercase py-3 border-b border-white/10 hover:text-davis-green transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href="https://www.secureclientaccess.com/" target="_blank" rel="noopener noreferrer">
                            <Button className="w-full bg-davis-purple text-white font-black py-6 rounded-2xl">
                                MEMBER LOGIN
                            </Button>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
