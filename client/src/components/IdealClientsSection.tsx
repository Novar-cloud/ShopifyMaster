import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Compass } from "lucide-react";

interface ClientCardProps {
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  title: string;
  description: string;
}

const clientCards: ClientCardProps[] = [
  {
    icon: <Briefcase className="w-7 h-7 text-[#4A154B]" />,
    bgColor: "bg-[#4A154B]/10",
    textColor: "text-[#4A154B]",
    title: "Premium Brands",
    description: "Businesses seeking high-end Shopify development with custom designs that reflect premium brand positioning and exceptional user experience."
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-[#008060]" />,
    bgColor: "bg-[#008060]/10",
    textColor: "text-[#008060]",
    title: "Growing E-commerce Businesses",
    description: "Scaling businesses that need SEO-optimized, high-performance stores designed for conversion and ready to handle increased traffic and sales."
  },
  {
    icon: <Compass className="w-7 h-7 text-[#FFC96B]" />,
    bgColor: "bg-[#FFC96B]/10",
    textColor: "text-[#FFC96B]",
    title: "Entrepreneurs & Startups",
    description: "New businesses seeking expert guidance in launching their Shopify store with a solid foundation for future growth and scalability."
  }
];

const ClientCard = ({ card, index }: { card: ClientCardProps, index: number }) => (
  <motion.div 
    className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className={`w-14 h-14 ${card.bgColor} rounded-full flex items-center justify-center mb-6`}>
      {card.icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
    <p className="text-gray-600">
      {card.description}
    </p>
  </motion.div>
);

export default function IdealClientsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#4A154B]/5 to-[#008060]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ideal Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My specialized Shopify development services are perfect for these types of businesses:
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientCards.map((card, index) => (
            <ClientCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
