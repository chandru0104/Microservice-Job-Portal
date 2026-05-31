import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ArrowRight, Sparkles, Building2, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Hero / Mission Section */}
      <section className="relative w-full bg-[#f8fafc] dark:bg-background overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-gradient-to-l from-[#e0f2fe] dark:from-blue-950/30 to-transparent opacity-80 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 mb-6 shadow-sm">
                <Sparkles size={16} className="text-blue-600" />
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                  Our Story
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                Our Mission At <br className="hidden md:block"/>
                <span className="text-blue-600">JobPortal</span>
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8">
                At JobPortal, we're dedicated to revolutionizing the job search
                experience. Our mission is to create meaningful connections
                between talented individuals and forward-thinking companies,
                fostering growth and success for both.
              </p>

              <div className="flex gap-6 mt-4">
                <div>
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white">100k+</p>
                  <p className="text-xs font-bold text-slate-500 mt-1 uppercase">Job Seekers</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white">5k+</p>
                  <p className="text-xs font-bold text-slate-500 mt-1 uppercase">Companies</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-200/50 dark:bg-blue-900/20 rounded-[2.5rem] transform translate-x-4 translate-y-4"></div>
              <img
                src="/about.jpg"
                className="relative w-full rounded-[2.5rem] shadow-xl object-cover aspect-video lg:aspect-square"
                alt="Team working at JobPortal"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
              We believe in building a platform that empowers both individuals and organizations through transparency, speed, and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-[#f8fafc] dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Precision Matching</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                We use advanced algorithms to ensure candidates are matched with roles that perfectly align with their skills and career goals.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#f8fafc] dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Community First</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Our platform is built around people. We foster an inclusive community where everyone has an equal opportunity to succeed.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#f8fafc] dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/40 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Seamless Experience</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                We eliminate friction from the hiring process. Lightning-fast applications and rapid responses keep you moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-[#f8fafc] dark:bg-slate-900/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex justify-center items-center gap-2 px-5 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mb-6 shadow-sm">
            <Building2 size={16} className="text-slate-700 dark:text-slate-300" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Join Our Network
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Ready to find your dream job?
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 font-medium">
            Join thousands of successful job seekers on JobPortal and take the next step in your career.
          </p>
          
          <div className="pt-2">
            <Link href="/jobs">
              <Button className="rounded-full px-6 h-12 text-base md:px-10 md:h-14 md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xl hover:shadow-blue-500/25 gap-2">
                <span className="ml-1 md:ml-2">Get Started</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2"/>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
