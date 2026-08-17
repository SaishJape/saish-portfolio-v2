import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Calendar, Zap, Sparkles, Cpu, Eye, Database, Link as LinkIcon, MessageSquare, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export interface ProjectType {
  id: string;
  index: string;
  title: string;
  description: string;
  impact: string;
  dates: string;
  technologies: string[];
  categories: string[];
  icon: React.ReactNode;
  link?: string;
  linkText?: string;
}

const projectsData: ProjectType[] = [
  {
    id: "email-service",
    index: "01 / 08",
    title: "Email Service Platform",
    description: "Enterprise-grade email management system supporting IMAP/SMTP integration, AI-powered email assistance, automated workflows, background job processing, and real-time notifications. Features Smart Replies, AI Email Summaries, VIP Sender Alerts, Daily Email Summaries, Smart Email Forwarding, attachment handling, and multi-account email synchronization.",
    impact: "Processed and managed email workflows through BullMQ and Redis-based background jobs, reducing server load and enabling scalable email synchronization across multiple accounts.",
    dates: "Jan 2026 — Present",
    technologies: ["Node.js", "TypeScript", "Fastify", "React.js", "BullMQ", "Redis", "IMAP", "SMTP", "PostgreSQL", "OpenAI / Gemini AI", "WebSockets"],
    categories: ["AI & RAG", "Backend & Systems"],
    icon: <Mail className="w-5 h-5" />,
    link: "https://boardview.me/",
    linkText: "Visit Boardview"
  },
  {
    id: "boardview-ai",
    index: "02 / 08",
    title: "Boardview AI",
    description: "Enterprise AI platform built using LLMs, RAG, semantic search, and agentic workflows to deliver intelligent, context-aware interactions and business process automation. Developed a multi-tenant AI architecture with client-specific knowledge bases and tool integrations. Built dynamic tool execution frameworks enabling AI-driven appointment booking, lead capture, and workflow automation through external business APIs.",
    impact: "Implemented Qdrant-powered semantic search and RAG for enterprise knowledge retrieval, integrated conversational memory, live information retrieval, and scalable backend services for production deployments.",
    dates: "2025 — Present",
    technologies: ["Python", "FastAPI", "Qdrant", "PostgreSQL", "Redis", "Gemini", "DeepSeek", "LangChain", "Docker"],
    categories: ["AI & RAG", "Backend & Systems"],
    icon: <Zap className="w-5 h-5" />,
    link: "https://boardview.me/",
    linkText: "Visit Boardview"
  },
  {
    id: "sangamner-ai",
    index: "03 / 08",
    title: "Sangamner AI",
    description: "Civic AI assistant for Sangamner — instant real-time chat over WebSockets with contextual replies based on citizen queries.",
    impact: "<200ms response latency • 500+ daily public interactions.",
    dates: "Dec 2025 — Present",
    technologies: ["FastAPI", "Gemini", "WebSockets", "RAG"],
    categories: ["AI & RAG"],
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: "voice-on-call",
    index: "04 / 08",
    title: "Voice-on-Call AI Platform",
    description: "AI-powered calling system with natural voice interaction. Sub-second real-time speech recognition and intent handling powered by Gemini.",
    impact: "Reduced human operator dependency by 40% via automated voice workflows.",
    dates: "Jan 2025 — Jul 2025",
    technologies: ["Gemini", "FastAPI", "VITS", "Twilio", "WebSockets"],
    categories: ["AI & RAG", "Backend & Systems"],
    icon: <Cpu className="w-5 h-5" />,
    link: "https://ai-calling.baap.company/",
    linkText: "Visit Voice-on-Call AI"
  },
  {
    id: "ai-surveillance",
    index: "05 / 08",
    title: "AI Face Surveillance & ALPR System",
    description: "AI-powered CCTV surveillance system featuring real-time face recognition, Automatic License Plate Recognition (ALPR), attendance tracking, and security monitoring. Designed to process multiple camera streams simultaneously with instant alerting and intelligent search capabilities.",
    impact: "Automated security monitoring and attendance management through real-time face identification and vehicle detection, reducing manual surveillance efforts by over 70%.",
    dates: "Jul 2024 — Dec 2024",
    technologies: ["FastAPI", "Python", "YOLOv8", "YOLOv9", "InsightFace", "Qdrant", "PostgreSQL", "WebSockets", "ONNX Runtime", "Meta WhatsApp API"],
    categories: ["Computer Vision", "Backend & Systems"],
    icon: <Eye className="w-5 h-5" />
  },
  {
    id: "agentic-workflow",
    index: "06 / 08",
    title: "Agentic Workflow Engine",
    description: "Scalable agentic workflow design for production automations — composable tools, planners, and retries with full observability.",
    impact: "Cut backend latency by 30% across AI platform services.",
    dates: "2024",
    technologies: ["LangChain", "Agents", "Python", "Docker"],
    categories: ["AI & RAG", "Backend & Systems"],
    icon: <Code className="w-5 h-5" />
  },
  {
    id: "whatsapp-clone",
    index: "07 / 08",
    title: "AI-Powered WhatsApp Clone Backend",
    description: "A real-time WhatsApp clone backend engine featuring automated conversational AI agents. Supports WebSocket message relays, message database persistence, Redis-backed state caching, and Gemini API integration for automated customer support responders.",
    impact: "Created an autonomous chat gateway with sub-100ms message relay latency.",
    dates: "2024",
    technologies: ["FastAPI", "WebSockets", "Gemini", "PostgreSQL", "Redis", "Docker"],
    categories: ["Backend & Systems", "AI & RAG"],
    icon: <MessageSquare className="w-5 h-5" />,
    link: "https://boardview.me/",
    linkText: "Visit Boardview"
  },
  {
    id: "ai-training-rag",
    index: "08 / 08",
    title: "AI Training Module with RAG System",
    description: "Enterprise knowledge training engine that enables Retrieval-Augmented Generation (RAG) over custom datasets. Supports automated document chunking, semantic vector index compilation in Qdrant, and custom context injection for tailoring model responses.",
    impact: "Built visual board analytics to review document vector alignments and retrieval scores.",
    dates: "2024",
    technologies: ["Python", "FastAPI", "RAG", "Qdrant", "LangChain", "Vector Embeddings"],
    categories: ["AI & RAG"],
    icon: <Database className="w-5 h-5" />
  }
];

