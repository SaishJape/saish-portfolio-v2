
import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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
      <footer className="py-10 bg-primary/5 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Saish Jape</h3>
              <p className="text-muted-foreground mb-4">
                Full Stack Developer with expertise in modern web technologies and cloud services.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                  <Github size={20} className="text-primary" />
                </a>
                <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                  <Linkedin size={20} className="text-primary" />
                </a>
                <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
                </li>
                <li>
                  <a href="/skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
                </li>
                <li>
                  <a href="/resume" className="text-muted-foreground hover:text-primary transition-colors">Resume</a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-muted-foreground">Shirdi, Maharashtra, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-primary" />
                  <a href="mailto:saish.jape@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    saish.jape@example.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-primary" />
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9876543210
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
