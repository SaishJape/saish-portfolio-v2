
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";

const SkillsPage = () => {
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
            My Skills
            <span className="absolute -bottom-1 left-0 h-1 bg-primary rounded-full w-1/2"></span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I've developed expertise in a range of technologies throughout my education and career.
            Here's an overview of my technical skills and competencies.
          </motion.p>
          
          <Skills />
        </div>
      </section>
    </MainLayout>
  );
};

export default SkillsPage;
