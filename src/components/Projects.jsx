const Projects = () => (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project 1</h3>
          <p className="text-gray-600">Description of your first project. A web app built with React and Tailwind CSS.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project 2</h3>
          <p className="text-gray-600">Description of your second project. A responsive portfolio built using React.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project 3</h3>
          <p className="text-gray-600">Description of your third project. A full-stack app with backend integration.</p>
        </div>
      </div>
    </section>
  );
  