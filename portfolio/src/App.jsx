import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaDownload, FaGithub } from "react-icons/fa";
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
  return (
    <div className="container">
      {/* Navigation Menu */}
      <nav className="navbar">
        <div>
          Omar Oukhtite
        </div>
        <ul className="menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Header Section */}
      <section id="about" className="header">
        <motion.img
          src="/profile.jpg" // Chemin vers l'image
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
          AI & Data Science Enthusiast | ENSIMAG Student
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

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h2 className="section-title">Experience</h2>
        <p className="experience-content">
          Currently pursuing a Master's degree in Computer Science and Applied Mathematics at ENSIMAG, with a specialization in Mathematical Modeling, Image, and Simulation. Experienced in software development, data science, and artificial intelligence projects.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/omar-oukhtite-144212243/" className="icon-link">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:omar.oukhtite@grenoble-inp.org" className="icon-link">
            <FaEnvelope className="icon" />
          </a>
          <a href="https://github.com/OmarOukhtite" className="icon-link">
            <FaGithub className="icon" />
          </a>
        </div>
      </section>
    </div>
  );
}
