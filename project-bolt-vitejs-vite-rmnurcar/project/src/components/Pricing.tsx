import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for individuals and small teams',
    features: [
      'Up to 100 enhanced messages per month',
      'Basic AI suggestions',
      'Email support',
      'Basic analytics',
      'Single user',
    ],
  },
  {
    name: 'Professional',
    price: '79',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 1,000 enhanced messages per month',
      'Advanced AI suggestions',
      'Priority email support',
      'Advanced analytics',
      'Up to 5 team members',
      'Custom templates',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'For large organizations',
    features: [
      'Unlimited enhanced messages',
      'Premium AI suggestions',
      '24/7 dedicated support',
      'Enterprise analytics',
      'Unlimited team members',
      'Custom templates',
      'API access',
      'Custom integrations',
      'SLA guarantee',
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark-lighter relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent <span className="brand-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-brand-dark rounded-2xl p-8 ${
                plan.popular
                  ? 'transform scale-105 shadow-xl border-2 border-[#dd3952]'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#dd3952] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-[#dd3952] mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <button
                  className={`w-full py-3 px-6 rounded-full font-medium transition-all ${
                    plan.popular
                      ? 'bg-[#dd3952] text-white hover:opacity-90'
                      : 'bg-transparent text-[#dd3952] border-2 border-[#dd3952] hover:bg-[#dd3952] hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Need a custom plan? Contact our sales team.
          </p>
          <a
            href="#"
            className="text-[#dd3952] hover:text-[#fcb13b] transition-colors font-medium"
          >
            Contact Sales →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 