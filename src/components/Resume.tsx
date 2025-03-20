
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, GraduationCap, Briefcase, Award, Languages, Globe, Star, MapPin } from "lucide-react";

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
                  src="/placeholder.svg" 
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
                  <a href="#" className="hover:text-primary transition-colors">portfolio.com</a>
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
              <p className="text-primary font-medium mb-4">Full Stack Developer</p>
              <p className="text-muted-foreground mb-6">
                Passionate and detail-oriented Full Stack Developer with expertise in building modern web applications.
                Experienced in working with US clients and developing scalable solutions. Strong problem-solving skills
                and a quick learner who thrives in collaborative environments.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-primary mb-1">Email:</h4>
                  <p>saish.jape@example.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Phone:</h4>
                  <p>+91 9876543210</p>
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
                <p className="text-sm text-muted-foreground">2018 - 2021</p>
                <p className="mt-2">Focused on computer science fundamentals, programming languages, web technologies, and database management. Graduated with distinction.</p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-5 py-1 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
                <h4 className="font-bold text-lg">Advanced Web Development Certification</h4>
                <p className="text-primary">Online Learning Platform</p>
                <p className="text-sm text-muted-foreground">2021</p>
                <p className="mt-2">Completed comprehensive training in modern web development technologies and best practices.</p>
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
                <h4 className="font-bold text-lg">Full Stack Developer</h4>
                <p className="text-primary">Freelance - US Clients</p>
                <p className="text-sm text-muted-foreground">2022 - Present</p>
                <p className="mt-2">Developed and maintained websites for US-based clients using modern technologies like React, Node.js, and AWS.</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>Built responsive web applications with React, TypeScript and modern CSS frameworks</li>
                  <li>Implemented backend solutions using Node.js, Fastify, and RESTful APIs</li>
                  <li>Deployed and maintained applications on AWS cloud infrastructure</li>
                  <li>Collaborated with cross-functional teams in different time zones</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-5 py-1 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
                <h4 className="font-bold text-lg">Web Development Intern</h4>
                <p className="text-primary">The Baap Company</p>
                <p className="text-sm text-muted-foreground">2021 - 2022</p>
                <p className="mt-2">Completed an internship focused on full-stack web development and client projects.</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>Assisted in developing user interfaces using HTML, CSS, and JavaScript</li>
                  <li>Worked on database design and implementation using SQL and MongoDB</li>
                  <li>Contributed to team projects and learned industry best practices</li>
                  <li>Gained experience in version control and collaborative development</li>
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
                <p className="text-sm text-muted-foreground">HTML, CSS, Bootstrap, React.js, TypeScript</p>
              </div>
              <div className="glass-card p-4 rounded-lg bg-secondary/50">
                <h4 className="font-medium mb-2">Backend</h4>
                <p className="text-sm text-muted-foreground">Node.js, Express.js, Fastify.js, Python, Core Java</p>
              </div>
              <div className="glass-card p-4 rounded-lg bg-secondary/50">
                <h4 className="font-medium mb-2">Database</h4>
                <p className="text-sm text-muted-foreground">MySQL, SQL, MongoDB</p>
              </div>
              <div className="glass-card p-4 rounded-lg bg-secondary/50">
                <h4 className="font-medium mb-2">Cloud & DevOps</h4>
                <p className="text-sm text-muted-foreground">AWS, Git, GitHub, Deployment</p>
              </div>
              <div className="glass-card p-4 rounded-lg bg-secondary/50">
                <h4 className="font-medium mb-2">Tools</h4>
                <p className="text-sm text-muted-foreground">VS Code, Figma, Command Line</p>
              </div>
              <div className="glass-card p-4 rounded-lg bg-secondary/50">
                <h4 className="font-medium mb-2">Soft Skills</h4>
                <p className="text-sm text-muted-foreground">Problem Solving, Team Collaboration, Time Management</p>
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
