import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-[#4A154B]/5 to-[#008060]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Turning <span className="text-[#4A154B]">Designs</span> into{" "}
              <span className="text-[#008060]">High-Converting</span> Shopify Stores
            </h1>
            <p className="text-lg text-gray-600">
              With 2+ years of specialized experience, I develop custom Shopify solutions that blend stunning design with optimal performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="px-6 py-3 bg-[#008060] text-white font-medium rounded-md hover:bg-[#008060]/90 transition-colors"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-3 border border-[#008060] text-[#008060] font-medium rounded-md hover:bg-[#008060]/5 transition-colors"
                asChild
              >
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="text-[#008060]">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span>Shopify Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#008060]">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span>Liquid Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#008060]">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span>2+ Years Experience</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFC96B] rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4A154B] rounded-full opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Shopify store mockup on multiple devices" 
              className="w-full rounded-lg shadow-xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
