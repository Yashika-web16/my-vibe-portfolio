/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Star, 
  Zap, 
  Ghost,
  Smile,
  Frown,
  Meh
} from 'lucide-react';

// --- 🛠️ YOUR DATA (EDIT THIS!) ---
const DATA = {
  name: "VIBE.CHECK",
  githubUsername: "Yashika-web16", // Your GitHub username to fetch profile data
  linkedinUrl: "https://www.linkedin.com/in/yashika-nagdev-85bb54278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  email: "yashikanagdev16@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1zdPO_sFXU31d6YQs3gSnIKv92rVC_wbX/view?usp=sharing",  
  tagline: "I BUILD COOL SH*T FOR THE WEB.",
  description: "Yashika Nagdev — CS @ Manipal Jaipur, building with AI, designing with intent, and breaking things just to rebuild them better.",
  location: "India",
  projects: [
    { 
      title: "Plan-It", 
      desc: "Built an AI Powered event planning system generating dynamic checklists and budget estimates,reducing manual effort by 70%.",
      tags: ["React", "TypeScript", "Gemini-AI","FireBase"],
      link: "https://plan-it-steel.vercel.app/"
    },
    { 
      title: "Paper-Pulse", 
      desc: "Built an React based AI research assisstant for summarisation,chat,and intelligent PDF interaction. Don't ask me about the RESEARCH PAPERS.",
      tags: ["React", "TypeScript","RAG Pipeline","Vector Databases"],
      link: "https://paper-pulse-seven.vercel.app/"
    },
    { 
      title: "Smart-Mess", 
      desc: "Developed a web platform enabling students to pre book meals . Because why not?",
      tags: ["TypeScript", "Node.js"],
      link: "https://smart-mess-git-main-yashika-nagdevs-projects.vercel.app/"
    }
  ],
  skills: ["React", "TypeScript","Tailwind","Java", "Node.js", "Python", "Docker", "Firebase", "Git", "SQL"]
};

// --- Components ---

const Marquee = ({ text }: { text: string }) => (
  <div className="bg-black text-primary py-4 border-y-4 border-black marquee">
    <div className="marquee-content">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-4xl font-black uppercase mx-8 flex items-center gap-4">
          {text} <Star fill="currentColor" size={32} />
        </span>
      ))}
    </div>
  </div>
);

