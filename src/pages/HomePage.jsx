// HomePage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import images from '../assets/images';
import Navbar from '../components/Navbar';
import Form from "../components/Form";
import { projects, scrollingTexts, services } from './data';
import { ArrowRight } from 'lucide-react';
import dummy from '../assets/home/dummy.webp';
import video from '../assets/home/video.mp4';
import Particles from '../components/Particles.jsx';
import ScrollLeft from '../components/ScrollLeft';
// import ProfileCard from '../components/ProfileCard.jsx'




const PROFILE_IMAGE_URL = (id) => `https://i.pravatar.cc/50?img=${id}`;


const HomePage = () => {
  const categories = ["All", "Web Designing", "Web Dev"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (category) => {
    setActiveFilter(category);

    if (category === "All") {
      setFilteredProjects([...projects]); // ensure new array
    } else {
      setFilteredProjects(
        projects.filter((p) => p.category.toLowerCase() === category.toLowerCase())
      );
    }
  };

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay between child animations
      },
    },
  };

  return (
    <>
      <Navbar />
    
      <div className="bg-white w-full z-0">
{/* <div className="absolute top-[50%] bg-white right-6 transform -translate-y-1/2 w-96 h-[500px] z-20 pointer-events-auto">
  <ProfileCard  className="bg-white"/>
</div> */}
        {/* Hero Section */}
       
        <div className="min-h-screen p-4 sm:p-8 lg:p-12  text-neutral-900 font-sans mt-50">
         
          <div className="max-w-7xl mx-auto">

            {/* --- Header Section --- */}
            <header className="flex flex-col md:flex-row justify-between items-start mb-16 lg:mb-24">

              {/* Main Title and Subtitle */}
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl tracking-tighter">
                Turning Code <br className="hidden sm:inline" />
                <span className="inline-flex items-center">
                  <span className="text-8xl font-light leading-none mr-4 transform -translate-y-1.5">+</span>
                  Into Magic
                </span>
              </h1>

              {/* Trusted By Badge */}
              <div className="mt-8 md:mt-0 md:text-right flex flex-col items-start md:items-end">
                <div className="flex -space-x-2 mb-2">
                  <img
                    src={PROFILE_IMAGE_URL(1)}
                    alt="Customer 1"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={PROFILE_IMAGE_URL(2)}
                    alt="Customer 2"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={PROFILE_IMAGE_URL(3)}
                    alt="Customer 3"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <p className="text-sm text-neutral-600">
                  Trusted by <br className="inline md:hidden" />
                  <span className="font-semibold text-neutral-900 underline underline-offset-4 decoration-neutral-300">10k+ customers</span>
                </p>
              </div>
            </header>

            {/* --- Main Content Cards --- */}
            {/* --- Main Content Cards --- */}
            <main className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-8 lg:gap-12">

              {/* LEFT BLOCK: Image, Text, and Button */}
              <div className="bg-white shadow-2xl p-6 sm:p-10 lg:p-14 rounded-[40px] flex flex-col items-center text-center transition-all duration-300 hover:shadow-neutral-300/50 w-full h-full justify-between">

                {/* Image Placeholder */}
                <div className="w-full max-w-[280px] h-auto mb-10">
                  <img
                    src={dummy}
                    alt="3D atomic structure illustration"
                    className="w-full h-auto object-contain"
                    style={{
                      animation: "float 3s ease-in-out infinite",
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/400x400/000000/ffffff?text=3D+Asset";
                    }}
                  />

                  <style>
                    {`
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
`}
                  </style>


                </div>

                {/* Description */}
                <p className="text-lg sm:text-xl font-semibold mb-8 max-w-xs">
                  Blending creativity with practical design
                </p>

                {/* Explore Button */}
                <button
                  className="mt-auto inline-flex items-center justify-center px-8 py-3 text-lg font-medium border border-neutral-300 rounded-full transition-all duration-300 hover:bg-neutral-100 hover:shadow-md active:scale-[0.98]"
                  onClick={() => console.log('Explore clicked')}
                >
                  Explore <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              {/* RIGHT BLOCK: Video/Abstract Block with Text Overlay */}
              <div className="bg-purple-200 shadow-2xl rounded-[40px] overflow-hidden relative min-h-[400px] lg:min-h-full flex items-center justify-center w-full">

                {/* Background Video */}
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const fallback = document.createElement("img");
                    fallback.src = "https://placehold.co/1000x500/A085E1/ffffff?text=Abstract+Render";
                    fallback.alt = "Fallback background";
                    fallback.className = "absolute inset-0 w-full h-full object-cover";
                    e.target.replaceWith(fallback);
                  }}
                ></video>

                {/* Text Overlay - shifted to top-left */}
                <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-10 max-w-md">
                  <div className="p-6 sm:p-8 rounded-3xl backdrop-blur-xl bg-white/40 shadow-xl border border-white/50">
                    <p className="text-lg font-medium text-neutral-900 leading-relaxed">
                      Your Vision, Our Digital Canvas – Designing and developing websites that resonate with audiences.
                    </p>
                  </div>
                </div>

              </div>
            </main>

          </div>
        </div>


       <ScrollLeft baseVelocity={-10} text="developer  " className="text-red-500" scrollDependent>
  Scrolling Text Animation
