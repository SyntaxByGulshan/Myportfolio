import React, { useEffect, useState } from "react";

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
      <div className="h-screen bg-blue-950">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <ol className=" text-white">
              {repos.map((repo) => (
                <li key={repo.id} className="mb-2">
                  <div>
                    <div>
                      <a
                    href={repo.html_url}
                    className="text-blue-300 hover:underline"
                  >
                    name : {repo.name}
                    {/* {repo.description } */}
                  </a>
                    </div>
                    <div>
                      <p className="text-gray-400">{repo.description}</p>
                      <p className="text-gray-400">Language: {repo.language}</p>
                    </div>
                  
                  </div>
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
