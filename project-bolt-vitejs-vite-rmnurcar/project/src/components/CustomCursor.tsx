import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Handle cursor behavior over clickable elements
    const handleLinkHover = () => {
      const cursor = document.querySelector('.cursor-dot');
      const outline = document.querySelector('.cursor-outline');
      cursor?.classList.add('cursor-hidden');
      outline?.classList.add('cursor-hidden');
    };

    const handleLinkLeave = () => {
      const cursor = document.querySelector('.cursor-dot');
      const outline = document.querySelector('.cursor-outline');
      cursor?.classList.remove('cursor-hidden');
      outline?.classList.remove('cursor-hidden');
    };

    const clickables = document.querySelectorAll(
      'a, button, input, textarea, [role="button"]'
    );

    clickables.forEach((elem) => {
      elem.addEventListener('mouseenter', handleLinkHover);
      elem.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      clickables.forEach((elem) => {
        elem.removeEventListener('mouseenter', handleLinkHover);
        elem.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'} ${
          clicked ? 'scale-50' : 'scale-100'
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div
        className={`cursor-outline ${hidden ? 'opacity-0' : 'opacity-100'} ${
          clicked ? 'scale-150' : 'scale-100'
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor; 