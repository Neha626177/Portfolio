import React, { useRef } from 'react';
import contactImg from '../assets/contact.gif';
import emailjs from '@emailjs/browser';
import headImg from '../assets/rb_49051.png'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_59b3m6q', // Service ID
        'template_verzs48', // Template ID
        form.current, // Form reference
        '5qgPUCWsILSSLGpwB' // Public Key
      )
      .then(
        () => {
          
          console.log('SUCCESS! Message sent successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="my-[80px] w-11/12 mx-auto px-4 md:px-12" id="contact">
      {/* Heading */}
      <div className="flex items-center justify-center relative">
        <img src={headImg} alt="" className='w-[150px] h-[130px] pb-2' data-aos="fade-down"/>
        <h2 className="sm:text-[1.7rem] text-[2.5rem] md:text-[3rem]  xl:text-[50px] font-bold text-center mt-4">
          Get in <span className="text-purple-600 ">Touch</span>
        </h2>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-[50px] gap-12">
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4  shadow-md p-6 rounded-lg"
          >
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="from_name"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="from_email"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none"
                placeholder="Write your message"
                rows="5"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-400 mt- p-2 px-6 rounded-md transition-all ease-in-out hover:scale-110 text-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={contactImg}
            alt="Contact Us"
            className="rounded-lg object-cover shadow-md w-full max-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
