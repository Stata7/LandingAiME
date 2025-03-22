import { Linkedin, Twitter, Globe } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    bio: 'Visionary leader with 15+ years in AI and communication technology.',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#',
    },
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
    bio: 'AI expert with a passion for creating innovative solutions.',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3',
    bio: 'Product strategist focused on user-centric design and innovation.',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#',
    },
  },
  {
    name: 'David Kim',
    role: 'Lead Engineer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3',
    bio: 'Full-stack developer with expertise in AI and machine learning.',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#',
    },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meet Our <span className="brand-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate experts dedicated to revolutionizing business communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card bg-brand-dark-lighter rounded-2xl p-6 text-center"
            >
              <div className="team-avatar mb-6 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="avatar-glow" />
              </div>

              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-[#dd3952] font-medium mb-3">{member.role}</p>
              <p className="text-gray-300 text-sm mb-4">{member.bio}</p>

              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-[#dd3952] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-[#dd3952] transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={member.social.website}
                  className="text-gray-400 hover:text-[#dd3952] transition-colors"
                >
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 