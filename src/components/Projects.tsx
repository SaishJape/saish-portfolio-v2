
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product management, user authentication, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    github: "#",
    liveDemo: "#",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team collaboration features.",
    technologies: ["React", "Fastify.js", "TypeScript", "AWS"],
    github: "#",
    liveDemo: "#",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase skills, experience, and projects using modern web technologies.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    liveDemo: "#",
    image: "/placeholder.svg",
  }
];

const ProjectCard: React.FC<{
  project: typeof projectsData[0];
  index: number;
}> = ({ project, index }) => {
  return (
    <motion.div 
      className="glass-card overflow-hidden rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px 0px" }}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a href={project.github} className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
            <span>Code</span>
          </a>
          <a href={project.liveDemo} className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-16" id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      
      <motion.p 
        className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        I've worked on various projects throughout my career, including work for US clients. 
        Here are some highlights from my portfolio.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-300">
          <Code size={18} />
          Want to work together? Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Projects;
