import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import { MessageCircle, X, Send, Loader2, Minimize2, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

// Initialize Gemini API
// NOTE: In a production environment, this key should be in an environment variable
// and ideally calls should go through a backend proxy to hide the key.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyAWmVbE1h1kLKj__ji9ZmUTjHBuEYhizgE";
const genAI = new GoogleGenerativeAI(API_KEY);

interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

const SYSTEM_PROMPT = `
You are an AI assistant for Saish Jape's portfolio website. Your role is to answer questions about Saish's professional background, skills, and projects in a friendly and professional manner.

Here is Saish's information:

**Profile:**
- Name: Saish Jape
- Role: Full Stack AI Developer
- Location: Shirdi, Maharashtra, India
- Contact: saishjape04@gmail.com | +91 8208507318
- Portfolio: https://saishjape.netlify.app

**Summary:**
Skilled Full Stack AI Developer with hands-on experience in developing intelligent applications powered by LLMs, vector databases, and semantic search. Specialized in building chatbot systems, AI dashboards, and automation tools using FastAPI, Gemini, Qdrant, React, and cloud platforms. Proven ability to deliver scalable, production-ready solutions.

**Education:**
- Bachelor of Computer Applications (BCA) - Mysore University (July 2023) - Distinction.
- Advanced Web & AI Development - Google Cloud, Udemy, The Baap Company (2023 - Present).

**Experience:**
1. **Full Stack AI Developer (Freelance)** (2025 - Present):
   - Built "Rapid Bot" (Chatbot builder using Gemini, Qdrant, FastAPI).
   - Created Power BI generation platform (Natural Language to SQL).
   - Scraped web/PDFs for vector-based QA.
2. **Backend Developer (Freelance & BAAP Company)** (2024 - Present):
   - Scalable backend systems using Fastify.js, PostgreSQL.
3. **Backend Developer (Simplify VMS)** (2023 - 2024):
   - Worked on Timesheet Module, employee work logs.
4. **Web Development Intern (The Baap Company)** (2023):
   - Responsive UIs, SQL/MongoDB, debugging.

**Skills:**
- **Frontend:** HTML, CSS, Tailwind, React.js, TypeScript.
- **Backend:** FastAPI, Node.js, Express.js, Python, Java.
- **Databases:** PostgreSQL, MySQL, MongoDB, Qdrant.
- **AI Tools:** Gemini API, OpenAI, LangChain, LlamaIndex.
- **Cloud/DevOps:** AWS, GCP, Vercel, Docker, GitHub Actions.
- **Languages:** English, Hindi, Marathi.

**Projects:**
1. **TaskMate:** AI-powered team/task management (FastAPI, Gemini, Qdrant).
2. **Natural Language to SQL:** Auto Dashboard Generator (FastAPI, Power BI).
3. **Rapid Bot Builder:** Plug-and-play chatbot solution (PDF/URL ingestion).

**Guidelines:**
- Be helpful, polite, and concise.
- If asked about something not in this information, say you don't have that information but can help with questions about Saish's professional work.
- Keep responses relevant to the portfolio context.
- You can use formatting like bolding for emphasis.
`;

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "model",
      text: "Hi there! I'm Saish's AI assistant. Ask me anything about his projects, skills, or experience.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: SYSTEM_PROMPT }],
          },
          {
            role: "model",
            parts: [{ text: "Understood. I am ready to answer questions about Saish Jape based on the provided information." }],
          },
          ...messages.map(msg => ({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.text }],
          })).slice(1) // Skip the initial welcome message in history if needed, or keep it. 
          // Actually, let's just send the history correctly.
          // The welcome message is local, so we might not want to send it if it confuses the model, 
          // but usually it's fine. Let's filter it out if it's the static welcome one to be safe,
          // or just map everything.
        ] as any,
      });

      const result = await chat.sendMessage(userMessage.text);
      const response = await result.response;
      const text = response.text();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center font-chatbot"
            aria-label="Open Chat"
          >
            <MessageCircle size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "500px",
              width: isMinimized ? "300px" : "350px" // Responsive width handling could be better with CSS classes
            }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "fixed bottom-6 right-6 z-50 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden font-chatbot",
              "w-[90vw] sm:w-[400px] max-h-[80vh]" // Responsive width classes
            )}
            style={{
              height: isMinimized ? "auto" : "600px"
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <h3 className="font-bold">Saish's AI Assistant</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-primary-foreground/20 rounded transition-colors"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-primary-foreground/20 rounded transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            {!isMinimized && (
              <>
                <ScrollArea className="flex-1 p-4 bg-secondary/20">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={cn(
                          "flex w-full",
                          msg.role === "user" ? "justify-end" : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-[80%] p-3 rounded-lg text-sm",
                            msg.role === "user"
                              ? "bg-primary text-primary-foreground rounded-br-none"
                              : "bg-card border border-border text-card-foreground rounded-bl-none shadow-sm"
                          )}
                        >
                          {/* Render markdown content */}
                          <div className="markdown-content text-sm">
                            <ReactMarkdown
                              components={{
                                ul: ({ node, ...props }) => <ul className="list-disc list-inside ml-2" {...props} />,
                                ol: ({ node, ...props }) => <ol className="list-decimal list-inside ml-2" {...props} />,
                                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                                strong: ({ node, ...props }) => <span className="font-bold" {...props} />,
                                p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                              }}
                            >
                              {msg.text}
                            </ReactMarkdown>
                          </div>
                          <span className="text-[10px] opacity-70 block mt-1 text-right">
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start w-full">
                        <div className="bg-card border border-border p-3 rounded-lg rounded-bl-none shadow-sm flex items-center gap-2">
                          <Loader2 size={16} className="animate-spin text-primary" />
                          <span className="text-xs text-muted-foreground">Typing...</span>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 border-t border-border bg-background">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask about my projects..."
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={isLoading || !inputValue.trim()}
                      size="icon"
                      className="shrink-0"
                    >
                      <Send size={18} />
                    </Button>
                  </div>
                  {/* <div className="text-center mt-2">
                    <p className="text-[10px] text-muted-foreground">
                      Powered by Gemini AI. Responses may vary.
                    </p>
                  </div> */}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
