import React from "react";

export default function MyJourney() {
  return (
    <section
      id="my_jurney"
      className="w-full min-h-screen px-6 pt-24 pb-18 flex justify-center bg-gray-900 text-white"
    >
      <div className="md:px-14">
        <h2 className="text-3xl font-bold mb-12">My Journey</h2>

        <div className="relative border-l border-gray-600 ml-4">
          {/* Matriculation */}
          <div className="mb-10 ml-6">
            <span className="absolute -left-2 flex items-center justify-center w-4 h-4 bg-gray-400 rounded-full shadow-lg shadow-gray-200"></span>
            <h3 className="text-xl font-semibold">Matriculation (2019)</h3>
            <p className="text-gray-300">
              Vidya Jyoti School, Bhatu Bigha, Nalanda
            </p>
            <p className="text-sm text-gray-400">
              Subjects: Science, Math, English, Social Science
            </p>
          </div>

          {/* Intermediate */}
          <div className="mb-10 ml-6">
            <span className="absolute -left-2 flex items-center justify-center w-4 h-4 bg-gray-400 rounded-full shadow-lg shadow-gray-200"></span>
            <h3 className="text-xl font-semibold">Intermediate (2019-2021)</h3>
            <p className="text-gray-300">Snatak College, Islampur, Nalanda</p>
            <p className="text-sm text-gray-400">
              Subjects: Physics, Chemistry, Math, English
            </p>
          </div>

          {/* Graduation */}
          <div className="mb-10 ml-6">
            <span className="absolute -left-2 flex items-center justify-center w-4 h-4 bg-teal-400 rounded-full shadow-lg shadow-teal-200"></span>
            <h3 className="text-xl font-semibold">Graduation (2022-2026)</h3>
            <p className="text-gray-300">
              Haldia Institute of Technology, Haldia, West Bengal
            </p>
            <p className="text-sm text-gray-400">
              Skills: Programming, Web Development, Data Structures
            </p>
          </div>

          {/* Internship */}
          <div className="ml-6">
            <span className="absolute -left-2 flex items-center justify-center w-4 h-4 bg-teal-400 rounded-full shadow-lg shadow-teal-200"></span>
            <h3 className="text-xl font-semibold">Internship (2025-Present)</h3>
            <p className="text-gray-300">Capsitech, Jodhpur, Rajasthan</p>
            <p className="text-sm text-gray-400">
              Skills: React, Tailwind, APIs, Node
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
