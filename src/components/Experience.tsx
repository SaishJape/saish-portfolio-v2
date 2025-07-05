import React from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useRef } from "react";

const experienceData = [
  {
    position: "Full Stack Developer Intern",
    company: "The Baap Company",
    location: "Remote",
    period: "July 2023",
    description:
      "Contributed to real-world production projects focused on modern web development and AI integration. Worked with React, Node.js, and MongoDB to build scalable apps. Gained hands-on experience in deploying LLM-based features like AI chatbots and semantic search using Gemini API, LangChain, and Qdrant."
  },
  {
    position: "Freelance Web Developer",
    company: "The Baap Company and Online",
    location: "Remote",
    period: "July 2023",
    description:
      "Worked on independent web development projects for startups and individuals. Built full-stack applications using React, TypeScript, Fastify.js, and AWS. Recently focused on integrating AI tools into web platforms—such as chatbots, content extraction systems, and intelligent dashboards."
  },
  {
    position: "AI Developer",
    company: "Independent Projects",
    location: "Remote",
    period: "2025 - Present",
    description:
      "Developed AI-powered tools including custom LLM-based chatbots, semantic search engines, and document intelligence systems. Leveraged technologies like Gemini API, LangChain, and Qdrant to create smart features for real-time interaction, data summarization, and query answering."
  },
  {
    position: "Backend Developer",
    company: "Freelance & BAAP Company",
    location: "Remote",
    period: "2024 - Present",
    description:
      "Designed and built scalable backend systems with clean architecture and RESTful APIs. Worked extensively on authentication, file processing, database design, and API optimization—primarily using Fastify.js, PostgreSQL, and cloud deployment platforms."
  },
  {
    position: "Backend Developer (Shadow to Production)",
    company: "Simplify VMS",
    location: "Remote",
    period: "2023 - 2024",
    description:
      "Started as a shadow developer, learning backend architecture and resolving minor bugs. Progressed to handling production issues including ticket fixes, and eventually authored core backend APIs. Worked on the Timesheet Module, managing employee work logs, breaks, holidays, delays, and time calculations across weekly and monthly cycles."
  }
];

const projectData = [
  {
    title: "TaskMate – Your Smart Team and Task Management Assistant",
    tech: "FastAPI | Gemini API | PostgreSQL/MySQL | Qdrant | HTML/CSS/JS",
    description:
      "An AI-powered team and task management system with role-based access (Super Admin, Team Leader, Employee), AI-generated EOD summaries, task analytics dashboard, and file-upload powered semantic understanding using Qdrant and Gemini."
  },
  {
    title: "Natural Language to SQL + Auto Dashboard Generator",
    tech: "FastAPI | Gemini API | PostgreSQL/MySQL | Power BI (via API) | SQLAlchemy | HTML/CSS/JS",
    description:
      "Allows users to connect their databases, ask natural language queries, and receive real-time SQL results with auto-generated Power BI-style visual dashboards."
  },
  {
    title: "Build Your Chatbot in Minutes – Rapid Bot Builder",
    tech: "FastAPI | Qdrant | Gemini 2.0 Flash | Web Scraping | PDF Ingestion | React | MySQL",
    description:
      "A plug-and-play chatbot solution that lets users upload PDFs or enter website URLs, automatically scrapes and stores content in vector DB (Qdrant), and serves real-time chatbot responses powered by Gemini AI. Includes iframe embedding, user management, and semantic search."
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

const ProjectItem: React.FC<(typeof projectData)[0] & { index: number }> = ({
  title,
  tech,
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
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-primary text-sm mb-2">{tech}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <>
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

      <section className="py-16" id="projects">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{ duration: 0.5 }}
        >
          AI & Web Development Projects I Contributed To
        </motion.h2>

        <div className="mt-12">
          {projectData.map((project, index) => (
            <ProjectItem key={index} {...project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;