</ScrollLeft>

        {/* About Section */}
        <div className="bg-white w-full h-auto">
          <motion.section
            id="about"
            className="w-full font-sans py-12 sm:py-16 lg:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <motion.header variants={fadeInUp} className="text-center mb-8 sm:mb-12">
                <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">Who I Am</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">About</h2>
              </motion.header>

              {/* Main Images */}
              <motion.div
                variants={fadeInUp}
                className="relative flex flex-col items-center mb-12 sm:mb-16"
              >
                {/* Center Block */}
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12 z-10 mx-auto mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full aspect-square overflow-hidden flex items-center justify-center border-4 border-gray-300 rounded-xl shadow-lg"
                  >
                    <img
                      src={images.websitebuild}
                      alt="Portfolio"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Left and Right Blocks */}
                <div className="hidden lg:block absolute inset-0">
                  <motion.div
                    initial={{ opacity: 0, x: -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute -left-16 top-0 w-64 h-64 rotate-[-5deg] shadow-lg overflow-hidden border-4 border-gray-300 rounded-lg"
                  >
                    <img
                      src={images.portfolio}
                      alt="Web UI"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50, y: -20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute -right-16 bottom-1/4 w-64 h-64 rotate-[5deg] shadow-lg overflow-hidden border-4 border-gray-300 rounded-lg"
                  >
                    <img
                      src={images.workstation}
                      alt="Workstation"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                variants={fadeInUp}
                className="text-center mt-10 sm:mt-16 max-w-3xl mx-auto px-4"
              >
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  I specialize in transforming complex business ideas into sleek, high-performance websites and web applications.
                  From planning and database architecture to responsive front-end development, I deliver digital solutions that are
                  both functional and visually compelling. Let’s craft an exceptional web experience together.
                </p>
                <button className="mt-6 px-8 py-3 bg-black text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
                  View Resume
                </button>
              </motion.div>
            </div>
          </motion.section>
        </div>


        {/* about next block */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">

              {/* Left Side - Sticky Text */}
              <div className="mb-12 lg:mb-0 lg:sticky lg:top-20">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                  Code Meets Creativity
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                  Innovative Web Experiences
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-sm">
                  Crafting interactive, responsive, and high-performance websites that
                  transform ideas into digital experiences. I blend modern design with
                  clean, scalable code to deliver projects that truly stand out.
                </p>
            <button className="mt-8 px-6 py-3 relative w-40 font-medium rounded-full shadow-sm overflow-hidden flex items-center bg-black justify-center border-2 border-gray-900 text-gray-900 transition-colors duration-300 group">
  <span className="flex items-center space-x-2 relative z-10">
    <span>View Portfolio</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 arrow-icon text-gray-900"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </span>

  {/* Animated border */}
  <span className="absolute inset-0 rounded-full border-2 border-gray-900 pointer-events-none animate-border"></span>
</button>


              </div>

              {/* Right Side - Scrolling Blocks */}
              <div className="space-y-16">
                {scrollingTexts.map((item, idx) => (
                  <div key={idx}>
                    <div className="bg-gray-200 rounded-3xl shadow-2xl relative w-full h-7x overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-[100%] h-[500px] mx-auto object-cover rounded-3xl"
                      />

                      {/* Text overlay - bottom left */}
                      <div className="absolute bottom-6 left-6 text-white font-poppins">
                        <h3 className="text-2xl font-semibold mb-2 drop-shadow-lg">
                          {item.title}
                        </h3>
                        <p className="text-base max-w-xs leading-relaxed opacity-90 drop-shadow-md">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Paragraph below image (optional) */}
                    <p className="mt-4 text-gray-700 text-base ml-8 sm:px-0">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </section>






        {/* Projects Section */}
        <motion.nav
          id="projects"
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 m-6 
             w-full max-w-4xl mx-auto bg-white px-4 sm:px-6 py-3 
             rounded-lg uppercase tracking-wide text-sm font-medium"
        >

          <motion.section
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12 px-4"
          >

          </motion.section>

          <div className="m-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Projects
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left max-w-3xl mx-auto">
              Explore a curated collection of our recent works that highlight our
              expertise, creativity, and commitment to delivering high-quality digital
              solutions. Each project represents our dedication to innovation, design
              precision, and user-focused development. Browse through the projects below
              to learn more about what we’ve built and how we bring ideas to life.
            </p>
          </div>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`p-5 transition-all duration-200  ${activeFilter === category
                ? "border-b-2 border-black font-bold text-black"
                : "text-gray-500 hover:text-black"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.nav>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 
             w-full max-w-5xl mx-auto px-4 sm:px-0 m-10"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-lg border border-gray-100 
                 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover 
                   transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 
                      transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center 
                      p-4 text-center opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300">
                <h4 className="text-white text-lg sm:text-xl font-semibold mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-200 text-sm">{project.description}</p>
                <a
                  href={project.link || "#"}
                  className="mt-2 inline-flex items-center text-sm text-white hover:text-indigo-300"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>






        {/* Stats Section */}
        <section className="relative bg-black w-full py-32 min-h-[800px]">
          {/* Particles background (fills the whole section) */}
          <div className="absolute inset-0 w-full h-full">
            {/* Particles will append a canvas into this container */}
            <Particles
              particleColors={['#ffffff', '#A085E1', '#ffffff']} // tweak palette
              particleCount={220}
              particleSpread={10}
              speed={0.12}
              particleBaseSize={90}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
              className="w-full h-full"
            />

            {/* Dark overlay to keep text readable */}
            <div className="absolute" />
          </div>

          {/* Foreground content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              GET FREE MARKETING <br /> CONSULTING
            </h2>
            <p className="text-lg sm:text-xl mb-12 drop-shadow-md">
              Contact us and get free marketing consultation for your business.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-indigo-400 mb-1">99%</p>
                <p className="text-xs uppercase text-white/80">Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-indigo-400 mb-1">$50M+</p>
                <p className="text-xs uppercase text-white/80">Revenue</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-indigo-400 mb-1">350+</p>
                <p className="text-xs uppercase text-white/80">Projects</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-indigo-400 mb-1">15+</p>
                <p className="text-xs uppercase text-white/80">Years</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
       <section id="services" className="py-16 sm:py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-20"
        >
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-widest border border-gray-900 mb-4">
              LATEST SERVICES
            </span>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
              OUR CORE OFFERINGS
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Where creativity meets purpose. Let's build something extraordinary together.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            let staggerClass = "";
            if (index === 1) staggerClass = "md:-mt-12";
            else if (index === 2) staggerClass = "md:-mt-24";

            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className={`flex flex-col ${staggerClass}`}
              >
                <div className="w-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4 aspect-[4/3]">
                  <img
                    src={service.imagePlaceholder}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <span className="text-xs font-semibold uppercase text-gray-500">
                  {service.tag}
                </span>
                <a
                  href={service.link || "#"}
                  className="text-lg sm:text-xl font-bold mt-3 hover:text-gray-700 transition-colors duration-300 block"
                >
                  {service.title}
                </a>
                <a
                  href={service.link || "#"}
                  className="flex items-center text-sm uppercase font-semibold mt-1 hover:text-black transition-colors duration-300"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

        {/* Contact Section */}
        <div id="contact" className="bg-white">
          <Form />
        </div>

      </div>
    </>
  );
}

export default HomePage;