import React from "react";
import { motion } from "framer-motion";
import { Award, Code, Eye, Server } from "lucide-react";

const ProfileSection: React.FC = () => {
  const stats = [
    { icon: <Code className="text-primary w-6 h-6" />, value: "2+", label: "Years Experience" },
    { icon: <Server className="text-primary w-6 h-6" />, value: "10+", label: "Projects Completed" },
    { icon: <Eye className="text-primary w-6 h-6" />, value: "1+", label: "AI Tools Built" },
    { icon: <Award className="text-primary w-6 h-6" />, value: "BCA", label: "Pursuing Degree" }
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
              I'm a passionate <span className="gradient-text font-semibold">Full Stack Developer</span> with a strong foundation in building modern web applications. My journey started with a <span className="font-semibold">BCA degree</span> from Mysore University (currently pursuing), and I’ve been continuously growing in both backend development and emerging areas like <span className="text-primary font-semibold">Artificial Intelligence</span>.
            </p>

            <p className="text-lg mb-4">
              Currently, I’m interning at <span className="text-primary font-semibold">The BAAP Company</span>, where I contribute to real-world, production-grade projects. I enjoy building scalable, efficient, and user-centric web solutions that blend robust backend functionality with seamless user experiences.
            </p>

            <p className="text-lg mb-4">
              I'm especially interested in the intersection of web development and AI, and I’ve worked on projects involving intelligent systems, automation, and enhanced search experiences driven by large language models.
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
