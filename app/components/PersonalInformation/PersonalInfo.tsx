"use client";

import { setPersonalInfo } from "@/app/redux/slices/personalSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface PersonalInfoProps {
  onNext: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onNext }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    firstName: "Asif",
    lastName: "Hosen",
    phone: "+01729149634",
    email: "ahamedasif01729gmail.com",
    address: "Section-06, Mirpur, Dhaka.",
    city: "Dhaka",
    state: "Dhaka",
    zip: "1216",
    country: "Bangladesh",
  });

  // HANDLE CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // HANDLE NEXT
  const handleNext = () => {
    dispatch(
      setPersonalInfo({
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        email: form.email,
        address: form.address,
        city: form.city,
        state: form.state,
        zip: form.zip,
        country: form.country,
      })
    );

    onNext();
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold">Tell Us About Yourself</h1>
      <p className="text-gray-500 mt-4">
        Fill in your personal details so we can tailor your resume perfectly to
        your career goals.
      </p>

      {/* FORM */}
      <div className="mt-10 space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600">First Name</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Last Name</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 mt-1"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email Address</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="w-full border rounded-lg px-4 py-3 mt-1"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600">Country/Region</label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 mt-1"
            >
              <option>Bangladesh</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Address</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 mt-1"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="text-sm text-gray-600">City</label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">State</label>
            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">ZIP Code</label>
            <input
              name="zip"
              value={form.zip}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 mt-1"
            />
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-between mt-12">
        <button className="bg-gray-300 w-48 py-3 rounded-lg">← Back</button>

        <button
          onClick={handleNext}
          className="bg-green-600 text-white w-48 py-3 rounded-lg"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
