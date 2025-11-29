"use client";
import React, { useState } from "react";

interface WorkExperienceProps {
  onNext: () => void;
  onBack: () => void;
}

const WorkExperienceForm: React.FC<WorkExperienceProps> = ({
  onNext,
  onBack,
}) => {
  const [skills, setSkills] = useState<string[]>([
    "UI Designer",
    "UX Designer",
    "Figma",
  ]);
  const [skillInput, setSkillInput] = useState("");

  const [fileName, setFileName] = useState<string | null>(null);

  // Add Skill on Enter
  const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      e.preventDefault();
      setSkills((prev) => [...prev, skillInput.trim()]);
      setSkillInput("");
    }
  };

  // Remove Skill
  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // File Upload Handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="min-h-screen  flex justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-white p-8 rounded-2xl ">
        <h1 className="text-3xl font-bold mb-2">
          Your Work Experience & Skills
        </h1>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Highlight your work experience and skills. The more detail you
          provide, the better the AI can tailor your resume.
        </p>

        {/* Job Title */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Job Title</label>
          <input
            type="text"
            placeholder="Mid-Level UI/UX Designer"
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring"
          />
        </div>

        {/* Company Name */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Company Name</label>
          <input
            type="text"
            placeholder="SM Technology (Betopia Group)"
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring"
          />
        </div>

        {/* Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 font-medium">Start Date</label>
            <input
              type="date"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">End Date</label>
            <input
              type="date"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Job Description</label>
          <textarea
            rows={5}
            placeholder="Describe your responsibilities and achievements..."
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring"
          ></textarea>
        </div>

        {/* Achievements & Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Achievements */}
          <div className="border rounded-xl p-6 text-center">
            <p className="font-medium mb-4">Achievements</p>

            <div className="border-2 border-dashed rounded-xl p-6 w-full">
              {fileName ? (
                <p className="text-gray-600 font-medium mb-3">{fileName}</p>
              ) : (
                <p className="text-gray-500 mb-3">Drop file or browse</p>
              )}

              <p className="text-sm text-gray-400">.jpeg, .png | Max 25 MB</p>

              <label className="mt-3 px-4 py-2 rounded-lg bg-gray-100 cursor-pointer">
                Browse Files
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block mb-2 font-medium">Skills</label>

            <div className="flex flex-wrap gap-2 border rounded-xl px-4 py-3 min-h-[60px]">
              {/* Existing Skills */}
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-lg flex items-center gap-2 text-sm"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(index)}
                    className="text-red-500 font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}

              {/* Skill Input */}
              <input
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={handleSkillKeyDown}
                placeholder="Add skill & press Enter"
                className="flex-1 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <button className="text-green-600 mt-6 font-medium">
          + Add Another Work Experience
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
    </div>
  );
};

export default WorkExperienceForm;
