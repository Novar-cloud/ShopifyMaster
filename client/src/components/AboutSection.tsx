import { motion } from "framer-motion";
import { Code, Layout, Figma, Search, ExternalLink } from "lucide-react";

interface ExpertiseItemProps {
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  text: string;
}

const expertiseItems: ExpertiseItemProps[] = [
  {
    icon: <Code className="w-5 h-5 text-[#008060]" />,
    bgColor: "bg-[#008060]/10",
    textColor: "text-[#008060]",
    text: "Liquid/JavaScript"
  },
  {
    icon: <Layout className="w-5 h-5 text-[#4A154B]" />,
    bgColor: "bg-[#4A154B]/10",
    textColor: "text-[#4A154B]",
    text: "Theme Development"
  },
  {
    icon: <Figma className="w-5 h-5 text-[#FFC96B]" />,
    bgColor: "bg-[#FFC96B]/10",
    textColor: "text-[#FFC96B]",
    text: "Figma to Shopify"
  },
  {
    icon: <Search className="w-5 h-5 text-green-600" />,
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    text: "SEO Optimization"
  }
];

const ExpertiseItem = ({ item }: { item: ExpertiseItemProps }) => (
  <div className="flex items-center">
    <div className={`w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center mr-3`}>
      {item.icon}
    </div>
    <span className="text-gray-700">{item.text}</span>
  </div>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#008060] rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFC96B] rounded-full opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Nehal - Shopify Developer" 
              className="w-full rounded-lg shadow-xl relative z-10"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-gray-600">
              With over 2 years of experience as a Shopify developer, I specialize in creating custom, high-converting e-commerce solutions that combine stunning design with optimal functionality.
            </p>
            <p className="text-gray-600">
              My approach focuses on understanding your business goals and translating them into technical solutions that drive results. I pride myself on clean code, attention to detail, and delivering projects that exceed expectations.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {expertiseItems.map((item, index) => (
                  <ExpertiseItem key={index} item={item} />
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#" 
                className="text-[#008060] font-medium flex items-center hover:text-[#4A154B] transition-colors"
              >
                <span>View My LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
