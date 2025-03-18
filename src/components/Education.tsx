
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mysore University",
    location: "Mysore, India",
    period: "2018 - 2021",
    description: "Completed my BCA degree with a focus on computer science fundamentals, programming, and web development."
  },
  {
    degree: "Web Development Certification",
    institution: "Online Learning Platform",
    location: "Remote",
    period: "2021 - 2022",
    description: "Advanced training in modern web technologies including React, Node.js, and database management systems."
  }
];

const EducationItem: React.FC<(typeof educationData)[0] & { index: number }> = ({ 
  degree, 
  institution, 
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
            <GraduationCap className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">{degree}</h3>
            <p className="text-primary font-medium">{institution}</p>
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

const Education: React.FC = () => {
  return (
    <section className="py-16" id="education">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      
      <div className="mt-12">
        {educationData.map((item, index) => (
          <EducationItem key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;
