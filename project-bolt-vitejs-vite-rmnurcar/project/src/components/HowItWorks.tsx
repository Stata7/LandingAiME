import { MessageSquare, Sparkles, Send, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Draft Your Message',
    description:
      'Start with your message draft - whether it\'s an email, social media post, or business communication.',
  },
  {
    icon: Sparkles,
    title: 'AI Enhancement',
    description:
      'Our AI analyzes your content and suggests improvements for clarity, tone, and engagement.',
  },
  {
    icon: Send,
    title: 'Review & Customize',
    description:
      'Review AI suggestions and customize them to match your voice and preferences.',
  },
  {
    icon: CheckCircle,
    title: 'Send with Confidence',
    description:
      'Send your enhanced message, knowing it\'s been optimized for maximum impact.',
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark-lighter relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How <span className="brand-gradient">AiME</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your messages in four simple steps with our AI-powered
            platform.
          </p>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content bg-brand-dark p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <step.icon className="h-8 w-8 text-[#dd3952] mr-3" />
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="neon-button bg-[#dd3952] text-white px-8 py-3 rounded-full font-medium text-lg transition-all hover:opacity-90">
            Try It Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 