import { Link } from "wouter";
import { Mail, Smartphone, Clock, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4A154B] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link href="/">
              <a className="text-2xl font-bold flex items-center mb-4">
                <span className="text-[#FFC96B] text-sm font-medium px-3 py-1.5 bg-[#FFC96B]/20 rounded">Shopify Expert</span>
              </a>
            </Link>
            <p className="text-white/70 mb-6">
              Custom Shopify development solutions focused on performance, conversions, and exceptional user experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-[#FFC96B]" />
                <span className="text-white/70">sellorablogs@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Smartphone className="w-5 h-5 mr-3 mt-0.5 text-[#FFC96B]" />
                <span className="text-white/70">+91 7001875324</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-0.5 text-[#FFC96B]" />
                <span className="text-white/70">Monday-Friday: 9am-5pm IST</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Shopify Expert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
