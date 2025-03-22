import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(221, 57, 82, 0.3) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your{' '}
            <span className="brand-gradient">Communication</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses already using AiME to enhance their
            messaging and connect with their audience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#dd3952] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:opacity-90 flex items-center justify-center">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent text-white border-2 border-[#dd3952] px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-[#dd3952]">
              Schedule a Demo
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#dd3952] mb-2">100K+</h3>
              <p className="text-gray-300">Active Users</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#dd3952] mb-2">40%</h3>
              <p className="text-gray-300">Engagement Increase</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#dd3952] mb-2">24/7</h3>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 