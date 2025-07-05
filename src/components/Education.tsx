import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mysore University",
    location: "Mysore, India",
    period: "2021 – Present",
    description:
      "Currently pursuing my BCA degree with a strong foundation in computer science, programming, and web development. Actively exploring AI technologies and applying them in real-world projects alongside my studies."
  },
  {
    degree: "Web Development Certification",
    institution: "The Baap Company",
    location: "Remote",
    period: "2023 – Present",
    description:
      "Completed web development training as part of my internship at The Baap Company. Covered modern frontend and backend stacks including React.js, TypeScript, Fastify.js, and Git-based workflows."
  },
  {
    degree: "Backend Developer Training",
    institution: "The Baap Company (Internship)",
    location: "Remote",
    period: "2023 – Present",
    description:
      "Focused training in building robust backend systems with Node.js, Fastify.js, RESTful APIs, MySQL, and MongoDB. Hands-on experience with authentication, data modeling, and cloud integration on AWS."
  },
  {
    degree: "AI & LLM Tools Bootcamp (Project-Based Learning)",
    institution: "Self-Learning / BAAP Projects / Online Learning Platform",
    location: "Remote",
    period: "2023 – Present",
    description:
      "Gaining hands-on experience working with Gemini API, LangChain, and Qdrant to develop intelligent AI-powered chatbots, semantic search engines, and automation tools through internships and personal projects."
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
