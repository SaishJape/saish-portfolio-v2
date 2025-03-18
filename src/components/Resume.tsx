
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, GraduationCap, Briefcase, Award, Languages } from "lucide-react";

const Resume: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(resumeRef, { once: true, margin: "-100px 0px" });
  
  return (
    <section className="py-16" id="resume">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.5 }}
      >
        Resume
      </motion.h2>
      
      <div className="flex justify-end mb-8">
        <a 
          href="/resume.pdf" 
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors duration-300"
          download
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>
      
      <div ref={resumeRef} className="glass-card p-8 rounded-lg">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-primary" size={24} />
            <h3 className="text-xl font-bold">Education</h3>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-2 border-primary/30 pl-5 py-1 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
              <h4 className="font-bold text-lg">Bachelor of Computer Applications (BCA)</h4>
              <p className="text-primary">Mysore University, Mysore</p>
              <p className="text-sm text-muted-foreground">2018 - 2021</p>
              <p className="mt-2">Focused on computer science fundamentals, programming languages, and web technologies.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-primary" size={24} />
            <h3 className="text-xl font-bold">Experience</h3>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-2 border-primary/30 pl-5 py-1 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
              <h4 className="font-bold text-lg">Web Developer</h4>
              <p className="text-primary">Freelance</p>
              <p className="text-sm text-muted-foreground">2021 - Present</p>
              <p className="mt-2">Developed and maintained websites for clients using modern technologies like React, Node.js, and various databases.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-primary" size={24} />
            <h3 className="text-xl font-bold">Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="glass-card p-4 rounded-lg bg-secondary/50">
              <h4 className="font-medium mb-2">Frontend</h4>
              <p className="text-sm text-muted-foreground">HTML, CSS, Bootstrap, React.js</p>
            </div>
            <div className="glass-card p-4 rounded-lg bg-secondary/50">
              <h4 className="font-medium mb-2">Backend</h4>
              <p className="text-sm text-muted-foreground">Node.js, Express.js, RESTful APIs</p>
            </div>
            <div className="glass-card p-4 rounded-lg bg-secondary/50">
              <h4 className="font-medium mb-2">Database</h4>
              <p className="text-sm text-muted-foreground">MySQL, SQL, MongoDB</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Languages className="text-primary" size={24} />
            <h3 className="text-xl font-bold">Languages</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-lg bg-secondary/50">
              <h4 className="font-medium mb-1">English</h4>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className={`w-8 h-1 rounded-full ${i < 4 ? 'bg-primary' : 'bg-primary/20'}`} />
                ))}
              </div>
            </div>
            <div className="glass-card p-4 rounded-lg bg-secondary/50">
              <h4 className="font-medium mb-1">Hindi</h4>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className={`w-8 h-1 rounded-full ${i < 5 ? 'bg-primary' : 'bg-primary/20'}`} />
                ))}
              </div>
            </div>
            <div className="glass-card p-4 rounded-lg bg-secondary/50">
              <h4 className="font-medium mb-1">Marathi</h4>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className={`w-8 h-1 rounded-full ${i < 5 ? 'bg-primary' : 'bg-primary/20'}`} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
