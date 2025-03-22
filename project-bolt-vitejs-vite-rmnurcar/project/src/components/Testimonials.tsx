import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer Smith',
    role: 'Marketing Director',
    company: 'TechCorp Inc.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3',
    quote:
      'AiME has transformed how we communicate with our clients. The AI suggestions are spot-on and have significantly improved our response rates.',
  },
  {
    name: 'Robert Chen',
    role: 'Sales Manager',
    company: 'Global Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
    quote:
      'The personalization capabilities are incredible. Our sales team has seen a 40% increase in engagement since implementing AiME.',
  },
  {
    name: 'Maria Garcia',
    role: 'Content Strategist',
    company: 'Creative Minds',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3',
    quote:
      'As a content creator, AiME helps me maintain consistency while ensuring each message resonates with our diverse audience.',
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our <span className="brand-gradient">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real stories from businesses that have transformed their communication
            with AiME.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-brand-dark-lighter rounded-2xl p-8 relative transform hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="absolute text-[#dd3952] opacity-10 h-16 w-16 -top-2 -left-2" />
              <p className="text-gray-300 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="text-[#dd3952] hover:text-[#fcb13b] transition-colors font-medium"
          >
            Read More Success Stories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 