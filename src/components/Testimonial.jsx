const Testimonials = () => (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
      <h2 className="text-4xl font-semibold text-center mb-10">What People Are Saying</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xs mx-auto">
          <p className="text-lg mb-4">"Amazing work! The website exceeded all expectations."</p>
          <p className="font-semibold">John Doe</p>
          <p className="text-gray-500">CEO, Company Name</p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xs mx-auto">
          <p className="text-lg mb-4">"A truly talented developer, delivered the project on time and with great quality."</p>
          <p className="font-semibold">Jane Smith</p>
          <p className="text-gray-500">Product Manager, Company Name</p>
        </div>
      </div>
    </section>
  );
  