const ProjectCard: React.FC<{
  project: ProjectType;
  index: number;
}> = ({ project, index }) => {
  return (
    <motion.div 
      layout
      className="glass-card relative overflow-hidden rounded-xl p-6 hover:shadow-xl transition-all duration-300 group flex flex-col border border-primary/10 hover:border-primary/30"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {/* Background glow animation */}
      <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
      
      <div className="flex-1">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-primary/10 text-primary p-2.5 rounded-lg">
            {project.icon}
          </div>
          <span className="text-sm font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 font-display">
            {project.index}
          </span>
        </div>
        
        <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
          <Calendar size={13} className="text-primary/70" />
          <span>{project.dates}</span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Impact Box */}
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-3.5 mb-5 flex items-start gap-2.5">
          <Zap size={15} className="text-primary mt-0.5 shrink-0 animate-pulse" />
          <p className="text-xs text-foreground/90 font-medium">
            {project.impact}
          </p>
        </div>
      </div>
      
      <div className="mt-2">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="bg-primary/5 hover:bg-primary/10 text-foreground border border-primary/5 hover:border-primary/20 px-2 py-0.5 rounded text-xs transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.link && (
        <div className="mt-3 pt-3 border-t border-primary/5 flex flex-col gap-1.5">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline group/link w-fit"
          >
            <LinkIcon size={14} className="group-hover/link:rotate-45 transition-transform duration-300" />
            <span>{project.linkText || "Visit Application"}</span>
            <ArrowRight size={12} className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
          </a>
          {project.link.includes("boardview.me") && (
            <p className="text-[11px] text-muted-foreground font-medium">
              Sign up to explore the live application.
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
};

interface ProjectsProps {
  isFeaturedOnly?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isFeaturedOnly = false }) => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "AI & RAG", "Backend & Systems", "Computer Vision"];

  const filteredProjects = projectsData.filter(project => {
    if (activeTab === "All") return true;
    return project.categories.includes(activeTab);
  });

  const displayProjects = isFeaturedOnly 
    ? filteredProjects.slice(0, 3) 
    : filteredProjects;

  return (
    <section className={isFeaturedOnly ? "py-16 border-t border-primary/5" : "py-8"} id="projects">
      {isFeaturedOnly && (
        <div className="text-center mb-10">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px 0px" }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            A handpicked selection of production-grade AI applications, real-time communication backends, and surveillance pipelines.
          </p>
        </div>
      )}

      {/* Category Tabs (Show only on dedicated page or if requested) */}
      {!isFeaturedOnly && (
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-102 ${
                activeTab === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/25 border border-primary font-semibold"
                  : "bg-white/80 dark:bg-card/80 text-muted-foreground border border-primary/10 hover:border-primary/30 hover:bg-primary/5 hover:text-primary backdrop-blur-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
      >
        <AnimatePresence mode="popLayout">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {isFeaturedOnly && (
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors hover:shadow-lg hover:shadow-primary/20"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
