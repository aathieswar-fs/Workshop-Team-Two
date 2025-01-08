const Skills = () => (
  // <section className="py-20 px-6 bg-gray-100">
  //   <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">My Skills</h2>
  //   <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  //     <div className="text-center">
  //       <h3 className="text-2xl font-semibold text-gray-800 mb-2">HTML</h3>
  //       <div className="h-1 w-24 bg-purple-600 mx-auto"></div>
  //     </div>
  //     <div className="text-center">
  //       <h3 className="text-2xl font-semibold text-gray-800 mb-2">CSS</h3>
  //       <div className="h-1 w-24 bg-purple-600 mx-auto"></div>
  //     </div>
  //     <div className="text-center">
  //       <h3 className="text-2xl font-semibold text-gray-800 mb-2">JavaScript</h3>
  //       <div className="h-1 w-24 bg-purple-600 mx-auto"></div>
  //     </div>
  //     <div className="text-center">
  //       <h3 className="text-2xl font-semibold text-gray-800 mb-2">React</h3>
  //       <div className="h-1 w-24 bg-purple-600 mx-auto"></div>
  //     </div>
  //   </div>
  // </section>
  <div className="h-screen flex justify-center items-center dark:bg-gray-800">
    <div className="max-w-xl mx-auto w-full">
      {/* To achieve the desired progress, you can update the 'stroke-dasharray' property. */}
      <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6">Skills</h4>

      {/* Web Design */}
      <div className="mb-7">
        <div className="flex justify-between py-1">
          <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
            Node Js
          </span>
          <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
            80%
          </span>
        </div>
        <svg
          className="rc-progress-line"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path
            className="rc-progress-line-trail"
            d="M 0.5,0.5 L 99.5,0.5"
            strokeLinecap="round"
            stroke="#D9D9D9"
            strokeWidth="1"
            fillOpacity="0"
          />
          <path
            className="rc-progress-line-path"
            d="M 0.5,0.5 L 99.5,0.5"
            strokeLinecap="round"
            stroke="#FF6464"
            strokeWidth="1"
            fillOpacity="0"
            style={{
              strokeDasharray: "79.2px, 100px",
              strokeDashoffset: "0px",
              transition:
                "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
            }}
          />
        </svg>
      </div>

      {/* Mobile App */}
      <div className="mb-7">
        <div className="flex justify-between py-1">
          <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
            React JS
          </span>
          <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
            95%
          </span>
        </div>
        <svg
          className="rc-progress-line"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path
            className="rc-progress-line-trail"
            d="M 0.5,0.5 L 99.5,0.5"
            strokeLinecap="round"
            stroke="#D9D9D9"
            strokeWidth="1"
            fillOpacity="0"
          />
          <path
            className="rc-progress-line-path"
            d="M 0.5,0.5 L 99.5,0.5"
            strokeLinecap="round"
            stroke="#9272D4"
            strokeWidth="1"
            fillOpacity="0"
            style={{
              strokeDasharray: "94.05px, 100px",
              strokeDashoffset: "0px",
              transition:
                "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
            }}
          />
        </svg>
      </div>

      {/* Illustrator */}
      <div className="mb-7">
        <div className="flex justify-between py-1">
          <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
            Express Js
          </span>
          <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
            75%
          </span>
        </div>
        <svg
          className="rc-progress-line"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path
            className="rc-progress-line-trail"
            d="M 0.5,0.5 L 99.5,0.5"
            strokeLinecap="round"
            stroke="#D9D9D9"
            strokeWidth="1"
            fillOpacity="0"
          />
          <path
            className="rc-progress-line-path"
            d="M 0.5,0.5 L 99.5,0.5"
            strokeLinecap="round"
            stroke="#5185D4"
            strokeWidth="1"
            fillOpacity="0"
            style={{
              strokeDasharray: "75.35px, 100px",
              strokeDashoffset: "0px",
              transition:
                "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
            }}
          />
        </svg>
      </div>

      {/* Photoshop */}
      <div className="mb-7">
        <div className="flex justify-between py-1">
          <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
            Mongo DB
          </span>
          <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
            85%
          </span>
        </div>
        <svg
          className="rc-progress-line"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path
            className="rc-progress-line-trail"
            d="M 0.5,0.5 L 99.5,0.5"
            strokeLinecap="round"
            stroke="#D9D9D9"
            strokeWidth="1"
            fillOpacity="0"
          />
          <path
            className="rc-progress-line-path"
            d="M 0.5,0.5 L 99.5,0.5"
            strokeLinecap="round"
            stroke="#CA56F2"
            strokeWidth="1"
            fillOpacity="0"
            style={{
              strokeDasharray: "85.25px, 100px",
              strokeDashoffset: "0px",
              transition:
                "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
            }}
          />
        </svg>
      </div>
    </div>
  </div>
);


export default Skills;