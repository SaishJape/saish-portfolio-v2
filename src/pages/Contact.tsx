
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import ContactComponent from "@/components/Contact";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <MainLayout>
      <section className="py-16">
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold font-display mb-10 relative inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Me
            <span className="absolute -bottom-1 left-0 h-1 bg-primary rounded-full w-1/2"></span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm always interested in new opportunities and collaborations.
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </motion.p>
          
          <ContactComponent />
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
