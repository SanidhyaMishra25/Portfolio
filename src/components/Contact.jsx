import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // Here you can add your email sending logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black flex flex-col items-center justify-start w-full pt-20">
      <section className="w-full flex flex-col items-center justify-center py-8 px-4 text-center animate-fadein relative z-10">
        <h1 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg text-center">
          <span className="text-red-600">Contact</span> Me
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          Want to work together or have a question? Fill out the form below and I'll get back to you soon!
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900/90 rounded-2xl shadow-2xl p-10 w-full max-w-lg flex flex-col gap-6 animate-fadein-up relative z-20"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="bg-black border-b-2 border-red-600 text-white py-3 px-4 focus:outline-none focus:border-white transition placeholder-gray-400 rounded-t-md text-lg shadow-inner hover:scale-105 focus:scale-105 duration-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="bg-black border-b-2 border-red-600 text-white py-3 px-4 focus:outline-none focus:border-white transition placeholder-gray-400 text-lg shadow-inner hover:scale-105 focus:scale-105 duration-200"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="bg-black border-b-2 border-red-600 text-white py-3 px-4 focus:outline-none focus:border-white transition placeholder-gray-400 resize-none min-h-[120px] text-lg shadow-inner hover:scale-105 focus:scale-105 duration-200"
            required
          />
          <button
            type="submit"
            className={`bg-red-600 text-white font-bold py-3 rounded-lg text-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300 ${submitted ? 'scale-110 bg-green-600' : ''}`}
          >
            {submitted ? 'Sent!' : 'Send Message'}
          </button>
          {submitted && (
            <p className="text-green-400 text-center mt-2 animate-fadein">Thank you! Your message has been sent.</p>
          )}
        </form>
      </section>
    </div>
  );
}

export default Contact;