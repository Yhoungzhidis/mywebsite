"use client";
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        {/* Navigation Bar */}
        <nav className="p-4 fixed w-full bg-white dark:bg-gray-800 shadow-md z-10">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo Placeholder */}
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-xl font-bold text-blue-500">{"My Portfolio"}</span> {/* Replace with your logo */}
            </div>

            {/* Navigation Links and Dark Mode Toggle */}
            <div className="flex items-center space-x-4">
              <a href="#projects" className="hover:text-blue-500 text-sm md:text-base">
                Projects
              </a>
              <a href="#contact" className="hover:text-blue-500 text-sm md:text-base">
                Contact
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm md:text-base"
              >
                {darkMode ? '🌙' : '☀️'}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Hi, I&apos;m [Your Name]</h1>
          <p className="text-lg md:text-xl mb-6">
            Full Stack Developer | Next.js | Spring Boot | PostgreSQL
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm md:text-base"
          >
            Hire Me
          </a>
        </section>

        {/* About Me Section */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>
          <p className="text-base md:text-lg mb-6">
            I&apos;m a Full Stack Developer specializing in building modern web applications using
            Next.js for the frontend and Spring Boot with PostgreSQL for the backend. I&apos;m
            passionate about creating scalable, user-friendly solutions.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm md:text-base">
              Next.js
            </span>
            <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm md:text-base">
              Spring Boot
            </span>
            <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm md:text-base">
              PostgreSQL
            </span>
          </div>
        </section>

        {/* Professional Projects Section */}
        <section id="projects" className="container mx-auto px-4 md:px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Professional Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Esug-E-Learning Website</h3>
              <p className="mb-4 text-sm md:text-base">A platform for student to access course materials, past questions, lecturer office hour,
                and also submit assignments.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Technologies: Next.js, Spring Boot</p>
              <a href="#" className="text-blue-500 hover:underline text-sm md:text-base block">
                View Project
              </a>
              <a href="https://esug-e-learning-platform.vercel.app" className="text-blue-500 hover:underline text-sm md:text-base block">
                View Website
              </a>

            </div>
            {/* Add more project cards here */}
          </div>
        </section>

        {/* Personal Projects Section */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Project Title</h3>
              <p className="mb-4 text-sm md:text-base">Short description of the project.</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Technologies: Next.js, PostgreSQL</p>
              <a href="#" className="text-blue-500 hover:underline text-sm md:text-base">
                View Project
              </a>
            </div>
            {/* Add more project cards here */}
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className="container mx-auto px-4 md:px-6 py-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Contact Me</h2>
            <div className="max-w-lg mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Gmail */}
                <a
                  href="mailto:mysterokhidjhnr020@gmail.com"
                  className="flex items-center justify-center md:justify-start space-x-4 hover:text-blue-500 transition duration-300"
                >
                  <FaEnvelope className="w-6 h-6" />
                  <span>youremail@gmail.com</span>
                </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start space-x-4 hover:text-blue-500 transition duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                    <span>LinkedIn</span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/yhoungzhidis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-4 hover:text-blue-500 transition duration-300"
              >
                <FaTelegram className="w-6 h-6" />
                <span>Telegram</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-4 hover:text-blue-500 transition duration-300"
              >
                <FaGithub className="w-6 h-6" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-200 dark:bg-gray-800 p-6 mt-12">
          <div className="container mx-auto text-center">
            <p className="text-sm md:text-base">
              © {new Date().getFullYear()} Fareed Opare Ahmed. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}