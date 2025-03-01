"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

export default function Sorry() {
    const router = useRouter();
  return (
    <div>
    <div className="relative min-h-screen flex flex-col items-center text-white text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <nav className="w-full flex justify-between p-6 max-w-6xl z-10">
        <h1 className="text-2xl font-bold">Farmvest</h1>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Why Farmvest?</a>
          <a href="#" className="hover:underline">Investment</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Company</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mt-20 max-w-4xl z-10">
        <h2 className="text-5xl font-bold">Investing in Farmvest.</h2>
        <p className="mt-4 text-lg">Diversify with an asset with an average 15.0% annual return.</p>

        {/* Email Input Form */}
        <div className="mt-6 flex items-center bg-white p-2 rounded-lg shadow-lg max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 text-black outline-none"
          />
        <button
        onClick={() => router.push("/s")}
        className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Get Started →
      </button>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}
