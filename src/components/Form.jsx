import React, { useRef } from 'react';
import images from '../assets/images';
import '../styles/animation.css'; 


const Form = () => {
  // Use useRef to access the DOM elements (input values) directly
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const serviceRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      service: serviceRef.current.value,
      message: messageRef.current.value,
    };

    console.log('Strict Uncontrolled Form Data:', formData);

    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields (Name and Email).');
      return;
    }

    alert('Form submission simulated. Check console for data.');
  };

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* --- Background Image Block --- */}
   <div>
     <img
  src={images.footerBack}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover"
/>
   </div>

      {/* --- Form Content --- */}
      <div className="relative z-1 max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-[#cecccc] uppercase mb-2">CONTACTS</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#919191] leading-tight">
            Let's work in your <br />
          </h1>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Your Name 
              </label>
              <input
                type="text"
                name="name"
                id="name"
                ref={nameRef}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 border text-white border-gray-300 rounded-md focus:ring-black focus:border-black transition duration-150 ease-in-out placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 border text-white border-gray-300 rounded-md focus:ring-black focus:border-black transition duration-150 ease-in-out placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                ref={subjectRef}
                placeholder="Subject"
                className="w-full px-4 py-3 border text-white border-gray-300 rounded-md focus:ring-black focus:border-black transition duration-150 ease-in-out placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                Service Desired
              </label>
              <div className="relative">
                <select
                  name="service"
                  id="service"
                  ref={serviceRef}
                  defaultValue="Web Design"
                  className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black transition duration-150 ease-in-out bg-white pr-10"
                >
                  <option value="Web Design">Web Design</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="SEO">SEO</option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="Other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              ref={messageRef}
              placeholder="Enter your message"
              className="w-full px-4 py-3 border text-white border-gray-300 rounded-md focus:ring-black focus:border-black transition duration-150 ease-in-out placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4">
            <div className="text-xs text-[#c9c9c9] mb-4 sm:mb-0">
              <p className="flex items-center">
                <span className="mr-1 text-white leading-none">ⓘ</span>
                All the fields are required. By sending the form you agree to the{' '}
                <a href="#" className="underline hover:text-gray-700">Terms & Conditions</a> and{' '}
                <a href="#" className="underline hover:text-gray-700">Privacy Policy</a>
              </p>
            </div>
        <button
  type="submit"
  className="relative w-full sm:w-auto px-12 py-3 text-black font-semibold text-sm tracking-wider uppercase rounded-sm overflow-hidden continuous-border"
>
  SEND MESSAGE
</button>



          </div>
        </form>

        {/* Contact Info Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start text-left space-y-8 sm:space-y-0 p-6">
  <div className="flex flex-col items-start w-full sm:w-1/3">
    <div className="p-3 bg-[#969b98] rounded-full mb-3">
      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
    </div>
    <p className="text-sm font-medium uppercase tracking-wider text-[#c9c9c9] mb-1">ADDRESS</p>
    <p className="text-sm text-[#c9c9c9]">123 King Street, London W50 10250</p>
    <p className="text-sm text-[#c9c9c9]">United Kingdom</p>
  </div>

  <div className="flex flex-col items-start w-full sm:w-1/3">
    <div className="p-3 bg-[#969b98] rounded-full mb-3">
      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
      </svg>
    </div>
    <p className="text-sm font-medium uppercase tracking-wider text-[#c9c9c9] mb-1">EMAIL</p>
    <p className="text-sm text-[#c9c9c9]">support@example.com</p>
  </div>

  <div className="flex flex-col items-start w-full sm:w-1/3">
    <div className="p-3 bg-[#969b98] rounded-full mb-3">
      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.744 4.167A1 1 0 018.81 9.07l-2.27 2.27a8.557 8.557 0 006.11 6.11l2.27-2.27a1 1 0 011.117-.11l4.167.744a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
      </svg>
    </div>
    <p className="text-sm font-medium uppercase tracking-wider text-[#c9c9c9] mb-1">PHONE</p>
    <p className="text-sm text-[#c9c9c9]">+61 383 767 284</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Form;
