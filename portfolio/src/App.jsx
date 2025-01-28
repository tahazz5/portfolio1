import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaDownload, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import "./App.css";

const projects = [
  {
    title: "Compiler Development for Deca Language",
    description: "Developed a compiler in Java for Deca, a simplified subset of Java, with assembly code generation.",
    date: "Dec 2024 - Jan 2025",
  },
  {
    title: "Database and Application Development for Auctions",
    description: "Designed an Oracle relational database and implemented key SQL transactions.",
    date: "Nov - Dec 2024",
  },
  {
    title: "Firefighting Robot (JAVA)",
    description: "Developed an application in Java to simulate a team of autonomous firefighting robots.",
    date: "Sept - Nov 2024",
  },
  {
    title: "JPEG Compressor",
    description: "Developed a PPM/PGM image compressor in JPEG format using C language.",
    date: "May 2024",
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      {/* Dark Mode Toggle */}
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <nav className="navbar">
        <div>Omar Oukhtite</div>
        <ul className="menu">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Header Section */}
      <section id="about" className="header">
        <motion.img
          src="/profile.jpg"
          alt="Omar OUKHTITE"
          className="profile-image"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Omar OUKHTITE
        </motion.h1>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          AI & Data Science Enthusiast | Grenoble INP - ENSIMAG Student <br />
          Currently pursuing a Master's degree in Computer Science and Applied Mathematics at ENSIMAG, with a specialization in Mathematical Modeling, Image, and Simulation. Experienced in software development, data science, and artificial intelligence projects.
        </motion.p>
        <motion.a
          href="/cv_english.pdf"
          className="download-btn"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <FaDownload className="icon" /> Download CV
        </motion.a>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {[
            { name: "Mathematics", icon: "📐" },
            { name: "Machine Learning", icon: "🤖" },
            { name: "Deep Learning", icon: "🧠" },
            { name: "Python", icon: "🐍" },
            { name: "Java", icon: "☕" },
            { name: "SQL", icon: "📊" },
            { name: "C/C++", icon: "🔧" },
            { name: "Data Science", icon: "📉" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <p className="skill-name">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <span className="project-date">{project.date}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="contact">
  <h2 className="section-title">Contact Us</h2>
  <p>If you have any questions or inquiries, feel free to reach out to us.</p>

  {/* Contact Icons */}
  <div className="contact-icons">
    <a href="https://www.linkedin.com/in/omar-oukhtite-144212243/" className="icon-link" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="icon" />
    </a>
    <a href="mailto:omar.oukhtite@grenoble-inp.org" className="icon-link">
      <FaEnvelope className="icon" />
    </a>
    <a href="https://github.com/OmarOukhtite" className="icon-link" target="_blank" rel="noopener noreferrer">
      <FaGithub className="icon" />
    </a>
  </div>

  {/* Contact Form */}
  <form action="https://formspree.io/f/xxxxx" method="POST" className="contact-form">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send</button>
  </form>
</section>

    </div>
  );
}