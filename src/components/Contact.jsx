import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to API (this is just a mock)
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <section className="py-20 bg-blue-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <form className="mt-8" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 mt-2 rounded bg-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 mt-2 rounded bg-gray-700"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (Optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 mt-2 rounded bg-gray-700"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 mt-2 rounded bg-gray-700"
          />
          <button type="submit" className="bg-blue-600 text-white p-4 rounded mt-4">Submit</button>
        </form>

        {response && <div className="mt-4 text-xl">{response.message}</div>}
      </div>
    </section>
  );
}

export default ContactForm;
