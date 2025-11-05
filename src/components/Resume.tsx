import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, GraduationCap, Briefcase, Award, Languages, Globe, Star, MapPin } from "lucide-react";

const Resume: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(resumeRef, { once: true, margin: "-100px 0px" });
  
  // Function to generate and download PDF
  const downloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    // Point to the resume image file in the assets directory
    link.href = '/public/saish jape resume docs image.png';
    link.download = 'Saish_Jape_Resume.png'; // This will be the downloaded filename
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
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
        <button 
          onClick={downloadResume}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors duration-300 cursor-pointer"
        >
          <Download size={16} />
          Download Resume
        </button>
      </div>
      
      <div ref={resumeRef} className="glass-card p-8 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 -mt-12 -mr-12 bg-primary/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 -mb-12 -ml-12 bg-primary/10 rounded-full blur-3xl z-0"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <motion.div 
              className="md:w-1/4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg overflow-hidden border-4 border-primary/20 shadow-lg mb-4">
                <img 
                  src="./herophoto.jpg" 
                  alt="Saish Jape" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>Shirdi, Maharashtra</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-primary" />
                  <a href="#" className="hover:text-primary transition-colors">https://saishjape.netlify.app/</a>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-3/4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2">Saish Jape</h3>
              <p className="text-primary font-medium mb-4">Full Stack AI Developer</p>
              <p className="text-muted-foreground mb-6">
                Skilled Full Stack AI Developer with hands-on experience in developing intelligent applications powered by LLMs, vector databases, and semantic search. Specialized in building chatbot systems, AI dashboards, and automation tools using FastAPI, Gemini, Qdrant, React, and cloud platforms. Proven ability to deliver scalable, production-ready solutions for US clients and startups. Portfolio: <a href="https://saishjape.netlify.app" className="underline text-blue-600" target="_blank">saishjape.netlify.app</a>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-primary mb-1">Email:</h4>
                  <p>saishjape04@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Phone:</h4>
                  <p>+91 8208507318</p>
                </div>
              </div>
            </motion.div>
            </div>

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
                  <p className="text-sm text-muted-foreground">July 2023</p>
                  <p className="mt-2">Learned computer science fundamentals, software development, web technologies, and databases. Graduated with distinction.</p>
                </div>

                <div className="border-l-2 border-primary/30 pl-5 py-1 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
                  <h4 className="font-bold text-lg">Advanced Web & AI Development</h4>
                  <p className="text-primary">Google Cloud, Udemy, Self-paced and The Baap Company</p>
                  <p className="text-sm text-muted-foreground">2023 started</p>
                  <p className="mt-2">Trained in building full-stack AI products using FastAPI, Gemini, OpenAI, Qdrant, and cloud deployments. Focused on hands-on LLM integration and chatbot systems.</p>
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
                  <h4 className="font-bold text-lg">Full Stack AI Developer</h4>
                  <p className="text-primary">Freelance</p>
                  <p className="text-sm text-muted-foreground">2025 - Present</p>
                  <p className="mt-2">Developed end-to-end AI platforms including LLM-powered chatbot systems, vector-based semantic search engines, and intelligent dashboards.</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    <li>Built Rapid Bot – Chatbot builder using Gemini, Qdrant, and FastAPI with embeddable iframe</li>
                    <li>Created a Power BI generation platform using natural language SQL conversion via Gemini</li>
                    <li>Scraped web content & PDFs and enabled vector-based question answering</li>
                    <li>Integrated user authentication, dynamic role-based UIs, and chatbot personalization</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/30 pl-5 py-1 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
                  <h4 className="font-bold text-lg">Web Development Intern</h4>
                  <p className="text-primary">The Baap Company</p>
                  <p className="text-sm text-muted-foreground">2023</p>
                  <p className="mt-2">Assisted in developing and maintaining client websites and internal dashboards.</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    <li>Helped design and test responsive UIs using HTML, CSS, JS</li>
                    <li>Worked with SQL/MongoDB for back-office systems</li>
                    <li>Participated in debugging and staging deployments</li>
                  </ul>
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
                  <p className="text-sm text-muted-foreground">HTML, CSS, Tailwind, React.js, TypeScript</p>
                </div>
                <div className="glass-card p-4 rounded-lg bg-secondary/50">
                  <h4 className="font-medium mb-2">Backend</h4>
                  <p className="text-sm text-muted-foreground">FastAPI, Node.js, Express.js, Python, Java</p>
                </div>
                <div className="glass-card p-4 rounded-lg bg-secondary/50">
                  <h4 className="font-medium mb-2">Databases</h4>
                  <p className="text-sm text-muted-foreground">PostgreSQL, MySQL, MongoDB, Qdrant</p>
                </div>
                <div className="glass-card p-4 rounded-lg bg-secondary/50">
                  <h4 className="font-medium mb-2">AI Tools</h4>
                  <p className="text-sm text-muted-foreground">Gemini API, OpenAI, LangChain, LlamaIndex</p>
                </div>
                <div className="glass-card p-4 rounded-lg bg-secondary/50">
                  <h4 className="font-medium mb-2">Cloud & DevOps</h4>
                  <p className="text-sm text-muted-foreground">AWS, GCP, Vercel, Docker, GitHub Actions</p>
                </div>
                <div className="glass-card p-4 rounded-lg bg-secondary/50">
                  <h4 className="font-medium mb-2">Soft Skills</h4>
                  <p className="text-sm text-muted-foreground">Problem Solving, Creativity, Teamwork, Communication</p>
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
      </div>
    </section>
  );
};

export default Resume;