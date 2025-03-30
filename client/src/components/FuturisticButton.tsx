import { Link } from "wouter";

export default function FuturisticButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link href="/portfolio">
        <a className="flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-all duration-300 transform hover:-translate-y-1">
          <span className="mr-2">View Futuristic Design</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </Link>
    </div>
  );
}