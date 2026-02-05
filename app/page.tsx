"use client";

import Image from "next/image";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white font-sans selection:bg-[#D9E4C9]">
      {/* LEFT PANEL: Branding & Illustration (Hidden on mobile) */}
      <section className="hidden w-1/2 flex-col bg-[#D9E4C9] p-12 lg:flex">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-black">
            <Search className="h-5 w-5 text-white" strokeWidth={3} />
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900">
            FinPlanner
          </span>
        </div>

        {/* Illustration Area */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Main Circle Background */}
          <div className="relative flex h-[500px] w-[500px] items-center justify-center rounded-full bg-[#F1F4EB]">

            {/* Simple CSS-based Representation of the Chart Graphic */}
            <div className="absolute bottom-1/4 w-3/4 overflow-hidden rounded-t-full border-b-2 border-zinc-800 bg-[#5F6A54] pt-20">
              <div className="flex h-32 items-end justify-around px-8 pb-4">
                <div className="h-16 w-1 rounded-full bg-zinc-900" />
                <div className="h-24 w-1 rounded-full bg-zinc-900" />
                <div className="h-20 w-1 rounded-full bg-zinc-900" />
              </div>
            </div>

            {/* Placeholder for the Character Illustration */}
            {/* If you have the actual SVG/PNG, replace this div with an <Image /> */}
            <div className="absolute bottom-10 left-20 h-48 w-16 rounded-t-full bg-zinc-900" />
          </div>
        </div>
      </section>

      {/* RIGHT PANEL: Login Form */}
      <section className="flex w-full flex-col items-center justify-center px-8 lg:w-1/2 lg:px-24">
        <div className="w-full max-w-[400px]">
          <h1 className="mb-12 text-center text-5xl font-bold tracking-tight text-zinc-900 lg:text-left">
            Log in
          </h1>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="finance@forecast.ui"
                className="w-full rounded-lg border border-zinc-200 px-4 py-3 outline-none transition-all focus:border-[#D9E4C9] focus:ring-4 focus:ring-[#D9E4C9]/20"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700">
                Password
              </label>
              <input
                type="password"
                placeholder="****************"
                className="w-full rounded-lg border border-zinc-200 px-4 py-3 outline-none transition-all focus:border-[#D9E4C9] focus:ring-4 focus:ring-[#D9E4C9]/20"
              />
            </div>

            {/* Action Button */}
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-[#D9E4C9] py-4 text-sm font-bold text-zinc-900 transition-colors hover:bg-[#ccd9b8] active:scale-[0.98]"
            >
              Log In
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}