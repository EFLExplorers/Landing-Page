import { FC } from "react";

export const LearningToolsSection: FC = () => {
  const tools = [
    {
      title: "Interactive Lessons",
      description:
        "Engage with dynamic content designed to make learning fun and effective",
      icon: "📚",
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor your improvement with detailed analytics and feedback",
      icon: "📊",
    },
    {
      title: "Practice Exercises",
      description: "Reinforce your learning with targeted practice activities",
      icon: "✍️",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Learning Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {tool.title}
              </h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
