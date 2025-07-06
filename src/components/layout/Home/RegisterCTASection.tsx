import { FC } from "react";

export const RegisterCTASection: FC = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Start Your Language Learning Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful learners who have transformed their
            English skills with EFL Explorers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Create Free Account
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Demo
            </button>
          </div>
          <p className="mt-6 text-blue-100">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
