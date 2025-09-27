import { useState, useEffect } from "react";

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("/Gulshan02.pdf")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("PDF load error:", error);
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="bg-blue-950 min-h-screen flex justify-center items-center text-blue-100 p-4">
      {isLoading ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-300 border-solid mx-auto mb-4"></div>
          <p className="text-lg">Loading resume...</p>
        </div>
      ) : hasError ? (
        <p className="text-red-400 text-lg">
          Failed to load resume. Please try again later.
        </p>
      ) : (
        <>
          {/* For small screens → Button */}
          <div className="block md:hidden text-center">
            <button
              onClick={() => window.open("/Gulshan02.pdf", "_blank")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium shadow-lg transition duration-300"
            >
              Open Resume (Full Screen)
            </button>
          </div>

          {/* For medium and larger screens → Embed */}
          <div className="hidden md:block w-full max-w-4xl h-[80vh] shadow-lg rounded overflow-hidden border border-blue-200">
            <embed
              src="/Gulshan02.pdf"
              type="application/pdf"
              className="w-full h-full"
            />
          </div>
        </>
      )}
    </div>
  );
}
