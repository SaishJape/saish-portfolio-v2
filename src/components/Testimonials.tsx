
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    quote: "Saish delivered exceptional work on our web application. His technical skills and attention to detail are impressive. Would highly recommend!",
    rating: 5
  },
  {
    name: "Jane Smith",
    position: "Founder, StartupX",
    quote: "Working with Saish was a pleasure. He understood our requirements perfectly and delivered a high-quality solution on time. His communication skills are excellent.",
    rating: 5
  },
  {
    name: "Robert Johnson",
    position: "CTO, DataFlow",
    quote: "Saish's expertise in full stack development helped us build a robust and scalable application. His problem-solving skills and technical knowledge are outstanding.",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16" id="testimonials">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.5 }}
      >
        Client Testimonials
      </motion.h2>
      
      <motion.p 
        className="text-muted-foreground mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Here's what my clients have to say about working with me
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            className="glass-card p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px 0px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-primary bg-primary/10 p-2 rounded-full">
                <Quote size={24} />
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
            
            <div>
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
