
import React from "react";
import { motion } from "framer-motion";
import { Award, Code, Eye, Server } from "lucide-react";

const ProfileSection: React.FC = () => {
  const stats = [
    { icon: <Code className="text-primary w-6 h-6" />, value: "2+", label: "Years Experience" },
    { icon: <Server className="text-primary w-6 h-6" />, value: "10+", label: "Projects Completed" },
    { icon: <Eye className="text-primary w-6 h-6" />, value: "5+", label: "US Clients" },
    { icon: <Award className="text-primary w-6 h-6" />, value: "BCA", label: "Degree" }
  ];

  return (
    <section className="py-16" id="profile">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px 0px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-4">
              I'm a passionate <span className="gradient-text font-semibold">Full Stack Developer</span> with expertise 
              in building modern web applications using cutting-edge technologies. My journey in 
              tech started with my BCA degree from Mysore University, and since then I've been 
              continuously expanding my skill set.
            </p>
            
            <p className="text-lg mb-4">
              I've had the privilege of working with US-based clients, developing responsive web 
              applications and complex backend systems. My experience includes working at "The Baap Company" 
              as an intern, where I contributed to real-world projects and honed my skills in a 
              professional environment.
            </p>
            
            <p className="text-lg">
              My technical expertise spans across <span className="text-primary font-semibold">React.js</span>, <span className="text-primary font-semibold">Node.js</span>, <span className="text-primary font-semibold">Fastify.js</span>, <span className="text-primary font-semibold">AWS</span>, <span className="text-primary font-semibold">TypeScript</span>, <span className="text-primary font-semibold">Python</span>, <span className="text-primary font-semibold">Core Java</span>, and database technologies like <span className="text-primary font-semibold">MongoDB</span> and <span className="text-primary font-semibold">MySQL</span>. I'm passionate about creating clean, efficient, and scalable code.
            </p>
          </motion.div>
          
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px 0px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="glass-card p-4 rounded-lg text-center"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
