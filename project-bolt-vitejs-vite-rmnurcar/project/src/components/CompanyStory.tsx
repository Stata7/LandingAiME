import { Lightbulb, Rocket, Award, Users, Target, Star } from 'lucide-react';

const milestones = [
  {
    year: '2021',
    icon: Lightbulb,
    title: 'The Idea',
    description:
      'AiME was born from a vision to revolutionize how businesses communicate with their audience.',
  },
  {
    year: '2022',
    icon: Rocket,
    title: 'Launch',
    description:
      'We launched our beta version, helping early adopters enhance their messaging.',
  },
  {
    year: '2022',
    icon: Award,
    title: 'Recognition',
    description:
      'Named "Most Innovative AI Communication Tool" by Tech Innovators Magazine.',
  },
  {
    year: '2023',
    icon: Users,
    title: 'Growing Community',
    description:
      'Reached 100,000 active users and expanded our team to better serve our community.',
  },
  {
    year: '2023',
    icon: Target,
    title: 'Enterprise Solutions',
    description:
      'Launched enterprise-grade features for large-scale business communications.',
  },
  {
    year: '2024',
    icon: Star,
    title: 'Global Impact',
    description:
      'Helping businesses worldwide transform their communication strategies.',
  },
];

const CompanyStory = () => {
  return (
    <section
      id="our-story"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark-lighter relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="brand-gradient">Story</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From idea to innovation: The journey of transforming business
            communication.
          </p>
        </div>

        <div className="relative">
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-container ${
                  index % 2 === 0 ? 'left' : 'right'
                }`}
              >
                <div className="timeline-content">
                  <div className="flex items-center mb-4">
                    <milestone.icon className="h-8 w-8 text-[#dd3952] mr-3" />
                    <div>
                      <span className="text-sm text-[#dd3952] font-medium">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-8">
            Join us in shaping the future of business communication.
          </p>
          <button className="neon-button bg-[#dd3952] text-white px-8 py-3 rounded-full font-medium text-lg transition-all hover:opacity-90">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory; 