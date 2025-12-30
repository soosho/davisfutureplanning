"use client";

import React from "react";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, ChevronRight } from "lucide-react";

export default function FAQ() {
    const scoreRanges = [
        { label: "Excellent", range: "800 - 850", color: "text-emerald-500" },
        { label: "Very Good", range: "700 - 799", color: "text-green-500" },
        { label: "Good", range: "680 - 699", color: "text-blue-500" },
        { label: "Fair", range: "620 - 679", color: "text-yellow-500" },
        { label: "Bad", range: "500 - 579", color: "text-orange-500" },
        { label: "Very Bad", range: "Below 499", color: "text-red-500" },
    ];

    const factors = [
        { label: "Payment History", percent: "35%" },
        { label: "Debt Ratio", percent: "30%" },
        { label: "Length of History", percent: "15%" },
        { label: "Types of Credit", percent: "10%" },
        { label: "Inquiries", percent: "10%" },
    ];

    const steps = [
        "Order your credit report from all three bureaus.",
        "Correct all inaccuracies (addresses, names, social etc).",
        "Identify any misleading, outdated, or incorrect information.",
        "Draft a customized letter to the bureaus for each item.",
        "Bureaus have 30-45 days to respond.",
        "The results will be sent directly to you.",
        "Keep revolves open and active to increase scores."
    ];

    const faqs = [
        {
            question: "What is my right regarding credit reports?",
            answer: "A consumer reports agency may not charge you for a copy of your report if you request it within 60 days after being notified of adverse action (such as being denied credit). You are also entitled to one free report every 12 months from each of the nationwide consumer reporting agencies (Equifax, Experian, and TransUnion)."
        },
        {
            question: "What is a credit score?",
            answer: "A credit score is a number between 300 and 850 that predicts your creditworthiness. It determines the likelihood that you will pay your bills on time. Higher scores indicate lower risk to lenders."
        },
        {
            question: "What is the secret to a high credit score?",
            answer: "Consistency is key: 1. Pay your bills on time. 2. Keep old accounts open to show history. 3. Don't apply for too much credit at once. 4. Keep your credit utilization below 8%."
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Modern Hero */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-davis-indigo">
                <div className="absolute top-0 right-0 w-full h-full opacity-30">
                    <Image
                        src="/images/business-still-life-concept.jpg"
                        alt="FAQ"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-davis-indigo/90 via-davis-indigo/50 to-davis-indigo" />

                <div className="container relative z-10 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md mb-6"
                    >
                        <HelpCircle className="text-davis-green h-4 w-4" />
                        <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Support Center & FAQ</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
                    >
                        Knowledge <span className="text-davis-green">Hub</span>
                    </motion.h1>
                </div>
            </section>

            {/* Score Info Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Range Table */}
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass p-10 rounded-[3rem] bg-slate-50 border-slate-100">
                            <h3 className="text-2xl font-black text-slate-900 uppercase mb-8">Score Ranges</h3>
                            <div className="space-y-4">
                                {scoreRanges.map((range) => (
                                    <div key={range.label} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                                        <span className="font-bold text-slate-600 uppercase tracking-wide text-sm">{range.label}</span>
                                        <span className={cn("font-black text-lg", range.color)}>{range.range}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Factors */}
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
                            <h3 className="text-2xl font-black text-slate-900 uppercase">Decision Factors</h3>
                            <div className="space-y-6">
                                {factors.map((factor) => (
                                    <div key={factor.label} className="space-y-2">
                                        <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                                            <span>{factor.label}</span>
                                            <span className="text-davis-purple">{factor.percent}</span>
                                        </div>
                                        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: factor.percent }}
                                                transition={{ duration: 1 }}
                                                className="h-full bg-davis-purple"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 uppercase">The <span className="text-davis-purple">7-Step</span> Process</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-davis-green transition-all"
                            >
                                <div className="h-8 w-8 bg-davis-purple/10 rounded-lg flex items-center justify-center text-davis-purple font-black text-sm group-hover:bg-davis-green group-hover:text-black">
                                    {i + 1}
                                </div>
                                <span className="font-bold text-slate-700">{step}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* General FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-none bg-slate-50 rounded-[2rem] px-8 overflow-hidden">
                                <AccordionTrigger className="text-left font-black text-slate-900 uppercase text-lg py-6 hover:no-underline hover:text-davis-purple">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 font-medium leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
}

import { cn } from "@/lib/utils";
