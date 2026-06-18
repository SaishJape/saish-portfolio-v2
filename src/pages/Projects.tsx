import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Projects from "@/components/Projects";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <MainLayout>
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold font-display mb-8 relative inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
            <span className="absolute -bottom-1.5 left-0 h-1 bg-gradient-to-r from-primary to-purple-400 rounded-full w-1/2"></span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            An in-depth look at production-ready projects I have engineered, ranging from real-time calling systems and surviellance systems to complex conversational agent pipelines.
          </motion.p>
          
          <Projects />
        </div>
      </section>
    </MainLayout>
  );
};

export default ProjectsPage;
