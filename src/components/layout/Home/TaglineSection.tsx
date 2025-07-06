import { FC } from "react";

export const TaglineSection: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Empowering Language Learners Worldwide
          </h2>
          <p className="text-lg text-gray-600">
            Our innovative approach combines cutting-edge technology with proven
            teaching methods to create an engaging and effective learning
            experience for students of all levels.
          </p>
        </div>
      </div>
    </section>
  );
};
