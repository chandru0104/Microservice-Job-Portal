"use client";
import CarrerGuide from "@/components/carrer-guide";
import Hero from "@/components/hero";
import Loading from "@/components/loading";
import ResumeAnalyzer from "@/components/resume-analyser";
import { Button } from "@/components/ui/button";
import { useAppData } from "@/context/AppContext";
import React from "react";

const Home = () => {
  const { loading } = useAppData();
  if (loading) return <Loading />;
  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      <Hero />
      <CarrerGuide />
      <ResumeAnalyzer />
    </div>
  );
};

export default Home;
