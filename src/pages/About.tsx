
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
                  src="/placeholder.svg" 
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
                    <span>saishjape@example.com</span>
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
                  <h2 className="text-xl font-bold">Web Developer</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Hello! I'm Saish Jape, a passionate web developer from Shirdi, Maharashtra. I specialize in building responsive, user-friendly websites and applications using modern technologies.
                </p>
                
                <p className="text-muted-foreground">
                  With expertise in both frontend and backend development, I enjoy creating seamless digital experiences that solve real-world problems. I'm constantly learning and expanding my skillset to stay up-to-date with the latest trends and technologies in web development.
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
                  I hold a Bachelor of Computer Applications (BCA) degree from Mysore University, where I developed a strong foundation in computer science and programming. Throughout my academic journey, I focused on practical learning and hands-on project development.
                </p>
                
                <p className="text-muted-foreground">
                  After completing my education, I've worked on several freelance projects, enhancing my skills in HTML, CSS, Bootstrap, React.js, Node.js, and database management with MySQL and MongoDB. Each project has been an opportunity to refine my technical abilities and problem-solving skills.
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
