import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty and show error popup
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: 'Oops..',
        text: 'Please fill all the fields.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    // Show success alert
    Swal.fire({
      title: 'Congratulations!',
      text: 'Your form has been submitted successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        title: 'text-xl font-semibold',
        popup: 'bg-green-500 text-white p-6 rounded-lg',
      },
    }).then(() => {
      // Clear form fields after success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    });
  };

  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-lg">We'd love to hear from you! Please fill out the form below.</p>
        </div>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message here"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
