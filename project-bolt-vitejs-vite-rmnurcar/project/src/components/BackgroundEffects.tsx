import { useEffect } from 'react';

const BackgroundEffects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const stars = document.getElementById('stars');
      if (stars) {
        stars.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="stars-container">
      <div id="stars" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(221, 57, 82, 0.1) 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(252, 179, 59, 0.1) 0%, transparent 40%)',
        }}
      />
    </div>
  );
};

export default BackgroundEffects; 