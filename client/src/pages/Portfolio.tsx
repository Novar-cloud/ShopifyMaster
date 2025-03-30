import { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    // Redirect to the preview.html file in the root directory
    window.location.href = '/preview.html';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-white text-xl">Loading futuristic portfolio design...</div>
    </div>
  );
}