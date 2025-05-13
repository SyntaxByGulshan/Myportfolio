import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState({});

  
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/SyntaxByGulshan/repos'
        );
        const data = await response.json();
        setRepos(data);
        console.log(data);
        console.log(typeof(data));
      } catch (error) {
        console.error("Error fetching repositories:", error);
      } finally {
        setLoading(false);
      }
    };

   useEffect(() => {
    fetchRepos();
  }
  , []);
  return (
    <>
      <div className="min-h-screen bg-blue-950 border border-blue-950">
        <div className="flex flex-col items-center justify-center gap-4   mt-20 md:mt-24">
          <h1 className="text-4xl font-bold text-white">My Projects</h1>
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <ol className=" text-white flex flex-col  gap-2 ">
              {repos.map((repo) => (
                <li key={repo.id} className="mb-2">
                  <motion.div className=" p-2 rounded-lg shadow-md "
                  initial={{ opacity: 0 ,y: 40 }}
                  animate={{ opacity: 1,y: 0 }}
                  transition={{ duration: 0.5,delay: 0.5}}
                  >
                    <div>
                      <a
                    href={repo.html_url}
                    className="text-blue-300 hover:underline"
                  >
                    Name : {repo.name}
                    {/* {repo.description } */}
                  </a>
                    </div>
                    <div>
                      <p className="text-gray-400">Discraption: {repo.description}</p>
                      <p className="text-gray-400">Language: {repo.language}</p>
                    </div>
                  
                  </motion.div>
                </li>
              ))}
            </ol>
          )}
        </div>

      </div>
    </>
  );
};

export default Projects;
