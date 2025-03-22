import { useEffect } from 'react';
import { MessageSquare, ChevronRight } from 'lucide-react';
import DynamicIsland from './components/DynamicIsland';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import CompanyStory from './components/CompanyStory';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Custom hook for parallax effect
const useParallax = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const elements = document.querySelectorAll('.parallax-element');
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      elements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || '0.05');
        const x = mouseX * speed * 100;
        const y = mouseY * speed * 100;
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
};

const SmoothScroll = () => {
  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('nav-link')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return null;
};

// Update the Hero component
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-[#dd3952]/20 via-transparent to-transparent opacity-70 parallax-element"
          data-speed="0.05"
        ></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto fade-in-element">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="hero-text">
            <span className="typing-animation">AiME</span>
          </span>
          <span className="block mt-2 brand-gradient">
            AI Message Enhancement
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Revolutionizing outreach one message at a time with intelligent,
          personalized communication.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="brand-gradient-border bg-[#dd3952] text-white px-8 py-3 rounded-full font-medium text-lg transition-all hover:opacity-90 flex items-center justify-center">
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </button>

          <button className="brand-gradient-border bg-transparent text-[#dd3952] px-8 py-3 rounded-full font-medium text-lg transition-all hover:bg-[#dd3952]/10">
            Learn More
          </button>
        </div>
      </div>

      <DynamicIsland />
    </section>
  );
};

// Update the App component
const App = () => {
  useParallax();

  return (
    <div className="min-h-screen bg-brand-dark text-white relative">
      <CustomCursor />
      <BackgroundEffects />
      <SmoothScroll />

      <header className="nav-fixed py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <MessageSquare className="h-8 w-8 brand-gradient mr-2" />
            <span className="text-xl font-bold brand-gradient">AiME</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="nav-link text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="nav-link text-gray-300 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#team"
              className="nav-link text-gray-300 hover:text-white transition-colors"
            >
              Team
            </a>
            <a
              href="#our-story"
              className="nav-link text-gray-300 hover:text-white transition-colors"
            >
              Our Story
            </a>
            <a
              href="#testimonials"
              className="nav-link text-gray-300 hover:text-white transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="nav-link text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-300 hover:text-white transition-colors">
              Log In
            </button>
            <button className="brand-gradient-border bg-[#dd3952] text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Team />
        <CompanyStory />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;