"use client";
import React from "react";

import Link from "next/link";

interface PersonalInfoProps {
  onNext: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onNext }) => {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-6">
      {/* PROGRESS BAR */}

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold ">Tell Us About Yourself</h1>
      <p className="text-gray-500  mt-4">
        Fill in your personal details so we can tailor your resume perfectly to
        your career goals.
      </p>

      {/* FORM */}
      <div className="mt-10 space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm  text-gray-600">First Name</label>
            <input
              className="w-full border rounded-lg px-4 py-3 mt-1"
              placeholder="Enter first name"
              defaultValue="Asif"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Last Name</label>
            <input
              className="w-full border rounded-lg px-4 py-3 mt-1"
              placeholder="Enter last name"
              defaultValue="Hosen"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              className="w-full border rounded-lg px-4 py-3 mt-1"
              placeholder="+880"
              defaultValue="+01729149634"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email Address</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3 mt-1"
              placeholder="example@gmail.com"
              defaultValue="ahamedasif01729gmail.com"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600">Country/Region</label>
            <select className="w-full border rounded-lg px-4 py-3 mt-1">
              <option>Bangladesh</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Address</label>
            <input
              className="w-full border rounded-lg px-4 py-3 mt-1"
              defaultValue="Section-06, Mirpur, Dhaka."
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="text-sm text-gray-600">City</label>
            <input
              className="w-full border rounded-lg px-4 py-3 mt-1"
              defaultValue="Dhaka"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">State</label>
            <input
              className="w-full border rounded-lg px-4 py-3 mt-1"
              defaultValue="Dhaka"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">ZIP Code</label>
            <input
              className="w-full border rounded-lg px-4 py-3 mt-1"
              defaultValue="1216"
            />
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-between mt-12">
        <Link href="/">
          <button className="bg-gray-300 w-48 py-3 rounded-lg">← Back</button>
        </Link>

        <button
          onClick={onNext}
          className="bg-[var(--primary)] text-white w-48 py-3 rounded-lg"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
