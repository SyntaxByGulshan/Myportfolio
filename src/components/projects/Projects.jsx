import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/SyntaxByGulshan/repos"
      );
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setRepos(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-950 to-black p-6 md:p-12">
      <div className="flex flex-col items-center justify-center gap-6 mt-20 md:mt-24">
        <h1 className="text-4xl  font-bold text-blue-200">
          My Projects
        </h1>

        {loading ? (
          <motion.p
            className="text-blue-200 text-lg"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading...
          </motion.p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
            {repos.map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between rounded-3xl p-5 shadow-lg 
                           bg-gradient-to-br from-blue-700 to-blue-500 text-blue-100
                           transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{repo.name}</h2>
                <p className="text-gray-200 text-sm line-clamp-3">
                  {repo.description || "No description provided."}
                </p>
                <p className="text-gray-300 text-xs mt-3 font-mono">
                  Language: {repo.language || "N/A"}
                </p>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
