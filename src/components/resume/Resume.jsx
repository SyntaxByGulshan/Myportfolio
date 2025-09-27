import { useState, useEffect } from 'react';

export default function Resume() {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        // Try fetching the PDF to check availability
        fetch('/Gulshan02.pdf')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                setIsLoading(false);
            })
            .catch(error => {
                console.error('PDF load error:', error);
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
                <p className="text-red-400 text-lg">Failed to load resume. Please try again later.</p>
            ) : (
                <div className="w-full max-w-4xl h-[80vh] shadow-lg rounded overflow-hidden border border-blue-200 m-24">
                    <embed 
                        src="/Gulshan02.pdf" 
                        type="application/pdf" 
                        className="w-full h-full"
                    />
                </div>
            )}
        </div>
    );
}
