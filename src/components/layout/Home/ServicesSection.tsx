import { FC } from "react";

export const ServicesSection: FC = () => {
  const services = [
    {
      title: "Personalized Learning",
      description: "Customized learning paths tailored to your goals and pace",
      features: [
        "Adaptive content",
        "Individual feedback",
        "Flexible scheduling",
      ],
    },
    {
      title: "Group Classes",
      description:
        "Learn and practice with peers in an interactive environment",
      features: [
        "Small group sizes",
        "Real-time interaction",
        "Cultural exchange",
      ],
    },
    {
      title: "One-on-One Tutoring",
      description: "Get dedicated attention from experienced instructors",
      features: [
        "Personalized attention",
        "Custom curriculum",
        "Flexible scheduling",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
