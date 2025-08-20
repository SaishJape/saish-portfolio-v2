import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { motion } from "framer-motion";
import { Code, GraduationCap, Globe, MapPin } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold font-display mb-6 relative inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
            <span className="absolute -bottom-1 left-0 h-1 bg-primary rounded-full w-1/2"></span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src="./saish_jape.jpeg" 
                  alt="Saish Jape" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="mt-6 glass-card p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Personal Info</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">
                      <Globe size={16} />
                    </span>
                    <span>saishjape04@example.com</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">
                      <MapPin size={16} />
                    </span>
                    <span>Shirdi, Maharashtra, India</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-2/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="glass-card p-6 rounded-lg mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Code className="text-primary" size={20} />
                  </div>
                  <h2 className="text-xl font-bold">Full Stack Developer & AI Enthusiast</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Hello! I'm Saish Jape, a passionate full stack developer from Shirdi, Maharashtra. I specialize in building responsive, scalable, and intelligent web applications that combine traditional full stack development with cutting-edge AI technologies.
                </p>
                
                <p className="text-muted-foreground mb-4">
                  I began my backend journey during my internship at <strong>The Baap Company</strong>, where I contributed to backend systems using <strong>Node.js</strong>, <strong>Fastify.ts</strong>, and modern backend architectures.
                </p>

                <p className="text-muted-foreground"> 
                  My work increasingly revolves around Artificial Intelligence. I’ve integrated advanced tools like <strong>Gemini API</strong>, <strong>LangChain</strong>, <strong>Qdrant</strong>, <strong>Chroma</strong>, <strong>FAISS</strong>, <strong>LlamaIndex</strong>, <strong>Pinecone</strong>, <strong>OpenAI</strong>, and <strong>Hugging Face Transformers</strong>. These power smart chatbots, semantic search systems, document intelligence tools, and more.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <h2 className="text-xl font-bold">Education & Experience</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  I'm currently pursuing a Bachelor of Computer Applications (BCA) from Mysore University. My academic learning is strengthened by real-world experience through internships and freelance roles.
                </p>
                
                <p className="text-muted-foreground mb-4">
                  At <strong>The Baap Company</strong>, I was trained on full-stack development, LLM-based integrations, cloud APIs, and chatbot architecture. I’ve worked on RESTful APIs, JWT authentication, AI agents, and real-time dashboard systems.
                </p>
                
                <p className="text-muted-foreground">
                  I also served as a Backend Developer for <strong>Simplify VMS</strong>, initially starting as a Shadow Developer. Over time, I took full charge of their Timesheet Module—solving production bugs and building APIs for employee logs, holiday calendars, weekly/monthly delays, work hour tracking, and payroll logic.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;