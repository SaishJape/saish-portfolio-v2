
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, Server, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe size={24} />,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 85 },
    ]
  },
  {
    title: "Backend Development",
    icon: <Server size={24} />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "RESTful APIs", level: 85 },
    ]
  },
  {
    title: "Database",
    icon: <Database size={24} />,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "SQL", level: 88 },
      { name: "MongoDB", level: 80 },
    ]
  },
  {
    title: "Other",
    icon: <Code size={24} />,
    skills: [
      { name: "Git/GitHub", level: 82 },
      { name: "Problem Solving", level: 88 },
      { name: "System Design", level: 75 },
    ]
  }
];

const SkillCategory: React.FC<{
  category: typeof skillCategories[0];
  index: number;
}> = ({ category, index }) => {
  const categoryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(categoryRef, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div 
      ref={categoryRef}
      className="glass-card p-6 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-primary/10 p-2.5 rounded-full text-primary">
          {category.icon}
        </div>
        <h3 className="font-bold text-lg">{category.title}</h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <motion.div 
            key={skillIndex}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + (skillIndex * 0.1) }}
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div 
                className="skill-progress"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: 0.4 + (skillIndex * 0.1) }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="py-16" id="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>
      
      <p className="text-muted-foreground mb-8 max-w-2xl">
        I've developed expertise in various technologies focused on web development. Here's a breakdown of my technical proficiency:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} category={category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
