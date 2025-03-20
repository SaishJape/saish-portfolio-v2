
import React from "react";
import { motion } from "framer-motion";
import { Code, Server, PenTool, Database, Layout, Cloud } from "lucide-react";

const ServicesOffered: React.FC = () => {
  const services = [
    {
      icon: <Layout className="w-10 h-10 text-primary" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React, TypeScript, and modern CSS frameworks."
    },
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: "Backend Development",
      description: "Creating robust and scalable server-side applications with Node.js, Fastify.js, and Express."
    },
    {
      icon: <Database className="w-10 h-10 text-primary" />,
      title: "Database Design",
      description: "Designing efficient and optimized database solutions using MongoDB, MySQL, and SQL."
    },
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Full Stack Development",
      description: "End-to-end application development from frontend interfaces to backend systems and databases."
    },
    {
      icon: <Cloud className="w-10 h-10 text-primary" />,
      title: "Cloud Services",
      description: "Deploying and managing applications on AWS, leveraging cloud services for scalability and reliability."
    },
    {
      icon: <PenTool className="w-10 h-10 text-primary" />,
      title: "UI/UX Consulting",
      description: "Providing insights on user interface design and user experience improvements for web applications."
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16" id="services">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.5 }}
      >
        Services I Offer
      </motion.h2>
      
      <motion.p 
        className="text-muted-foreground mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        I specialize in a wide range of development services to help businesses build powerful web applications
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px 0px" }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="glass-card p-6 rounded-lg relative overflow-hidden hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="mb-4 p-3 bg-primary/10 inline-block rounded-lg">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesOffered;
