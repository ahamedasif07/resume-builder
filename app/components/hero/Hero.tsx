"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full mt-24 py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 px-6">
        {/* LEFT IMAGE */}
        <div className="flex  justify-center items-center">
          <div className="relative w-[430px] h-[370px]">
            <Image
              src="/images/Frame 2147225043 (1).png"
              width={430}
              height={430}
              alt="Resume Preview"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="flex-1 p-3 space-y-6 ">
          <h1 className="text-5xl font-extrabold leading-tight">
            Create Your <span className="primary">AI-Powered Resume</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Let our AI technology help you build a professional resume tailored
            to your skills, experience, and career goals.
          </p>

          <p className="text-gray-500">
            Follow these simple steps to create a standout resume that will get
            you noticed by top employers.
          </p>

          <Link href="/builder">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition-all">
              Start Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
