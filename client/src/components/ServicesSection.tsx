import { motion } from "framer-motion";
import { 
  Layout, 
  Code, 
  Figma, 
  Search, 
  Zap, 
  PieChart 
} from "lucide-react";

interface ServiceProps {
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
  bulletColor: string;
  bullets: string[];
}

const servicesList: ServiceProps[] = [
  {
    icon: <Layout className="w-6 h-6 text-[#008060]" />,
    iconBgColor: "bg-[#008060]/10",
    iconColor: "text-[#008060]",
    title: "Custom Shopify Development",
    description: "Complete store setup, customization, and optimization focused on brand identity and conversions.",
    bulletColor: "text-[#008060]",
    bullets: [
      "Store setup & configuration",
      "Custom theme development",
      "Payment gateway integration"
    ]
  },
  {
    icon: <Code className="w-6 h-6 text-[#4A154B]" />,
    iconBgColor: "bg-[#4A154B]/10",
    iconColor: "text-[#4A154B]",
    title: "Theme Customization",
    description: "Tailoring Shopify themes to perfectly match your brand identity while maintaining optimal performance.",
    bulletColor: "text-[#4A154B]",
    bullets: [
      "Liquid, HTML, CSS & JavaScript",
      "Custom sections & blocks",
      "Speed optimization"
    ]
  },
  {
    icon: <Figma className="w-6 h-6 text-[#FFC96B]" />,
    iconBgColor: "bg-[#FFC96B]/10",
    iconColor: "text-[#FFC96B]",
    title: "Figma to Shopify",
    description: "Transforming your Figma designs into pixel-perfect Shopify stores that maintain your design vision.",
    bulletColor: "text-[#FFC96B]",
    bullets: [
      "Pixel-perfect implementation",
      "Responsive adaptations",
      "Animation & interaction"
    ]
  },
  {
    icon: <Search className="w-6 h-6 text-green-600" />,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
    title: "SEO Optimization",
    description: "Implementing best SEO practices to improve visibility and organic traffic to your Shopify store.",
    bulletColor: "text-green-600",
    bullets: [
      "Schema markup implementation",
      "Metadata optimization",
      "Content structure enhancement"
    ]
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Performance Enhancement",
    description: "Optimizing your store for speed, responsiveness, and overall performance to boost conversions.",
    bulletColor: "text-blue-600",
    bullets: [
      "Speed optimization",
      "Core Web Vitals improvement",
      "Image optimization"
    ]
  },
  {
    icon: <PieChart className="w-6 h-6 text-purple-600" />,
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Analytics & Tracking",
    description: "Setting up comprehensive analytics to track user behavior and optimize for conversions.",
    bulletColor: "text-purple-600",
    bullets: [
      "Google Analytics implementation",
      "Conversion tracking",
      "Reporting & insights"
    ]
  }
];

const Service = ({ service, index }: { service: ServiceProps, index: number }) => {
  return (
    <motion.div 
      className="bg-light p-8 rounded-lg transition-all hover:shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className={`w-12 h-12 ${service.iconBgColor} rounded-lg flex items-center justify-center mb-6`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start">
            <span className={`${service.bulletColor} mr-2`}>•</span>
            <span className="text-sm text-gray-600">{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shopify Development Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to create, customize, and optimize your Shopify store for maximum performance and conversions.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Service key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
