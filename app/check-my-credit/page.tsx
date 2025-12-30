"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, ShieldAlert, CheckCircle, ExternalLink, UserCheck } from "lucide-react";

export default function CheckMyCredit() {
    return (
        <div className="flex flex-col">
            {/* Modern Hero */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-davis-indigo">
                <div className="absolute top-0 right-0 w-full h-full opacity-35">
                    <Image
                        src="/images/mom-teaching-son-how-to-drawing.jpg"
                        alt="Family"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-davis-indigo via-davis-indigo/60 to-transparent" />

                <div className="container relative z-10 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md mb-8"
                    >
                        <UserCheck className="text-davis-green h-4 w-4" />
                        <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Start your evaluation</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter"
                    >
                        Check <span className="text-davis-green">Scores</span>
                    </motion.h1>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-black text-slate-900 uppercase">Welcome</h2>
                        <p className="text-lg text-slate-500 font-medium italic">Hi there, please fill out and submit this form.</p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-16 rounded-[3rem] border-slate-100 bg-slate-50/50 relative overflow-hidden text-center max-w-2xl mx-auto"
                    >
                        <div className="h-20 w-20 bg-davis-green rounded-3xl flex items-center justify-center text-black mx-auto mb-10 shadow-glow">
                            <ShieldAlert className="h-10 w-10" />
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Provider Access Integration</h3>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Reports from all 3 bureaus</p>
                            </div>

                            <Button className="w-full bg-davis-purple hover:bg-davis-indigo text-white font-black h-20 rounded-2xl text-2xl animate-shimmer shadow-premium">
                                START
                            </Button>

                            <div className="flex justify-center items-center gap-6 opacity-40">
                                <img src="/images/authorize_net.png" className="h-6" />
                                <img src="/images/unnamed.png" className="h-8" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
