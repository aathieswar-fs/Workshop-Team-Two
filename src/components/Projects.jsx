const Projects = () => (
  // <section className="py-20 px-6 bg-white">
  //   <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">My Projects</h2>
  //   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  //     <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
  //       <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project 1</h3>
  //       <p className="text-gray-600">Description of your first project. A web app built with React and Tailwind CSS.</p>
  //     </div>
  //     <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
  //       <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project 2</h3>
  //       <p className="text-gray-600">Description of your second project. A responsive portfolio built using React.</p>
  //     </div>
  //     <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
  //       <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project 3</h3>
  //       <p className="text-gray-600">Description of your third project. A full-stack app with backend integration.</p>
  //     </div>
  //   </div>
  // </section>
  <section className="bg-white">
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-2xl font-semibold text-center text-black capitalize lg:text-3xl">My
        Projects</h1>

      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
        <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')" }}>
          <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Event Management System</h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">Event Manager</p>
          </div>
        </div>

        <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')" }}>
          <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Modern E-Commerce Platform</h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">E-Commerce</p>
          </div>
        </div>

        <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
          <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Real-Time Chat Application</h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">Chat App</p>
          </div>
        </div>

        <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
          <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Personal Finance Tracker</h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">Finance App</p>
          </div>
        </div>
      </div>
    </div>
  </section>

);

export default Projects;
