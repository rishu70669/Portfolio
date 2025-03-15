
import './App.css'


import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaRobot, FaBrain } from 'react-icons/fa'; // FaRobot and FaBrain for ML
import { SiPython } from 'react-icons/si'; // We keep SiPython as it is available
import image1 from './assets/image1.png'
import image from './assets/image.png'
import image2 from './assets/image2.png'

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">

      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12 shadow-md">
        <div className="container mx-auto text-center px-6 animate__animated animate__fadeIn">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">Rishu Kumar Saw</h1>
          <p className="text-2xl md:text-3xl font-semibold animate__animated animate__fadeIn animate__delay-2s">Frontend Developer</p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-6 md:px-12 animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-4xl font-semibold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            Hi, I'm Rishu Kumar Saw, a passionate Frontend Developer skilled in
            creating modern and responsive web applications. I specialize in HTML, CSS,
            JavaScript, and React. I love turning ideas into beautiful and functional websites,
            and I am always learning new technologies to improve my craft.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-6 md:px-12 animate__animated animate__fadeIn animate__delay-4s">
          <h2 className="text-4xl font-semibold mb-6">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-lg">
            {/* HTML */}
            <li className="bg-white p-4 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105">
              <FaHtml5 className="text-5xl mx-auto mb-4 text-orange-600" />
              HTML5
            </li>
            {/* CSS */}
            <li className="bg-white p-4 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105">
              <FaCss3Alt className="text-5xl mx-auto mb-4 text-blue-600" />
              CSS3
            </li>
            {/* JavaScript */}
            <li className="bg-white p-4 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105">
              <FaJsSquare className="text-5xl mx-auto mb-4 text-yellow-500" />
              JavaScript (ES6+)
            </li>
            {/* React */}
            <li className="bg-white p-4 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105">
              <FaReact className="text-5xl mx-auto mb-4 text-blue-500" />
              React
            </li>
            {/* C */}
            <li className="bg-white p-4 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105">
              <FaRobot className="text-5xl mx-auto mb-4 text-green-600" />
              C
            </li>
            {/* C++ */}
            <li className="bg-white p-4 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105">
              <FaRobot className="text-5xl mx-auto mb-4 text-blue-600" />
              C++
            </li>
            {/* Python */}
            <li className="bg-white p-4 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105">
              <SiPython className="text-5xl mx-auto mb-4 text-yellow-500" />
              Python
            </li>
            {/* Basics of ML */}
            <li className="bg-white p-4 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105">
              <FaBrain className="text-5xl mx-auto mb-4 text-red-600" />
              Basics of ML
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-6 md:px-12 animate__animated animate__fadeIn animate__delay-5s">
          <h2 className="text-4xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Weather App Project */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
              <img 
                src={image1} // Image from src/assets/image1.jpg
                alt="Weather App"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-4">Weather App</h3>
              <p className="text-lg mb-4">A weather app built using React and an external weather API to fetch live data. It provides current weather details based on your location or city name.</p>
              <a
                href="https://weather-app-rouge-three-96.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                See Demo
              </a>
            </div>
            {/* Currency Converter Project */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
              <img 
                src={image2} // Image from src/assets/image2.jpg
                alt="Currency Converter"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-4">Currency Converter</h3>
              <p className="text-lg mb-4">A currency converter app that uses real-time exchange rates from an external API to convert one currency to another.</p>
              <a
                href="https://currency-converter-nu-smoky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                See Demo
              </a>
            </div>
            {/* Expense Tracker Project */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
              <img 
                src={image} // Image from src/assets/image3.jpg
                alt="Expense Tracker"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-4">Expense Tracker</h3>
              <p className="text-lg mb-4">An expense tracker app built with React that allows users to track their income and expenses, and provides a visual representation of their spending.</p>
              <a
                href="https://expense-tracker-fawn-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                See Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-6 md:px-12 animate__animated animate__fadeIn animate__delay-9s">
          <h2 className="text-4xl font-semibold mb-6">Contact</h2>
          <p className="text-lg mb-4">Feel free to reach out to me for any web development projects or collaborations!</p>
          <p className="text-lg mb-2">
            Email: <a href="mailto:anishpandey33378@gmail.com" className="text-indigo-600 hover:underline">anishpandey33378@gmail.com</a>
          </p>
          <p className="text-lg">
            Phone: <a href="tel:+916202759667" className="text-indigo-600 hover:underline">+91 6202759667</a>
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Rishu Kumar Saw</p>
        </div>
      </footer>

    </div>
  );
}

export default App;





