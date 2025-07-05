
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!profileRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = profileRef.current.getBoundingClientRect();
      
      const x = (clientX - left - width / 2) / 15;
      const y = (clientY - top - height / 2) / 15;
      
      profileRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 py-12">
      <motion.div 
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="inline-block text-sm md:text-base text-primary font-medium mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello, I'm
        </motion.span>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 gradient-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Saish Jape
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-6 max-w-lg mx-auto md:mx-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
        A passionate Full Stack Developer from Shirdi, with a strong focus on backend development and
        AI integration. Currently pursuing a BCA degree from Mysore University and interning at BAAP Company, 
        where I’m gaining real-world experience by building scalable and production-ready applications.
        </motion.p>
        
        <motion.div 
          className="flex gap-4 justify-center md:justify-start mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a 
            href="https://github.com/SaishJape" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300 hover:scale-110 transform"
          >
            <Github size={24} className="text-primary" />
          </a>
          <a 
            href="https://www.linkedin.com/in/saish-jape" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={24} className="text-primary" />
          </a>
          <a 
            href="mailto:saishjape04@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={24} className="text-primary" />
          </a>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="/resume" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2 hover:shadow-lg">
            View Resume <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="border border-primary/20 hover:border-primary/50 text-foreground hover:text-primary px-6 py-3 rounded-lg font-medium transition-colors duration-300 hover:shadow-lg">
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        ref={profileRef}
        className="flex-1 max-w-xs md:max-w-sm relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease' }}
      >
        <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl gradient-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay"/>
          <img 
            src="./herophoto.jpg" 
            alt="Saish Jape" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg max-w-[80%] animated-border-box">
          <p className="font-medium">Full Stack Developer</p>
          <p className="text-sm text-foreground">React, Node.js, AWS, FastifyJS</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
