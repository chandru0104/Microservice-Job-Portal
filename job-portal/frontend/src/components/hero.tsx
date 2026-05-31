import { ArrowRight, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#f8fafc] dark:bg-background overflow-hidden pt-8 pb-16 lg:pt-8 lg:pb-24">
      {/* Soft gradient background similar to the image */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-gradient-to-l from-[#e0f2fe] dark:from-blue-950/30 to-transparent opacity-80 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6 animate-in slide-in-from-left-8 fade-in duration-1000">
            
            {/* main heading */}
            <h1 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] text-slate-900 dark:text-slate-100 font-medium tracking-tight">
              Find Your <br/>
              <span className="font-bold text-blue-600 dark:text-blue-400">Dream Job</span> Here
            </h1>

            {/* descripiton */}
            <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-md font-medium">
              Break the border and start working for the most suitable company
              in the industry. Make the way to your dream job easier with our
              platform.
            </p>

            <div className="pt-2">
              <Link href={"/jobs"}>
                <Button
                  className="rounded-full px-6 py-3 text-base md:px-10 md:py-7 md:text-lg font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-xl"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* stats */}
            <div className="flex gap-8 md:gap-12 pt-12 lg:pt-8 w-full">
              <div>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">50,000+</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">Active Members</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">7,000+</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">Global Companies</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">90%</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">Hiring Response</p>
              </div>
            </div>
          </div>

          {/* Right Section (Cards/Illustrations) */}
          <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center animate-in slide-in-from-right-8 fade-in duration-1000 delay-150 mt-12 lg:mt-0">
            
            {/* The Job Search Card (Bottom Left) */}
            <div className="absolute left-0 md:left-10 bottom-10 z-20 w-[280px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white dark:border-slate-800">
               <div className="flex justify-between items-center mb-4">
                 <div>
                   <p className="text-xs text-slate-400 font-semibold mb-1">Find Job</p>
                   <p className="font-bold text-slate-800 dark:text-white text-sm">UI Designer <span className="text-slate-400 ml-1">▼</span></p>
                 </div>
               </div>

               <div className="space-y-4">
                 {/* Job 1 */}
                 <div className="flex gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-sm shrink-0">M</div>
                   <div>
                     <p className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight">UI Designer</p>
                     <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Minerva Company</p>
                     <p className="text-[10px] text-slate-400 dark:text-slate-500">Min. 1+ Years Exp. • Based in Jakarta</p>
                   </div>
                 </div>
                 {/* Job 2 */}
                 <div className="flex gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-sm shrink-0">H</div>
                   <div>
                     <p className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight">UI/UX Designer</p>
                     <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Halidae Inc.</p>
                     <p className="text-[10px] text-slate-400 dark:text-slate-500">Min. 2+ Years Exp. • Based in Manila</p>
                   </div>
                 </div>
               </div>
               
  
            </div>

            {/* The Profile Card (Top Right) */}
            <div className="absolute right-4 md:right-16 top-0 md:top-12 z-30 w-[220px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-white dark:border-slate-800 flex flex-col items-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden border-4 border-white dark:border-slate-800 shadow-sm mb-3">
                  <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 right-0 w-6 h-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                  <User size={12} />
                </div>
              </div>
              <h3 className="font-bold text-slate-800 dark:text-white text-lg">Michael Darwin</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-4 text-center">UI Designer • 2+ Years Exp.</p>
              <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold px-6 py-2 rounded-full w-full hover:bg-slate-800 transition-colors">
                Hire
              </button>
            </div>

            {/* Central decorative person image / illustration placeholder */}
            <div className="absolute right-32 bottom-20 z-10 w-[220px]">
               <img src="/hero.jpeg" className="w-full h-auto rounded-[3rem] shadow-2xl object-cover aspect-[3/4]" alt="Professional" />
            </div>

            {/* Decorative scribbles/lines */}
            <div className="absolute right-0 bottom-10 z-0">
               <svg width="100" height="100" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M70 20C70 20 50 30 55 60" stroke="currentColor" className="text-slate-800 dark:text-slate-300" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M50 10C50 10 35 25 45 55" stroke="currentColor" className="text-slate-800 dark:text-slate-300" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M30 5C30 5 20 20 35 50" stroke="currentColor" className="text-slate-800 dark:text-slate-300" strokeWidth="4" strokeLinecap="round"/>
               </svg>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
