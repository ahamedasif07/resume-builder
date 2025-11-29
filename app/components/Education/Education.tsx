"use client";

import { useState } from "react";
import { CalendarIcon, UploadCloud } from "lucide-react";

interface WorkExperienceProps {
  onNext: () => void;
  onBack: () => void;
}

export default function EducationPage({ onNext, onBack }: WorkExperienceProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [degrees, setDegrees] = useState([
    {
      degree: "",
      institution: "",
      major: "",
      startDate: "",
      endDate: "",
      achievements: null as File | null,
    },
  ]);

  const addDegree = () => {
    setDegrees([
      ...degrees,
      {
        degree: "",
        institution: "",
        major: "",
        startDate: "",
        endDate: "",
        achievements: null,
      },
    ]);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Educational Background</h1>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-md">
          Certifications
        </button>
      </div>

      <p className="text-gray-600 mb-8">
        Provide your academic qualifications and any relevant certifications to
        strengthen your resume.
      </p>

      {degrees.map((item, index) => (
        <div key={index} className="border-b pb-8 mb-8">
          {/* Degree */}
          <div className="mb-4">
            <label className="font-semibold block mb-2">Your Degree</label>
            <input
              type="text"
              placeholder="e.g., Bachelor's, Master's"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Institution + Major */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-semibold block mb-2">
                Institution Name
              </label>
              <input
                type="text"
                placeholder="Dhaka University"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">Major</label>
              <input
                type="text"
                placeholder="Electronic and Communication Engineering (ECE)"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          {/* Graduation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-semibold block mb-2">
                Graduation (Start Date)
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border rounded-md px-3 py-2 pr-10"
                />
                <CalendarIcon
                  className="absolute right-3 top-3 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Graduation (End Date)
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border rounded-md px-3 py-2 pr-10"
                />
                <CalendarIcon
                  className="absolute right-3 top-3 text-gray-400"
                  size={18}
                />
              </div>
            </div>
          </div>

          {/* Achievements Upload */}
          <div className="mb-4">
            <label className="font-semibold block mb-2">Achievements</label>

            <div
              className="border-2 border-dashed rounded-md p-6 flex flex-col items-center text-center w-full md:w-[520px] "
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                setSelectedFile(file);
              }}
            >
              <UploadCloud size={40} className="text-gray-400 mb-3" />

              {!selectedFile ? (
                <>
                  <p className="text-gray-500 mb-2">Drop file or browse</p>
                  <p className="text-gray-400 text-sm mb-3">
                    Format: .jpeg, .png & Max file size: 25 MB
                  </p>

                  <label className="px-4 py-2 border rounded-md cursor-pointer">
                    Browse Files
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        setSelectedFile(e.target.files?.[0] || null)
                      }
                    />
                  </label>
                </>
              ) : (
                <p className="text-green-600 font-medium">
                  Uploaded: {selectedFile.name}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Add Another Degree */}
      <button
        onClick={addDegree}
        className="text-green-600 font-semibold flex items-center gap-2 mb-8"
      >
        <span className="text-2xl">+</span> Add Another Degree
      </button>

      {/* Navigation */}
      <div className="flex justify-between mt-12">
        <button onClick={onBack} className="bg-gray-300 w-48 py-3 rounded-lg">
          ← Back
        </button>

        <button
          onClick={onNext}
          className="bg-[var(--primary)] text-white w-48 py-3 rounded-lg"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
