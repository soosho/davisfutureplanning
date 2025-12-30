"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Clock, Instagram, Facebook, Twitter, Shield } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-24 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-davis-purple/10 blur-[150px] -z-10" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    {/* Brand Info */}
                    <div className="md:col-span-5 space-y-8">

                        <p className="text-lg max-w-md leading-relaxed">
                            Davis Future Planning LLC provides expert credit and debt management services geared towards transforming your financial situation.
                        </p>
                        <div className="flex space-x-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <Link key={i} href="#" className="h-12 w-12 bg-white/5 flex items-center justify-center rounded-2xl hover:bg-davis-green hover:text-black transition-all">
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-white font-black uppercase tracking-tight">Navigation</h4>
                        <div className="flex flex-col space-y-4 font-bold text-sm uppercase tracking-wider">
                            <Link href="/" className="hover:text-davis-green transition-colors">Home</Link>
                            <Link href="/getstarted" className="hover:text-davis-green transition-colors">Get Started</Link>
                            <Link href="/check-my-credit" className="hover:text-davis-green transition-colors">Check Credit</Link>
                            <Link href="/creditbuildingcenter" className="hover:text-davis-green transition-colors">Credit Center</Link>
                            <Link href="/faq" className="hover:text-davis-green transition-colors">FAQ</Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="text-white font-black uppercase tracking-tight">Contact Us</h4>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="h-10 w-10 bg-davis-purple/20 flex items-center justify-center rounded-xl text-davis-green shrink-0">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <span className="text-white/80 font-medium">
                                    227 W 4th St Suite #217<br />
                                    Charlotte, NC 28202
                                </span>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="h-10 w-10 bg-davis-purple/20 flex items-center justify-center rounded-xl text-davis-green shrink-0">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <span className="text-white/80 font-medium">
                                    Mon – Fri: 11:00 am – 7:00 pm<br />
                                    Sat – Sun: Closed
                                </span>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="h-10 w-10 bg-davis-purple/20 flex items-center justify-center rounded-xl text-davis-green shrink-0">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <Link href="mailto:sales@dfpcreditrepair.com" className="text-white hover:text-davis-green transition-colors font-medium">
                                    sales@dfpcreditrepair.com
                                </Link>
                            </div>
                        </div>

                        {/* Security Badge */}
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center space-x-3">
                            <Shield className="text-davis-green h-5 w-5" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/50">Certified Credit Analysts</span>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-[0.2em]">
                    <p>© {new Date().getFullYear()} Davis Future Planning LLC. All Rights Reserved.</p>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-white/20">Financial Stewardship & Excellence</p>
                        <Link href="https://github.com/soosho/" target="_blank" className="text-white/20 hover:text-davis-green transition-colors">
                            Designed by soosho
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
