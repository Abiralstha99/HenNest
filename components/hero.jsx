"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-20 pb-32 sm:pt-32 sm:pb-40">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
          {/* Content side */}
          <div className="flex flex-col items-start text-left max-w-2xl mx-auto md:max-w-none">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 animate-fade-in-up">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-2 stroke-primary">
                <path d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Smart Finance Management
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up animation-delay-150">
              Manage Your{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Finances</span>
                <span className="absolute -bottom-1.5 left-0 h-1.5 w-full bg-gradient-to-r from-primary to-purple-600 rounded-full"></span>
              </span>
              {' '}with Intelligence
            </h1>
            <p className="mb-8 text-lg text-muted-foreground animate-fade-in-up animation-delay-300">
              An AI-powered financial management platform that helps you track,
              analyze, and optimize your spending with real-time insights.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-450">
              <Link href="/dashboard">
                <Button size="lg" className="group w-full sm:w-auto px-8 py-6 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              {/* <Link href="https://www.youtube.com/roadsidecoder">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </Link> */}
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 rounded-xl border bg-card/50 backdrop-blur-sm p-6 shadow-lg animate-fade-in-up animation-delay-600">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10k+</p>
                <p className="text-sm text-muted-foreground">Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
          
          {/* Image side */}
          <div className="relative mt-10 md:mt-0 animate-fade-in-up animation-delay-300">
            <div className="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
            
            <div 
              ref={imageRef} 
              className="hero-image relative rounded-2xl border-4 border-background bg-card p-2 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl"
            >
              <div className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-black text-primary-foreground shadow-lg">
                NEW
              </div>
              <Image
                src="/banner.jpeg"
                width={1920}
                height={1080}
                alt="Dashboard Preview"
                className="rounded-xl"
                priority
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;