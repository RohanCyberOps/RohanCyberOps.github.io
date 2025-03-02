import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix rain effect
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0a84ff';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900/90"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          <span className="block">Securing the Digital Frontier</span>
          <span className="block mt-2 text-blue-400 glitch-text">One Byte at a Time</span>
        </h1>
        
        <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto text-gray-300 typewriter-text">
          Cybersecurity Expert | Ethical Hacker | IT Consultant
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
          >
            View Projects
            <ChevronRight className="ml-2 -mr-1 inline-block h-5 w-5" />
          </a>
          
          <a 
            href="#contact" 
            className="px-8 py-3 border border-blue-500 text-base font-medium rounded-md text-blue-400 hover:text-white hover:bg-blue-500/20 md:text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;