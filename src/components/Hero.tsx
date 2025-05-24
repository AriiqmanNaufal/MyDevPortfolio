import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero: React.FC = () => {
  const handleDownload = () => {
    toast.success("Resume download started!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <section className="hero-section">
  <div className="hero-container">
    {/* Left Side: Text */}
    <div className="hero-left">
      <h1 className="hero-title">
        Hi, I'm <span className="highlight">Ariiqman Naufal</span>
      </h1>
      <p className="hero-subtitle">
        A passionate <span className="highlight">Developer</span> crafting clean and functional web experiences.
      </p>
      <div className="hero-buttons">
        <a
          className="hero-button"
          href="/assets/resume.pdf"
          download="AriiqmanNaufal_Resume.pdf"
          onClick={handleDownload}
        >
          Download Resume
        </a>
        <a
          className="hero-button"
          href="https://github.com/AriiqmanNaufal"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Work
        </a>
      </div>

      <div className="hero-social-links">
        <a
          href="mailto:ariiqmannaufal59@gmail.com"
          target="_blank"
          title="Email"
          rel="noopener noreferrer"
          aria-label="Email Ariiqman"
        >
          <FaEnvelope size={40} style={{color:'#fde68a'}} />
        </a>
        <a
          href="https://www.linkedin.com/in/ariiqman-naufal"
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={40} style={{color:'#fde68a'}} />
        </a>
        <a
          href="https://github.com/AriiqmanNaufal"
          target="_blank"
          title="GitHub"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={40} style={{color:'#fde68a'}}/>
        </a>
      </div>
    </div>

    {/* Right Side: Background image */}
    <div className="hero-right" />
  </div>

  <ToastContainer />
</section>

  );
};

export default Hero;
