
import React from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useRef } from "react";

const experienceData = [
  {
    position: "Full Stack Developer Intern",
    company: "The Baap Company",
    location: "Remote",
    period: "Jan 2022 - July 2022",
    description: "Worked on various web development projects using React, Node.js, and MongoDB. Collaborated with a team of developers to build responsive and interactive web applications. Implemented new features and fixed bugs in existing applications."
  },
  {
    position: "Freelance Web Developer",
    company: "Self-employed",
    location: "Remote",
    period: "Aug 2022 - Present",
    description: "Developed and maintained websites for US-based clients. Created full-stack web applications using modern technologies like React, TypeScript, Fastify.js, and AWS. Implemented responsive designs and optimized website performance."
  }
];

const ExperienceItem: React.FC<(typeof experienceData)[0] & { index: number }> = ({ 
  position, 
  company, 
  location, 
  period, 
  description,
  index
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div 
      ref={itemRef}
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Briefcase className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">{position}</h3>
            <p className="text-primary font-medium">{company}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <Calendar size={14} />
              <span>{period}</span>
            </div>
            <p className="mt-3 text-foreground/80">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="py-16" id="experience">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>
      
      <div className="mt-12">
        {experienceData.map((item, index) => (
          <ExperienceItem key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
