import { useState, useEffect } from 'react';
import { MessageSquare, Sparkles, Zap } from 'lucide-react';

const DynamicIsland = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: MessageSquare,
      title: 'Smart Messaging',
      description: 'AI-powered message enhancement',
    },
    {
      icon: Sparkles,
      title: 'Personalization',
      description: 'Tailored to each recipient',
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Real-time message optimization',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`dynamic-island rounded-3xl mt-12 cursor-pointer transition-all duration-500 ease-out ${
        expanded ? 'w-96 h-48' : 'w-64 h-16'
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="island-content h-full p-4">
        <div className="flex items-center justify-center h-full">
          {expanded ? (
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 brand-gradient">
                {features[currentFeature].title}
              </h3>
              <p className="text-gray-300">
                {features[currentFeature].description}
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentFeature
                        ? 'bg-[#dd3952]'
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              {features.map(({ icon: Icon }, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentFeature
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-0'
                  }`}
                  style={{
                    position: index === currentFeature ? 'relative' : 'absolute',
                  }}
                >
                  <Icon
                    className="h-6 w-6 text-[#dd3952]"
                    strokeWidth={2.5}
                  />
                </div>
              ))}
              <span className="text-sm font-medium text-gray-300 ml-2">
                {features[currentFeature].title}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicIsland; 