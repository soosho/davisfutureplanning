"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Library, Star, Sparkles, ShieldCheck, Clock, TrendingUp, Landmark } from "lucide-react";

export default function CreditBuildingCenter() {
    const resources = [
        {
            title: "Secured Credit Card",
            icon: CreditCard,
            desc: "No credit score required. Reports 6x a month to bureaus. Option for 2 cards.",
            points: ["Reports 6x Monthly", "No Credit Required", "Multiple Card Options"]
        },
        {
            title: "Self Lender",
            icon: Landmark,
            desc: "CD account that reports to all 3 bureaus. Get your money back after 1 year.",
            points: ["Reports to 3 Bureaus", "Money Back Scheme", "Origination fee $9-$12"]
        },
        {
            title: "Tradeline Store",
            icon: TrendingUp,
            desc: "Boost scores by adding history/age, lowering utilization and improving payment history.",
            points: ["Adds History & Age", "Lowers Utilization", "Perfect Payment Track"]
        },
        {
            title: "Mediator Debt Solutions",
            icon: ShieldCheck,
            desc: "Leave financial stress behind. Lower monthly payments. Pay back a fraction of what you owe.",
            points: ["Lower Monthly Payments", "Fractional Payback", "Debt Stress Relief"]
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Modern Hero */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-davis-indigo">
                <div className="absolute top-0 right-0 w-full h-full opacity-35">
                    <Image
                        src="/images/architecture-building-driveway-186077-scaled.jpg"
                        alt="Center"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-davis-indigo via-davis-indigo/50 to-davis-indigo" />

                <div className="container relative z-10 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md mb-8"
                    >
                        <Library className="text-davis-green h-4 w-4" />
                        <span className="text-white/80 text-xs font-bold tracking-widest uppercase">DFP Credit Building Center</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter"
                    >
                        Building <span className="text-davis-green">Success</span>
                    </motion.h1>
                </div>
            </section>

            {/* Modern Resource Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {resources.map((res, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass group p-8 rounded-[2.5rem] bg-slate-50/50 border-slate-100 hover:bg-white hover:border-davis-green transition-all"
                            >
                                <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-davis-purple group-hover:text-white transition-colors">
                                    <res.icon className="h-7 w-7" />
                                </div>
                                <h4 className="text-xl font-black uppercase text-slate-900 mb-4">{res.title}</h4>
                                <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed">{res.desc}</p>
                                <div className="space-y-3">
                                    {res.points.map((p, j) => (
                                        <div key={j} className="flex items-center space-x-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-davis-green" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{p}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Books Section - Premium Overhaul */}
            <section className="py-32 bg-davis-indigo text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-24 space-y-4">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center justify-center space-x-2 text-davis-green mb-2">
                            <Star className="fill-davis-green h-4 w-4" />
                            <span className="text-xs font-black uppercase tracking-[0.4em]">Expert Literature</span>
                            <Star className="fill-davis-green h-4 w-4" />
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase">
                            The <span className="text-davis-green italic">Blueprint</span> Suite
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">Paranda Davis shares her years of expertise to accelerate your financial journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group flex flex-col lg:flex-row items-center gap-10 bg-white/5 p-12 rounded-[3.5rem] border border-white/10 hover:bg-white/10 transition-all cursor-default"
                        >
                            <div className="w-56 h-72 relative shrink-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110 group-hover:-rotate-3 overflow-hidden rounded-2xl">
                                <Image src="/images/cornbread_cover.jpeg" alt="Cornbread" fill className="object-cover" />
                            </div>
                            <div className="space-y-6">
                                <div className="inline-block bg-davis-green/20 text-davis-green px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Foundation</div>
                                <h4 className="text-3xl font-black text-white uppercase">Cornbread</h4>
                                <p className="text-slate-400 font-medium leading-relaxed">Essential wisdom on establishing financial stability and credit health.</p>
                                <Button className="bg-white hover:bg-davis-green text-black font-black px-8 h-12 rounded-2xl transition-all">ORDER COPY</Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group flex flex-col lg:flex-row items-center gap-10 bg-white/5 p-12 rounded-[3.5rem] border border-white/10 hover:bg-white/10 transition-all cursor-default"
                        >
                            <div className="w-56 h-72 relative shrink-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110 group-hover:rotate-3 overflow-hidden rounded-2xl">
                                <Image src="/images/blueprint_cover.jpg" alt="The Blueprint" fill className="object-cover" />
                            </div>
                            <div className="space-y-6">
                                <div className="inline-block bg-davis-green/20 text-davis-green px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Masterclass</div>
                                <h4 className="text-3xl font-black text-white uppercase">The Blueprint</h4>
                                <p className="text-slate-400 font-medium leading-relaxed">The comprehensive manual for rebuilding your score and mastering the credit game.</p>
                                <Button className="bg-white hover:bg-davis-green text-black font-black px-8 h-12 rounded-2xl transition-all">ORDER COPY</Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

import { CreditCard } from "lucide-react";
