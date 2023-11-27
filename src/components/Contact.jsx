import './Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ContactContainer } from './ContactContainer';
import { useMediaQuery } from '@mui/material';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "shruti",
        "template_xphqptr",
        form.current,
        "iAdiOEoqkxyx2ta-0"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent successfully");
          alert("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          console.error("Error sending message");
          alert("Oops! Some error occurred.");
        }
      );
  };

  const isSmallScreen = useMediaQuery('(max-width:900px)');

  return (
    <>
      <div className={`pb-[20px] pt-[30px] px-[20px] md:px-[140px] contact-container rounded-lg overflow-hidden ${isSmallScreen ? 'px-4' : ''}`}>
        {isSmallScreen ? (
          <div className="flex flex-col justify-center form-contact rounded-xl">
            <form className="w-full py-6 px-2" onSubmit={handleSubmit} ref={form}>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md bg-blue-200"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md bg-blue-200"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 p-2 w-full border rounded-md bg-blue-200"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 px-2 py-8 w-full border rounded-md bg-blue-200"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="border rounded-3xl h-10 px-12 mt-1 bg-slate-200 shadow-inner text-[15px]"
              >
                Send Message
              </button>
            </form>
            <div className="mt-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.614522076677!2d-122.41941648467773!3d37.774929979751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807aacc769a5%3A0x539d205a43e1354e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1637665982316!5m2!1sen!2sus"
                width="100%"
                height="300px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ) : (
          <div className="flex justify-center py-8 form-contact rounded-xl">
            <form className="w-3/5 py-6 px-16" onSubmit={handleSubmit} ref={form}>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="mb-4 flex justify-between mt-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full border rounded-md bg-blue-200"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md bg-blue-200"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4 mt-7">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 p-2 w-full border rounded-md bg-blue-200"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 mt-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 px-2 py-8 w-full border rounded-md bg-blue-200"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="border rounded-3xl h-10 px-12 mt-1 bg-slate-200 shadow-inner text-[15px]"
              >
                Send Message
              </button>
            </form>
            <div className="w-2/5 ml-16">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.614522076677!2d-122.41941648467773!3d37.774929979751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807aacc769a5%3A0x539d205a43e1354e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1637665982316!5m2!1sen!2sus"
                width="120%"
                height="580"
                style={{ border: 0, marginLeft: "-10%" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className='bottom'>
          <ContactContainer data={formData} />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