const Sticker = ({ children, className, rotate = 0, isChaos = false }: any) => {
  const [randomPos, setRandomPos] = useState({ x: 0, y: 0, r: rotate });

  useEffect(() => {
    if (isChaos) {
      const interval = setInterval(() => {
        setRandomPos({
          x: Math.random() * 400 - 200,
          y: Math.random() * 400 - 200,
          r: Math.random() * 360
        });
      }, 500);
      return () => clearInterval(interval);
    } else {
      setRandomPos({ x: 0, y: 0, r: rotate });
    }
  }, [isChaos, rotate]);

  return (
    <motion.div
      drag
      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
      whileHover={{ scale: 1.1 }}
      animate={{ 
        x: randomPos.x, 
        y: randomPos.y, 
        rotate: randomPos.r 
      }}
      transition={{ type: "spring", damping: 10 }}
      className={`absolute p-4 bg-white border-4 border-black brutal-shadow cursor-grab active:cursor-grabbing z-20 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const ProjectBox = ({ title, desc, tags, link }: any) => (
  <a href={link} className="bg-white border-4 border-black p-6 brutal-shadow-hover group block relative overflow-hidden">
    {/* Pixel Sort Overlay (Simulated) */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-melt" />
      <div className="absolute inset-0 flex flex-col">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="h-[5%] w-full bg-black/5 border-b border-black/10"
            style={{ 
              transform: `translateX(${Math.sin(i) * 10}px)`,
              animation: `pixel-sort ${0.5 + Math.random()}s infinite alternate`
            }}
          />
        ))}
      </div>
    </div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-3xl font-black uppercase leading-none">{title}</h3>
        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
      </div>
      <p className="text-lg mb-6 font-medium">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="bg-primary text-black px-3 py-1 border-2 border-black font-bold text-sm uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

// --- Main App ---

export default function App() {
  const [vibe, setVibe] = useState('good');
  const [isChaos, setIsChaos] = useState(false);
  const [isAscii, setIsAscii] = useState(false);
  const [githubData, setGithubData] = useState<any>(null);

  useEffect(() => {
    if (DATA.githubUsername) {
      fetch(`https://api.github.com/users/${DATA.githubUsername}`)
        .then(res => res.json())
        .then(data => setGithubData(data))
        .catch(err => console.error("GitHub fetch failed", err));
    }
  }, []);

  useEffect(() => {
    document.body.className = `vibe-${vibe} ${isChaos ? 'chaos-mode' : ''} ${isAscii ? 'ascii-mode' : ''}`;
  }, [vibe, isChaos, isAscii]);

  const ASCII_NAME = `
 __     __     _     ____  _   _ ___ _  __    _    
 \\ \\   / /    / \\   / ___|| | | |_ _| |/ /   / \\   
  \\ \\ / /    / _ \\  \\___ \\| |_| || || ' /   / _ \\  
   \\ V /    / ___ \\  ___) |  _  || || . \\  / ___ \\ 
    |_|    /_/   \\_\\|____/|_| |_|___|_|\\_\\/_/   \\_\\
  `;

  return (
    <div className={`min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black overflow-x-hidden vibe-${vibe} ${isChaos ? 'animate-pulse' : ''} ${isAscii ? 'font-mono' : ''}`}>
      
      {/* Header */}
      <header className="p-6 border-b-4 border-black flex justify-between items-center sticky top-0 bg-background z-50">
        <h1 className="text-3xl font-black tracking-tighter uppercase">{DATA.name}.EXE</h1>
        <div className="flex gap-4">
          <a href={`https://github.com/${DATA.githubUsername}`} target="_blank" rel="noreferrer" className="p-2 border-2 border-black brutal-shadow-hover bg-primary"><Github size={24} /></a>
          <a href={DATA.linkedinUrl} target="_blank" rel="noreferrer" className="p-2 border-2 border-black brutal-shadow-hover bg-white"><Linkedin size={24} /></a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative p-6 md:p-20 border-b-4 border-black overflow-hidden">
        {/* GitHub Profile Sticker */}
        {githubData && githubData.login && (
          <Sticker isChaos={isChaos} className="top-20 right-10 md:right-20 w-48" rotate={-5}>
            {isAscii ? (
              <pre className="text-[6px] leading-[4px] font-bold overflow-hidden">
                {`
      .---.
     /     \\
    | () () |
     \\  ^  /
      |||||
      |||||
                `}
              </pre>
            ) : (
              <img 
                src={githubData.avatar_url} 
                alt="GitHub Profile" 
                className="w-full aspect-square border-4 border-black mb-2 object-cover bg-zinc-100"
                referrerPolicy="no-referrer"
              />
            )}
            <p className="font-black text-xs uppercase tracking-tighter">@{githubData.login}</p>
            <p className="text-[10px] font-bold opacity-60 leading-tight">{githubData.bio || "No bio available"}</p>
          </Sticker>
        )}

        <Sticker isChaos={isChaos} className="top-10 left-1/2 md:left-2/3" rotate={12}>
          <p className="font-black text-xl">{isAscii ? "[ VIBE: 100 ]" : "VIBE CHECK: PASSED ✅"}</p>
        </Sticker>
        
        <Sticker isChaos={isChaos} className="bottom-20 left-10 hidden md:block" rotate={-8}>
          <div className="flex gap-2">
            <Ghost fill="black" /> <Ghost fill="black" /> <Ghost fill="black" />
          </div>
        </Sticker>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          {isAscii ? (
            <pre className="text-[1.5vw] font-black leading-none mb-10 text-primary bg-black p-4 border-4 border-black inline-block">
              {ASCII_NAME}
            </pre>
          ) : (
            <h2 className="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter mb-10">
              {DATA.tagline.split(' ').map((word, i) => (
                <span key={i} className={word === 'COOL' || word === 'SH*T' ? 'bg-primary px-4 border-4 border-black mr-4 inline-block' : 'mr-4 inline-block'}>
                  {word}
                </span>
              ))}
            </h2>
          )}
          <p className="text-2xl md:text-4xl font-bold max-w-3xl leading-tight mb-12">
            {isAscii ? DATA.description.toUpperCase().replace(/ /g, "_") : DATA.description}
          </p>
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-black text-white text-3xl font-black uppercase px-12 py-6 border-4 border-black brutal-shadow-hover brutal-shadow-active cursor-pointer"
            >
              Let's Talk
            </button>
            <a 
              href={DATA.resumeUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-primary text-black text-3xl font-black uppercase px-12 py-6 border-4 border-black brutal-shadow-hover brutal-shadow-active"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </section>

      <Marquee text={`Currently vibing in ${DATA.location}`} />

      {/* Projects */}
      <section className="p-6 md:p-20 border-b-4 border-black bg-primary/10">
        <h2 className="text-6xl font-black uppercase mb-12 tracking-tighter italic">My W's (Projects)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {DATA.projects.map((project, idx) => (
            <ProjectBox key={idx} {...project} />
          ))}
          <div className="border-4 border-black border-dashed flex items-center justify-center p-10">
            <p className="text-2xl font-black uppercase opacity-30">More coming soon...</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="p-6 md:p-20 border-b-4 border-black flex flex-col md:flex-row gap-20">
        <div className="flex-1">
          <h2 className="text-6xl font-black uppercase mb-8 tracking-tighter">My Toolkit</h2>
          <div className="flex flex-wrap gap-4">
            {DATA.skills.map(skill => (
              <span key={skill} className="text-3xl font-bold border-4 border-black px-6 py-2 brutal-shadow bg-white hover:bg-primary transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-black text-white p-10 border-4 border-black brutal-shadow">
          <h3 className="text-4xl font-black uppercase mb-6">Current Vibe</h3>
          <div className="flex gap-6 mb-8">
            <button 
              onClick={() => setVibe('good')}
              className={`p-4 border-4 border-white ${vibe === 'good' ? 'bg-primary text-black' : 'bg-transparent'}`}
            >
              <Smile size={48} />
            </button>
            <button 
              onClick={() => setVibe('meh')}
              className={`p-4 border-4 border-white ${vibe === 'meh' ? 'bg-primary text-black' : 'bg-transparent'}`}
            >
              <Meh size={48} />
            </button>
            <button 
              onClick={() => setVibe('bad')}
              className={`p-4 border-4 border-white ${vibe === 'bad' ? 'bg-primary text-black' : 'bg-transparent'}`}
            >
              <Frown size={48} />
            </button>
          </div>
          <p className="text-2xl font-bold italic mb-8">
            {vibe === 'good' && "Feeling like a main character today."}
            {vibe === 'meh' && "Just grinding through the simulation."}
            {vibe === 'bad' && "Error 404: Motivation not found."}
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => setIsChaos(!isChaos)}
              className={`flex-1 py-4 border-4 border-white font-black uppercase tracking-widest transition-all ${isChaos ? 'bg-red-500 text-white animate-bounce' : 'bg-white text-black hover:bg-primary hover:text-black'}`}
            >
              {isChaos ? 'STOP CHAOS' : 'CHAOS MODE'}
            </button>
            <button 
              onClick={() => setIsAscii(!isAscii)}
              className={`flex-1 py-4 border-4 border-white font-black uppercase tracking-widest transition-all ${isAscii ? 'bg-primary text-black' : 'bg-white text-black hover:bg-primary hover:text-black'}`}
            >
              {isAscii ? 'EXIT ASCII' : 'ASCII MODE'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="p-20 bg-black text-white text-center relative overflow-hidden">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-10 relative z-10">
          SLIDE INTO <br /> MY DMs
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
          <a href={`mailto:${DATA.email}`} className="text-3xl font-black border-4 border-white px-10 py-4 hover:bg-primary hover:text-black transition-colors">
            EMAIL ME
          </a>
          <a href={`https://github.com/${DATA.githubUsername}`} target="_blank" rel="noreferrer" className="text-3xl font-black border-4 border-white px-10 py-4 hover:bg-white hover:text-black transition-colors">
            GITHUB
          </a>
        </div>
        <p className="mt-20 font-bold opacity-50 uppercase tracking-widest">
          No cookies. No tracking. Just vibes. © 2026
        </p>
      </footer>
    </div>
  );
}
