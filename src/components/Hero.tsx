import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Ariiqman Naufal</span>
        </h1>
        <p className="hero-subtitle">
          A passionate <span className="highlight">Full-Stack Developer</span>{" "}
          crafting clean and functional web experiences.
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
      </div>
      <ToastContainer />
    </section>
  );
};

export default Hero;
