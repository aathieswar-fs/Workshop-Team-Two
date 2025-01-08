function Projects() {
    return (
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">My Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-4 rounded">
              <h3 className="text-xl">Project 1</h3>
              <p>Short description of project 1.</p>
            </div>
            <div className="bg-blue-700 p-4 rounded">
              <h3 className="text-xl">Project 2</h3>
              <p>Short description of project 2.</p>
            </div>
            <div className="bg-blue-700 p-4 rounded">
              <h3 className="text-xl">Project 3</h3>
              <p>Short description of project 3.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  