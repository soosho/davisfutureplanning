"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, ShieldCheck, CreditCard, Activity, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function GetStarted() {
    return (
        <div className="flex flex-col">
            {/* Modern Hero */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-davis-indigo">
                <div className="absolute top-0 right-0 w-full h-full opacity-40">
                    <Image
                        src="/images/Untitled-design-5.png"
                        alt="Start"
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
                        <Rocket className="text-davis-green h-4 w-4" />
                        <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Pricing & Enrollment</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter"
                    >
                        Basic <span className="text-davis-green">Repair</span>
                    </motion.h1>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Basic Repair Card */}
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <Card className="rounded-[2.5rem] border-none shadow-premium bg-white p-6 h-full flex flex-col transition-all hover:scale-[1.02]">
                                <CardHeader className="text-center pt-10">
                                    <CardTitle className="text-3xl font-black text-slate-900 uppercase">Basic Credit Repair</CardTitle>
                                    <CardDescription className="text-davis-purple font-black text-4xl mt-6">$100.00 <span className="text-slate-400 text-sm italic">+$4.75 tax Down Payment</span></CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow py-10">
                                    <p className="text-center text-slate-500 font-bold uppercase text-xs tracking-[0.2em] mb-8">Service includes</p>
                                    <div className="space-y-4 max-w-xs mx-auto text-slate-600 font-medium italic">
                                        <p>• $100.00 Monthly Fee (+tax)</p>
                                        <p>• One-on-One Evaluation</p>
                                        <p>• Proprietary Dispute Strategy</p>
                                        <p>• Professional Analysis</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="pb-10">
                                    <Button className="w-full bg-slate-900 hover:bg-davis-purple text-white font-black h-16 rounded-3xl text-xl flex items-center justify-center group">
                                        START <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        {/* Credit Beast */}
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <Card className="rounded-[2.5rem] border-none shadow-premium bg-davis-purple text-white p-6 h-full flex flex-col transition-all hover:scale-[1.02]">
                                <CardHeader className="text-center pt-10">
                                    <CardTitle className="text-3xl font-black uppercase">Credit Beast Package</CardTitle>
                                    <CardDescription className="text-davis-green font-black text-4xl mt-6">$499.99 <span className="text-white/40 text-sm italic">+$4.75 tax Enrollment Fee</span></CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow py-10">
                                    <p className="text-center text-white/40 font-bold uppercase text-xs tracking-[0.2em] mb-8">Premium inclusions</p>
                                    <div className="space-y-4 max-w-xs mx-auto text-white/80 font-medium italic">
                                        <p>• $89.99 Monthly Fee (+tax)</p>
                                        <p>• Aggressive Investigation</p>
                                        <p>• Strategic Credit Building</p>
                                        <p>• Priority Support Access</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="pb-10">
                                    <Button className="w-full bg-davis-green hover:bg-emerald-400 text-black font-black h-16 rounded-3xl text-xl flex items-center justify-center group shadow-glow">
                                        START <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
