import { motion } from "framer-motion";
import { HoverStar } from "@/components/ui/hover-star";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  avatar: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Nehal transformed our Shopify store from basic to exceptional. The custom features and SEO optimization resulted in a 45% increase in conversions within the first month.",
    name: "Sarah Johnson",
    position: "Fashion Boutique Owner",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    quote: "Working with Nehal on our Figma to Shopify project was a seamless experience. The attention to detail and technical expertise exceeded our expectations.",
    name: "Michael Chen",
    position: "Skincare Brand Founder",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Nehal's speed optimization made a dramatic difference in our store's performance. Page load times decreased by 65%, and our conversion rate improved significantly.",
    name: "Emily Rodriguez",
    position: "Home Decor E-commerce Manager",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: TestimonialProps, index: number }) => (
  <motion.div 
    className="bg-light p-8 rounded-lg border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="flex items-center text-[#FFC96B] mb-4">
      <HoverStar />
      <HoverStar />
      <HoverStar />
      <HoverStar />
      <HoverStar />
    </div>
    <p className="text-gray-600 mb-6 italic">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-bold">{testimonial.name}</h4>
        <p className="text-gray-500 text-sm">{testimonial.position}</p>
      </div>
    </div>
  </motion.div>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What my clients say about working with me on their Shopify projects.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
