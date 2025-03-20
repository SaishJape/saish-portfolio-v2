
import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main 
        className="flex-1 py-8 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>

      <footer className="py-10 bg-primary/5 border-t relative">
        <div className="absolute right-10 -top-5">
          <button 
            onClick={scrollToTop} 
            className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl gradient-text font-bold mb-4">Saish Jape</h3>
              <p className="text-muted-foreground mb-4">
                Full Stack Developer with expertise in modern web technologies and cloud services.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/SaishJape" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors hover:scale-110 transform"
                >
                  <Github size={20} className="text-primary" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/saish-jape" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors hover:scale-110 transform"
                >
                  <Linkedin size={20} className="text-primary" />
                </a>
                <a 
                  href="mailto:saishjape04@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors hover:scale-110 transform"
                >
                  <Mail size={20} className="text-primary" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="fancy-underline text-muted-foreground hover:text-primary transition-colors">Home</a>
                </li>
                <li>
                  <a href="/about" className="fancy-underline text-muted-foreground hover:text-primary transition-colors">About</a>
                </li>
                <li>
                  <a href="/skills" className="fancy-underline text-muted-foreground hover:text-primary transition-colors">Skills</a>
                </li>
                <li>
                  <a href="/resume" className="fancy-underline text-muted-foreground hover:text-primary transition-colors">Resume</a>
                </li>
                <li>
                  <a href="/contact" className="fancy-underline text-muted-foreground hover:text-primary transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 group">
                  <MapPin size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground">Shirdi, Maharashtra, India</span>
                </li>
                <li className="flex items-center gap-2 group">
                  <Mail size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  <a href="mailto:saishjape04@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    saishjape04@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 group">
                  <Phone size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  <a href="tel:+918208507318" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 8208507318
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-6 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Saish Jape. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
