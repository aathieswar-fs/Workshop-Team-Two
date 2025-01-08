import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [response, setResponse] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to API (this is just a mock)
    const res = await fetch('http://localhost:6000/submit', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await res.json();
    if (data.status === 'error') {
      // If there are errors, update the errors state
      setErrors(data.errors);
    } else {
      // If success, clear any previous errors and show success message
      setErrors({});
      setResponse(data);
    }
  };

  return (
    <section className="py-20 text-black bg-blue-200">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-8">
          Have questions or want to work together? Drop me a message!
        </p>
        <form
          className="bg-white rounded-xl shadow-md p-8 max-w-lg mx-auto text-gray-800"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
            />
            {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none  bg-white"
            />
            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
          </div>

          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
            />
            {errors.phone_number && (
              <div className="text-red-500 text-sm">{errors.phone_number}</div>
            )}
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              rows="5"
            />
            {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>

        {response && (
          <div className="mt-6 text-lg font-medium text-green-400">
            {response.message}
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
