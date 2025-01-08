const About = () => (
  // <section className="py-20 px-6 bg-gray-100 text-center">
  //   <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Me</h2>
  //   <p className="text-lg text-gray-600 max-w-3xl mx-auto">
  //     I'm a web developer with experience in building beautiful and functional websites. I love creating web applications that are user-friendly, scalable, and maintainable.
  //   </p>
  // </section>
  <section className="bg-blueGray-200 -mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
            <div className="px-4 flex-auto"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-16">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Crafting Seamless Web Experiences
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            I specialize in building intuitive and responsive websites that elevate user experiences. My approach combines design aesthetics with robust functionality to deliver exceptional digital solutions.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
            With expertise in modern web technologies, I create projects that are scalable, efficient, and tailored to your unique vision. Let’s bring your ideas to life with clean code and innovative design.
          </p>

        </div>
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg bg-pink-500">
            <img
              alt="..."
              src="/src/assets/kenny.jpg"
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block h-95-px -top-94-px"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-pink-500 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">
                Name Here
              </h4>
              {/* <p className="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes every winter and much of the
                sea-ice then thaws every summer, and that process will
                continue whatever happens.
              </p> */}
            </blockquote>
          </div>
        </div>
      </div>
    </div>


    {/* <footer className="relative pt-8 pb-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Made with{" "}
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
                rel="noreferrer"
              >
                Notus JS
              </a>{" "}
              by{" "}
              <a
                href="https://www.creative-tim.com"
                className="text-blueGray-500 hover:text-blueGray-800"
                target="_blank"
                rel="noreferrer"
              >
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer> */}
  </section>
);

export default About;