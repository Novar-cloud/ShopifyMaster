import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PortfolioItemProps {
  image: string;
  title: string;
  description: string;
  tags: {
    text: string;
    bgColor: string;
    textColor: string;
  }[];
}

const portfolioItems: PortfolioItemProps[] = [
  {
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Modern Fashion Boutique",
    description: "A custom Shopify store for a fashion brand with advanced filtering, lookbooks, and seamless checkout.",
    tags: [
      { text: "Theme Customization", bgColor: "bg-[#008060]/10", textColor: "text-[#008060]" },
      { text: "Custom Checkout", bgColor: "bg-[#4A154B]/10", textColor: "text-[#4A154B]" },
      { text: "Speed Optimization", bgColor: "bg-[#FFC96B]/10", textColor: "text-[#FFC96B]" }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Organic Skincare Products",
    description: "Figma-to-Shopify project featuring product ingredient highlighting, subscriptions, and SEO optimization.",
    tags: [
      { text: "Figma to Shopify", bgColor: "bg-[#008060]/10", textColor: "text-[#008060]" },
      { text: "Subscription Model", bgColor: "bg-[#4A154B]/10", textColor: "text-[#4A154B]" },
      { text: "SEO Optimization", bgColor: "bg-[#FFC96B]/10", textColor: "text-[#FFC96B]" }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Home Decor & Furniture",
    description: "High-performance Shopify store with 3D product visualization, advanced filtering, and AR capabilities.",
    tags: [
      { text: "3D Visualization", bgColor: "bg-[#008060]/10", textColor: "text-[#008060]" },
      { text: "Custom Filters", bgColor: "bg-[#4A154B]/10", textColor: "text-[#4A154B]" },
      { text: "Performance Tuning", bgColor: "bg-[#FFC96B]/10", textColor: "text-[#FFC96B]" }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Activewear & Sports",
    description: "Conversion-optimized Shopify store featuring size guides, product comparison, and cross-selling features.",
    tags: [
      { text: "Conversion Optimization", bgColor: "bg-[#008060]/10", textColor: "text-[#008060]" },
      { text: "Cross-selling Features", bgColor: "bg-[#4A154B]/10", textColor: "text-[#4A154B]" },
      { text: "Size Guide Integration", bgColor: "bg-[#FFC96B]/10", textColor: "text-[#FFC96B]" }
    ]
  }
];

const PortfolioItem = ({ item, index }: { item: PortfolioItemProps, index: number }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#4A154B]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button variant="outline" className="bg-white text-[#4A154B] font-medium rounded hover:bg-gray-50 transition-colors">
            View Details
          </Button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <span key={i} className={`px-3 py-1 ${tag.bgColor} ${tag.textColor} text-xs rounded-full`}>
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Showcase</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent Shopify projects, delivering custom solutions for diverse e-commerce businesses.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} item={item} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button 
            className="px-6 py-3 bg-[#4A154B] text-white font-medium rounded-md hover:bg-[#4A154B]/90 transition-colors inline-flex items-center"
            asChild
          >
            <a href="#contact">
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
