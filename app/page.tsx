"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 font-sora">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute inset-0 border border-white/40 rounded-full group-hover:border-white transition-colors"></div>
              <div className="w-3 h-3 grid grid-cols-2 gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white/60 w-1 h-1 rounded-full group-hover:bg-white transition-colors"></div>
                ))}
              </div>
            </div>
            <span className="text-[15px] font-normal tracking-tight">Nudgebot</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {["Solutions", "Use Case", "Security", "Data Center"].map((link) => (
              <Link
                key={link}
                href={`/#${link.toLowerCase().replace(" ", "-")}`}
                className="text-[13px] text-zinc-400 hover:text-white transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-[13px] text-zinc-400 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/demo"
            className="bg-white text-black px-4 py-1.5 rounded text-[13px] font-normal hover:bg-zinc-200 transition-colors font-sora"
          >
            Book a demo
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 pt-24 pb-12 md:pt-32 md:pb-20 md:px-12 lg:pl-24 lg:pr-8">
          <div className="max-w-[90%] md:max-w-2xl lg:max-w-3xl space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-white font-sora">
              Unleash, outrun, and dominate your market
              <span className="block text-zinc-500 font-medium">with AI that never stops.</span>
            </h1>

            <div className="space-y-4 max-w-md">
              <p className="text-[15px] leading-relaxed text-zinc-400">
                Your competitors are standing still. Your AI agent isn&apos;t.
                Every lead chased. Every conversation owned. Every deal
                closed — at a pace no human team can match.
              </p>
              <p className="text-[15px] font-normal text-white">
                This is revenue, untamed.
              </p>
            </div>

            <button className="bg-white text-black px-6 py-2 rounded font-normal text-[14px] hover:bg-zinc-200 transition-all active:scale-95 font-sora">
              Run with us
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:h-auto overflow-hidden md:-ml-px">
          <Image
            src="/image.png"
            alt="AI in action"
            fill
            className="object-cover animate-zoom"
            priority
          />
          {/* Explicit Shadow Overlay to hide junction */}
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black via-black/30 to-transparent z-10"></div>
          {/* Main Overlay */}
          <div className="absolute inset-0 z-0 hero-overlay"></div>
        </div>
      </main>
    </div>
  );
}

