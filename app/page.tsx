"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Star, ShieldCheck, Zap, Users, PenTool, Play, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import JotFormModal from "@/components/JotFormModal";

export default function Home() {
  const [isBasicRepairModalOpen, setIsBasicRepairModalOpen] = React.useState(false);
  const [isCreditBeastModalOpen, setIsCreditBeastModalOpen] = React.useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      {/* 1. SECTION: Premium Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-davis-indigo">
        {/* Abstract Background Accents */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-davis-purple/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-davis-green/10 blur-[100px] rounded-full" />

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-davis-green" />
              <span className="text-white/80 text-sm font-bold tracking-widest uppercase">Paranda Davis • #1 Guide to Excellent Credit</span>
            </div>
            <h1 className="text-3xl md:text-7xl font-black text-white leading-[1.1] uppercase">
              Everyone In Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-davis-green to-emerald-400">Household</span> Should Have <span className="text-davis-green">Excellent Credit</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              75-100+ points can make a difference. We help you navigate the path to financial freedom through professional credit repair and planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/getstarted">
                <Button className="bg-davis-green hover:bg-emerald-400 text-black font-black h-14 md:h-16 px-10 rounded-2xl text-lg shadow-glow transition-all hover:scale-105 group">
                  GET STARTED NOW <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/getstarted">
                <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 h-14 md:h-16 px-10 rounded-2xl text-lg backdrop-blur-sm">
                  FREE CONSULTATION
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-square lg:aspect-auto h-[500px]">
              <Image
                src="/images/black-family-spending-time-together.jpg"
                alt="Happy Family"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-davis-indigo/80 via-transparent to-transparent" />

              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-10 left-10 glass p-6 rounded-3xl flex items-center space-x-4 max-w-xs"
              >
                <div className="h-12 w-12 bg-davis-green rounded-2xl flex items-center justify-center shadow-glow">
                  <Zap className="text-black h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-slate-500">Expertise</div>
                  <div className="text-2xl font-black text-davis-purple">8+ Years Exp</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SECTION: Pricing Plans (Moved Up) */}
      <section className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-4">
            <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl font-black text-slate-900 uppercase">
              Select Your <span className="text-davis-purple">Success</span> Package
            </motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-base md:text-lg text-slate-600 italic">
              Experience the Davis Future Planning difference with our aggressive dispute process.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="rounded-[2.5rem] border-none shadow-premium bg-white p-4 h-full flex flex-col transition-all hover:scale-[1.02]">
                <CardHeader className="text-center pt-10 pb-6">
                  <div className="mx-auto h-12 w-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                    <ShieldCheck className="text-slate-500 h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">Basic Credit Repair</CardTitle>
                  <div className="pt-4 flex flex-col">
                    <span className="text-5xl md:text-6xl font-black text-slate-900">$100.00</span>
                    <span className="text-slate-400 font-bold uppercase text-xs mt-2">+ $4.75 tax Down Payment</span>
                    <span className="text-davis-purple font-black uppercase text-sm mt-4">$100.00 Monthly Fee</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 px-6 md:px-10 flex-grow">
                  {[
                    "One-on-One Credit Evaluation",
                    "Personalized Strategy Session",
                    "Custom Dispute Letters",
                    "All 3 Bureaus Coverage",
                    "45-Day Response Guarantee",
                    "Online Client Portal"
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="h-5 w-5 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="text-emerald-500 h-3 w-3" />
                      </div>
                      <span className="text-slate-600 font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pb-10 pt-6 px-6 md:px-10">
                  <Button
                    onClick={() => setIsBasicRepairModalOpen(true)}
                    className="w-full bg-slate-900 hover:bg-davis-purple text-white font-black h-14 md:h-16 rounded-3xl text-lg transition-all"
                  >
                    START NOW
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Premium Plan */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="relative mt-8 md:mt-0">
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 z-20 bg-davis-green text-black font-black px-6 py-2 rounded-full shadow-glow text-xs md:text-sm uppercase whitespace-nowrap">
                Aggressive Growth
              </div>
              <Card className="rounded-[2.5rem] border-none shadow-premium bg-davis-purple p-4 h-full flex flex-col text-white transition-all hover:scale-[1.02]">
                <CardHeader className="text-center pt-10 pb-6">
                  <div className="mx-auto h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                    <Star className="text-davis-green h-6 w-6 fill-davis-green" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-black uppercase tracking-tight">Credit Beast Package</CardTitle>
                  <div className="pt-4 flex flex-col">
                    <span className="text-5xl md:text-6xl font-black text-white">$499.99</span>
                    <span className="text-white/50 font-bold uppercase text-xs mt-2">+ $4.75 tax Audit/Enrollment Fee</span>
                    <span className="text-davis-green font-black uppercase text-sm mt-4">$89.99 Monthly Fee</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 px-6 md:px-10 flex-grow text-white/90">
                  {[
                    "Proprietary Dispute Process",
                    "Advanced Strategy Analysis",
                    "Strategic Inquiry Removal",
                    "Priority Debt Management",
                    "VIP Rapid Response",
                    "Elite Credit Building Tools"
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="h-5 w-5 bg-davis-green/20 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="text-davis-green h-3 w-3" />
                      </div>
                      <span className="font-bold text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pb-10 pt-6 px-6 md:px-10">
                  <Button
                    onClick={() => setIsCreditBeastModalOpen(true)}
                    className="w-full bg-davis-green hover:bg-emerald-400 text-black font-black h-14 md:h-16 rounded-3xl text-lg transition-all shadow-glow"
                  >
                    START →
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: Keisha Testimonial Video (NEW) */}
      <section className="py-12 md:py-24 bg-davis-indigo relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight">
                Celebrating <span className="text-davis-green">Real Results</span>
              </h2>
              <p className="text-white/60 mt-4 text-lg md:text-xl">Congratulating Keisha who just completed our program!</p>
            </div>

            {/* Premium Video Embed: Keisha */}
            <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black group">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/pA3sR2wv1Kg"
                title="Davis Future Planning LLC - Keisha Success Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

            <Link href="/getstarted">
              <Button className="bg-white text-davis-indigo hover:bg-davis-green hover:text-black font-black h-14 md:h-16 px-8 md:px-12 rounded-full text-base md:text-lg transition-all transform hover:scale-105">
                START YOUR JOURNEY
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. SECTION: Operational & Intro Video (Restructured) */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Intro Video Side */}
            <motion.div {...fadeInUp} className="sticky top-24 space-y-8">
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
                Better Credit Is Only <span className="text-davis-purple">Seconds Away</span>
              </h3>
              <div className="relative aspect-video rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-xl group">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/sy41imOrHbg"
                  title="Davis Future Planning Intro"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <p className="text-slate-500 font-medium italic">
                Watch how our personalized strategies transform financial lives.
              </p>
            </motion.div>

            {/* Feature Cards Side */}
            <div className="space-y-6 md:space-y-8">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="group p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-davis-green transition-all duration-500">
                <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-davis-purple mb-6 shadow-sm">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase mb-4">We Evaluate Your Credit</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                  One of our certified credit analysts will review your credit report with you and provide a customized in-depth credit evaluation. She/He will make sure you understand the entire credit repair process, answer any questions you may have, and will be available to assist you throughout the process.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="group p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-davis-purple text-white shadow-premium">
                <div className="h-14 w-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-davis-green mb-6 shadow-sm">
                  <PenTool className="h-7 w-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase mb-4">Personalized Strategy</h3>
                <p className="text-white/80 font-medium leading-relaxed text-sm md:text-base">
                  After your evaluation, we will work with you to develop a personalized strategy and dispute inaccurate items with all three credit bureaus. We know what works! We will write customized letters on your behalf. Within 45 days the bureaus will respond to you directly with your results.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: Why Us (Existing) */}
      <section className="py-16 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase">
              Why <span className="text-davis-purple">Choose</span> Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "You Might Be a Victim",
                desc: "According to the Federal Trade Commission, over 79 percent of credit reports contain errors or inaccuracies. We can help identify inaccurate, unverifiable, or misleading items that may be hurting your credit score."
              },
              {
                icon: Star,
                title: "Outstanding Service",
                desc: "We have over eight years of credit & debt management services experience geared towards transforming your financial situation. We offer a free consultation and you will not be billed unless you decide to move forward."
              },
              {
                icon: Zap,
                title: "We Get the Job Done",
                desc: "We are more aggressive than any other credit repair agency. Our proprietary dispute process gives us the ability to be very strategic so misleading, outdated, or incorrect items are removed quickly."
              }
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-premium hover:bg-davis-purple hover:text-white transition-all"
              >
                <div className="h-16 w-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:text-davis-green">
                  <benefit.icon className="h-8 w-8 text-davis-purple group-hover:text-davis-green" />
                </div>
                <h4 className="text-lg md:text-xl font-black uppercase mb-4">{benefit.title}</h4>
                <p className="text-slate-500 text-sm font-medium group-hover:text-white/80 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION: Book Showcase (NEW) */}
      <section className="py-12 md:py-24 bg-davis-indigo text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-davis-purple/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center space-x-2 text-davis-green mb-4">
              <BookOpen className="h-5 w-5" />
              <span className="font-black uppercase tracking-widest text-xs">Knowledge Is Power</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase">Expert <span className="text-davis-green">Literature</span></h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Cornbread Book */}
            <motion.div {...fadeInUp} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row items-center gap-8 md:gap-10 hover:bg-white/10 transition-colors">
              <div className="w-48 md:w-56 h-auto aspect-[2/3] bg-slate-800 rounded-2xl shrink-0 relative overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-all">
                <Image src="/images/cornbread_cover.jpeg" alt="Cornbread: The Little Girl Who Asked a Lot of Questions" fill className="object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-black uppercase text-white mb-4">Cornbread</h4>
                <div className="space-y-4 text-white/80 font-medium leading-relaxed mb-6 text-sm md:text-base">
                  <p>
                    Cornbread The Little Girl Who Asked a Lot of Questions takes youth on a journey of financial literacy through Cornbread’s own experience of learning about spending and saving money. Cornbread will help children of all ages grasp the basics of financial literacy.
                  </p>
                  <p>
                    Through the Cornbread children book series, Paranda Davis will help the next generation of future leaders establish healthy financial habits.
                  </p>
                </div>
                <a href="https://www.cornbreadkidsbooks.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-davis-green text-davis-green hover:bg-davis-green hover:text-black font-black uppercase tracking-wider h-12 px-8 rounded-xl transition-all">
                    Order Copy →
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* The Blueprint Book */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row items-center gap-8 md:gap-10 hover:bg-white/10 transition-colors">
              <div className="w-48 md:w-56 h-auto aspect-[1.3] bg-slate-800 rounded-2xl shrink-0 relative overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all">
                <Image src="/images/blueprint_cover.jpg" alt="How To Get An 800 Credit Score For Rookies" fill className="object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-black uppercase text-white mb-4">The Blueprint</h4>
                <div className="space-y-4 text-white/80 font-medium leading-relaxed mb-6 text-sm md:text-base">
                  <p>
                    "HOW TO GET AN 800 CREDIT SCORE for Rookies" is a boot camp start-up guide for those looking to achieve excellent credit. This book is an official game changer that is designed with practical principles to lead individuals and families on a path to financial freedom.
                  </p>
                </div>
                <a href="https://www.amazon.com/How-Get-Credit-Score-Rookies/dp/0692071377/ref=sr_1_1?qid=1558577665&refinements=p_27:Paranda+Davis&s=books&sr=1-1&text=Paranda+Davis" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-davis-green text-davis-green hover:bg-davis-green hover:text-black font-black uppercase tracking-wider h-12 px-8 rounded-xl transition-all">
                    Order Copy →
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: Trust Badges (Existing) */}
      <section className="py-10 md:py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-16">
            <Image src="/images/authorize_net.png" alt="AuthNet" width={300} height={300} className="h-24 w-auto" />
            <Image src="/images/expertise_badge.png" alt="Expertise" width={300} height={300} className="h-32 w-auto" />
            <Image src="/images/thervo_badge.png" alt="Thervo" width={300} height={280} className="h-32 w-auto" />
          </div>
        </div>
      </section>
      <JotFormModal
        isOpen={isBasicRepairModalOpen}
        onClose={() => setIsBasicRepairModalOpen(false)}
        formId="91474097951164"
        title="Basic Credit Repair Application"
      />
      <JotFormModal
        isOpen={isCreditBeastModalOpen}
        onClose={() => setIsCreditBeastModalOpen(false)}
        formId="240086024112138"
        title="Credit Beast Package Application"
        baseUrl="https://pci.jotform.com/form"
      />
    </div>
  );
}
