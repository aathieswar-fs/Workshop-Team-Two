const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophia Jackson",
      role: "UI/UX Designer",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      feedback:
        "Working with this developer has been a game-changer for our projects. Their attention to detail and innovative approach transformed our vision into reality.",
    },
    {
      name: "Ethan Martinez",
      role: "Full Stack Developer",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      feedback:
        "An exceptional problem solver who consistently delivers high-quality work. Their expertise in MERN stack is truly impressive.",
    },
    {
      name: "Olivia Brown",
      role: "Project Manager",
      img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      feedback:
        "Reliable, creative, and a true team player. This developer has been instrumental in meeting our tight deadlines while exceeding expectations.",
    },
    {
      name: "Liam Johnson",
      role: "Software Architect",
      img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      feedback:
        "Their expertise in Next.js and attention to scalable solutions make them an invaluable asset to any development team.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="w-full text-center pb-8">
        <svg
          className="mx-auto"
          width="48"
          height="42"
          viewBox="0 0 48 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="..."
            fill="#2865E9"
          />
          <path
            d="..."
            fill="#2865E9"
          />
        </svg>

        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white pb-2">
          What People Say About Me
        </h1>
        <p className="text-gray-400 font-normal text-base">
          Here's what my clients have to say about their experience working with me.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-6 mb-4">
              <img
                className="h-28 w-28 object-cover object-center rounded-full"
                src={testimonial.img}
                alt={`${testimonial.name}'s photo`}
              />
              <div>
                <p className="text-xl text-gray-700 font-semibold">{testimonial.name}</p>
                <p className="text-base text-blue-600 font-medium">{testimonial.role}</p>
              </div>
            </div>
            <div>
              <p className="text-gray-500 leading-loose font-normal text-base">
                {testimonial.feedback}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

  )
};

export default Testimonials;