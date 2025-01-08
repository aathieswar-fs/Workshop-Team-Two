const Skills = () => (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">My Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">HTML</h3>
          <div className="h-1 w-24 bg-purple-600 mx-auto"></div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">CSS</h3>
          <div className="h-1 w-24 bg-purple-600 mx-auto"></div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">JavaScript</h3>
          <div className="h-1 w-24 bg-purple-600 mx-auto"></div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">React</h3>
          <div className="h-1 w-24 bg-purple-600 mx-auto"></div>
        </div>
      </div>
    </section>
  );
  

export default Skills;