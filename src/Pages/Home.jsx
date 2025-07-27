import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50">
      <main className="flex-grow px-4 py-10 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-4">
            Welcome to SkillServe
          </h1>
          <p className="text-lg text-gray-600">
            Discover, connect, and collaborate with verified professionals for your every need.
          </p>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">Explore Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              'Wedding Planners',
              'Home Renovation',
              'Agriculture Experts',
              'Electricians',
              'Plumbers',
              'Event Management',
              'Interior Designers',
              'Tutors & Coaches',
              'Freelance Developers',
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition duration-200"
              >
                <h3 className="text-xl font-medium text-blue-500 mb-2">{category}</h3>
                <p className="text-sm text-gray-500">
                  Find skilled and verified professionals for {category.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                title: '1. Post a Request',
                desc: 'Tell us what service you’re looking for.',
              },
              {
                title: '2. Get Offers',
                desc: 'Professionals respond with quotes and ratings.',
              },
              {
                title: '3. Hire Easily',
                desc: 'Compare offers and hire the right professional.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-4">Join SkillServe and connect with experts today.</p>
          <a
            href="/register"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register Now
          </a>
        </section>
      </main>

      {/* Optional Footer */}
      <footer className="text-center py-4 text-sm text-gray-500 bg-white shadow-inner">
        © {new Date().getFullYear()} SkillServe. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
