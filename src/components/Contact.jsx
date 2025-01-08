const ContactForm = () => (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">Contact Me</h2>
      <form className="max-w-xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800 mb-2">Full Name</label>
          <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 mb-2">Email Address</label>
          <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-800 mb-2">Message</label>
          <textarea id="message" className="w-full p-3 border border-gray-300 rounded-lg" required rows="4"></textarea>
        </div>
        <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-500 w-full">Send Message</button>
      </form>
    </section>
  );
  
export default ContactForm;