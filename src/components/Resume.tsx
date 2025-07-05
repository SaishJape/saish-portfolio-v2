import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, GraduationCap, Briefcase, Award, Languages, Globe, Star, MapPin } from "lucide-react";

const Resume: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(resumeRef, { once: true, margin: "-100px 0px" });
  
  // Function to generate and download PDF
  const downloadResume = () => {
    // Create a new window for the PDF version
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    // Function to convert image to base64
    const getImageAsBase64 = (imgElement: HTMLImageElement): Promise<string> => {
      return new Promise((resolve) => {
        if (imgElement && imgElement.complete && imgElement.naturalWidth > 0) {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          // Set canvas size to match image
          canvas.width = imgElement.naturalWidth;
          canvas.height = imgElement.naturalHeight;
          
          // Draw image on canvas
          ctx?.drawImage(imgElement, 0, 0);
          
          // Convert to base64
          const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
          resolve(dataUrl);
        } else {
          resolve('');
        }
      });
    };

    // Get the image element and convert to base64
    const imgElement = document.querySelector('img[alt="Saish Jape"]') as HTMLImageElement;
    
    const processResume = async () => {
      let imageDataUrl = '';
      
      if (imgElement) {
        try {
          imageDataUrl = await getImageAsBase64(imgElement);
        } catch (error) {
          console.log('Could not process image:', error);
        }
      }

    // HTML content for the PDF
    const resumeHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Saish Jape - Resume</title>
      <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Afacad Flux', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          background: white;
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .header {
          display: flex;
          align-items: flex-start;
          gap: 25px;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #2563eb;
        }
        
        .header-image {
          flex-shrink: 0;
          width: 140px;
        }
        
        .header-image img {
          width: 140px;
          height: 180px;
          object-fit: cover;
          border-radius: 12px;
          border: 3px solid #2563eb;
          box-shadow: 0 4px 8px rgba(37, 99, 235, 0.2);
        }
        
        .header-image .placeholder {
          width: 140px;
          height: 180px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-radius: 12px;
          border: 3px solid #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          font-weight: 500;
          font-size: 14px;
        }
        
        .header-content {
          flex: 1;
          padding-top: 5px;
        }
        
        .header-content h1 {
          font-size: 2.4em;
          color: #1e40af;
          margin-bottom: 8px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        
        .header-content .title {
          font-size: 1.3em;
          color: #2563eb;
          font-weight: 600;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }
        
        .contact-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 10px;
        }
        
        .contact-info span {
          font-size: 0.95em;
          color: #555;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 400;
        }
        
        .section {
          margin-bottom: 25px;
        }
        
        .section-title {
          font-size: 1.5em;
          color: #1e40af;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 8px;
          margin-bottom: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          letter-spacing: 0.5px;
        }
        
        .summary {
          font-size: 1.05em;
          color: #555;
          line-height: 1.8;
          margin-bottom: 25px;
          padding: 20px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 12px;
          border-left: 5px solid #2563eb;
          font-weight: 400;
        }
        
        .summary strong {
          color: #1e40af;
          font-weight: 600;
        }
        
        .experience-item, .education-item {
          margin-bottom: 22px;
          padding-left: 0;
        }
        
        .experience-item h3, .education-item h3 {
          font-size: 1.2em;
          color: #1e40af;
          margin-bottom: 4px;
          font-weight: 600;
        }
        
        .experience-item .company, .education-item .institution {
          font-weight: 600;
          color: #2563eb;
          margin-bottom: 3px;
          font-size: 1.05em;
        }
        
        .experience-item .duration, .education-item .duration {
          font-size: 0.95em;
          color: #666;
          margin-bottom: 10px;
          font-weight: 500;
        }
        
        .experience-item p, .education-item p {
          margin-bottom: 10px;
          color: #555;
          font-weight: 400;
          line-height: 1.7;
        }
        
        .experience-item ul {
          margin-left: 22px;
          margin-top: 8px;
        }
        
        .experience-item li {
          margin-bottom: 4px;
          color: #555;
          font-size: 0.98em;
          line-height: 1.6;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          margin-top: 15px;
        }
        
        .skill-category {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 16px;
          border-radius: 10px;
          border-left: 4px solid #2563eb;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .skill-category h4 {
          color: #1e40af;
          margin-bottom: 8px;
          font-size: 1.1em;
          font-weight: 600;
        }
        
        .skill-category p {
          font-size: 0.95em;
          color: #555;
          line-height: 1.5;
          font-weight: 400;
        }
        
        .languages {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
        
        .language {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 15px 20px;
          border-radius: 10px;
          border-left: 4px solid #2563eb;
          text-align: center;
          min-width: 120px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .language h4 {
          color: #1e40af;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 1.05em;
        }
        
        .language-bars {
          display: flex;
          gap: 3px;
          justify-content: center;
        }
        
        .language-bar {
          width: 14px;
          height: 5px;
          background: #e5e7eb;
          border-radius: 3px;
        }
        
        .language-bar.filled {
          background: linear-gradient(90deg, #2563eb 0%, #3b82f6 100%);
        }
        
        @media print {
          body {
            padding: 15px;
            font-size: 13px;
          }
          .header {
            margin-bottom: 20px;
            padding-bottom: 15px;
          }
          .header-image img, .header-image .placeholder {
            width: 120px;
            height: 150px;
          }
          .header-content h1 {
            font-size: 2em;
          }
          .header-content .title {
            font-size: 1.1em;
          }
          .section {
            margin-bottom: 18px;
            page-break-inside: avoid;
          }
          .experience-item, .education-item {
            page-break-inside: avoid;
            margin-bottom: 18px;
          }
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .languages {
            gap: 15px;
          }
          .language {
            min-width: 100px;
            padding: 12px 16px;
          }
        }
      </style>
      <body>
        <div class="header">
          <div class="header-image">
            ${imageDataUrl ? `<img src="${imageDataUrl}" alt="Saish Jape" />` : '<div class="placeholder">Profile Photo</div>'}
          </div>
          <div class="header-content">
            <h1>Saish Jape</h1>
            <div class="title">Full Stack AI Developer</div>
            <div class="contact-info">
              <span>📧 saishjape04@gmail.com</span>
              <span>📞 +91 8208507318</span>
              <span>📍 Shirdi, Maharashtra</span>
              <span>🌐 <a href="https://saishjape.netlify.app" target="_blank">saishjape.netlify.app</a></span>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="summary">
            <strong>Professional Summary:</strong><br>
            Full Stack AI Developer with 3+ years of experience building intelligent web applications using FastAPI, React, and cloud platforms. 
            Specialized in integrating LLMs like Gemini with Qdrant vector DB, semantic search, PDF ingestion, and chatbot systems.
            Built end-to-end systems for US clients and enterprise-ready platforms like <strong>Rapid Bot</strong> and a <strong>Chatbot in Minutes</strong> product. 
            Skilled in automating workflows, API integration, Power BI analytics, and scalable deployment on AWS/GCP.
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">💼 Experience</h2>

          <div class="experience-item">
            <h3>Full Stack AI Developer</h3>
            <div class="company">Freelance / Client Projects</div>
            <div class="duration">2022 - Present</div>
            <p>Developed advanced AI-integrated platforms, semantic search chatbots, and cloud-native dashboards.</p>
            <ul>
              <li>Built multi-role AI project management tool with PDF ingestion, Gemini, and Qdrant</li>
              <li>Developed chatbot that scrapes websites/PDFs, stores content in vector DB, and answers queries</li>
              <li>Integrated Power BI and LLMs to generate dashboards from natural language + SQL</li>
              <li>Worked with US-based clients on scalable SaaS products</li>
            </ul>
          </div>

          <div class="experience-item">
            <h3>Web Development Intern</h3>
            <div class="company">The Baap Company</div>
            <div class="duration">July 2023</div>
            <p>Supported full-stack development tasks for client websites and internal tools.</p>
            <ul>
              <li>Assisted in frontend development using HTML, CSS, JS</li>
              <li>Helped design relational DBs and write SQL queries</li>
              <li>Improved deployment pipelines and debugging processes</li>
            </ul>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">🎓 Education</h2>

          <div class="education-item">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <div class="institution">Mysore University, Mysore</div>
            <div class="duration">July 2023</div>
            <p>Focused on web technologies, algorithms, and database design. Graduated with distinction.</p>
          </div>

          <div class="education-item">
            <h3>Advanced Web & AI Development Certification</h3>
            <div class="institution">Online Learning Platforms (Udemy, Google Cloud)</div>
            <div class="duration">July 2023</div>
            <p>Trained in FastAPI, LLMs (Gemini, OpenAI), cloud hosting, vector DBs, and production-level DevOps.</p>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">🛠️ Technical Skills</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h4>Frontend</h4>
              <p>HTML, CSS, Tailwind, Bootstrap, React.js, TypeScript</p>
            </div>
            <div class="skill-category">
              <h4>Backend</h4>
              <p>FastAPI, Node.js, Express.js, Python, Core Java</p>
            </div>
            <div class="skill-category">
              <h4>Databases</h4>
              <p>PostgreSQL, MySQL, MongoDB, Qdrant (Vector DB)</p>
            </div>
            <div class="skill-category">
              <h4>AI Tools</h4>
              <p>Gemini API, OpenAI, LangChain, LlamaIndex, HuggingFace</p>
            </div>
            <div class="skill-category">
              <h4>Visualization</h4>
              <p>Power BI, Mermaid.js, Markdown, Google Charts</p>
            </div>
            <div class="skill-category">
              <h4>Cloud & DevOps</h4>
              <p>AWS, GCP, GitHub Actions, Docker, Vercel</p>
            </div>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">🌐 Languages</h2>
          <div class="languages">
            <div class="language">
              <h4>English</h4>
              <div class="language-bars">
                <div class="language-bar filled"></div>
                <div class="language-bar filled"></div>
                <div class="language-bar filled"></div>
                <div class="language-bar filled"></div>
                <div class="language-bar"></div>
              </div>
            </div>
            <div class="language">
              <h4>Hindi</h4>
              <div class="language-bars">
                <div class="language-bar filled"></div>
                <div class="language-bar filled"></div>
                <div class="language-bar filled"></div>
                <div class="language-bar filled"></div>
                <div class="language-bar filled"></div>
              </div>
            </div>
            <div class="language">
              <h4>Marathi</h4>
              <div class="language-bars">
                <div class="language-bar filled"></div>
                <div class="language-bar filled"></div>
                <div class="language-bar filled"></div>
                <div class="language-bar filled"></div>
                <div class="language-bar filled"></div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>`;

      // Write content to the new window
      printWindow.document.write(resumeHTML);
      printWindow.document.close();

      // Wait for content to load, then trigger print dialog
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
          // Close the window after printing (user can cancel if they want)
          printWindow.onafterprint = () => {
            printWindow.close();
          };
        }, 500);
      };
    };

    // Call the async function
    processResume();
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