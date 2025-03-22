import { MessageSquare, Sparkles, Zap, Target, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Smart Messaging',
    description:
      'AI-powered message enhancement that ensures your communication is clear, professional, and effective.',
  },
  {
    icon: Target,
    title: 'Targeted Outreach',
    description:
      'Reach the right audience with personalized messages that resonate with their interests and needs.',
  },
  {
    icon: Sparkles,
    title: 'Content Enhancement',
    description:
      'Automatically improve your message content with smart suggestions and real-time optimization.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Work together seamlessly with shared templates, message history, and team analytics.',
  },
  {
    icon: Zap,
    title: 'Instant Analysis',
    description:
      'Get real-time feedback on your messages with sentiment analysis and engagement predictions.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description:
      'Your data is protected with enterprise-grade security and end-to-end encryption.',
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powerful Features for{' '}
            <span className="brand-gradient">Better Communication</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your outreach with our comprehensive suite of AI-powered
            messaging tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-brand-dark-lighter p-6 rounded-2xl hover:bg-brand-dark-light transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-[#dd3952] mr-3" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 