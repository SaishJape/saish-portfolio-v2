
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import ResumeComponent from "@/components/Resume";
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <MainLayout>
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold font-display mb-10 relative inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Resume
            <span className="absolute -bottom-1 left-0 h-1 bg-primary rounded-full w-1/2"></span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here's a comprehensive view of my educational background, professional experience, and skill set.
            Feel free to download a copy for your reference.
          </motion.p>
          
          <ResumeComponent />
        </div>
      </section>
    </MainLayout>
  );
};

export default ResumePage;
