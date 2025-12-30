"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Library, CreditCard, Landmark, TrendingUp, ShieldCheck, Zap, Home, BarChart, ExternalLink } from "lucide-react";

export default function CreditBuildingCenter() {
    const resources = [
        {
            title: "Credit Build Card",
            icon: CreditCard,
            desc: "This is a secured credit card in your name used for the sole purpose of helping you build your credit score. • No minimum credit score required. That means, there is 100% hope for you! • The credit limit is low, but you have to start somewhere in order to establish and build your credit back up. • The card reports to all three credit bureaus 6 times a month. • They will allow you the option of getting two credit cards. Which is double the credit building opportunity.",
            link: "https://www.creditbuildercard.com/dfp.html",
            btnText: "Get Started"
        },
        {
            title: "Self Lender",
            icon: Landmark,
            desc: "Having a self lender account is different from the others. But, still a great choice, especially for account diversification. This is a CD (certificate of deposit) that reports to ALL THREE CREDIT BUREAUS. You will receive the money back after it matures in one year. There is a small origination fee (around $9 – $12), then small monthly payments after. It is based on how much you want the CD to report. Each payment is reported to the 3 credit bureaus (don’t screw this up!). At the end of the term, you’ve paid off the loan and you can get the money back + interest. Hence, saving money while boosting your credit. NEW AND PAID TRADE LINE ALERT = POTENTIAL CREDIT SCORE INCREASE",
            link: "https://www.selflender.com/signup?net=9Af%2AztwQcMc",
            btnText: "Sign Up"
        },
        {
            title: "Tradeline Store",
            icon: TrendingUp,
            desc: "Boost scores by adding history/age, lowering utilization and improving payment history.",
            link: "https://tradeline.store/davis-future-planning-llc",
            btnText: "Get Started"
        },
        {
            title: "Mediator Debt Solutions",
            icon: ShieldCheck,
            desc: "Leave financial stress behind. Lower monthly payments. Pay back a fraction of what you owe.",
            link: "https://dfp.mediatordebtsolutions.com/",
            btnText: "Get Started"
        },
        {
            title: "Check n Go",
            icon: Zap,
            desc: "We’re in this together. From online or mobile, whenever, wherever.",
            link: "https://www.checkngo.com/",
            btnText: "Get Started"
        },
        {
            title: "Rent Reporters",
            icon: Home,
            desc: "• They are currently reporting to Transunion AND Equifax; they will also report your rent as a tradeline to your credit report. • They can backdate your rental history up to 24 months. • They will verify all information, including ownership of the property so ensure you have a good track record with your landlord first.",
            link: "https://prf.hn/l/6lJBoRv%20%20",
            btnText: "Get Started"
        },
        {
            title: "Experian Boost",
            icon: BarChart,
            desc: "Experian Boost is a newer product that Experian launched last year. Experian will report *utility bills* to your Experian credit report, in exchange for your bank account information (that is where they will verify your payment history each month). News reports are stating this will be done for free. However, I can’t seem to find this on their website so we shall see! How would you feel about providing your BANK ACCOUNT INFORMATION in exchange to report your phone/electric bills?",
            link: "https://www.experian.com/consumer-products/credit-score.html",
            btnText: "Get Started"
        },
        {
            title: "Tradelines",
            icon: TrendingUp,
            desc: "Supercharge your credit. Get the boost you need Davis Future Planning LLC allows you to rent good credit, adding positive credit history to your credit report to help you reach your financial goals.",
            link: "https://tradeline.store/davis-future-planning-llc",
            btnText: "Get Started"
        },
        {
            title: "Boom Rent Reporting",
            icon: Home,
            desc: "APPLY IN MINUTES!!! PAY AS YOU GO!!! ADD PRIMARY RENTAL TRADELINE TO YOUR CREDIT REPORT Rent is the largest monthly expense and your clients are currently not getting credit for making these on-time payments. Adding a rental tradeline to their credit report can help diversify their credit portfolio and can improve their credit score. Its helpful for renters seeking to build or boost credit. Members see an increase in their scores between 5-100 points. To register you will need: (1) a valid rental agreement within the past 24 months, (2) a social security number, and (3) a bank account that you use/have used to pay your rent payments. No landlord interaction is required. Approvals are immediate.",
            link: "https://www.boompay.app/boomreport?source=DFP#how-it-works",
            btnText: "Get Started"
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
                        className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight max-w-5xl mx-auto"
                    >
                        Everyone In Your Household Should Have <span className="text-davis-green">Excellent Credit</span>
                    </motion.h1>
                </div>
            </section>

            {/* Modern Resource Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((res, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass group p-8 rounded-[2.5rem] bg-slate-50/50 border-slate-100 hover:bg-white hover:border-davis-green transition-all flex flex-col h-full"
                            >
                                <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-davis-purple group-hover:text-white transition-colors shrink-0">
                                    <res.icon className="h-7 w-7" />
                                </div>
                                <h4 className="text-xl font-black uppercase text-slate-900 mb-4">{res.title}</h4>
                                <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed flex-grow whitespace-pre-wrap">{res.desc}</p>
                                <a href={res.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                                    <Button className="w-full bg-slate-900 group-hover:bg-davis-green group-hover:text-black text-white font-black rounded-xl transition-all">
                                        {res.btnText} <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
