import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
}
