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
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Ariiqman Naufal</span>
        </h1>
        <p className="hero-subtitle">
          A passionate <span className="highlight">Developer</span>{" "}
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
        <div
                className="hero-social-links"
                style={{
                  display: "flex",
                  gap: "2rem",
                  
                  margin: "2rem auto 2rem 0",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="mailto:ariiqmannaufal59@gmail.com?subject=Inquiry%20Regarding%20Potential%20Job%20Opportunities&body=Dear%20Ariiqman%20Naufal%2C%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20potential%20job%20opportunities%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0D%0A%0D%0AThank%20you%20for%20your%20time.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D"
                  target="_blank"
                  title="Email"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <FaEnvelope size={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ariiqman-naufal"
                  target="_blank"
                  title="LinkedIn"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <FaLinkedin size={40} />
                </a>
                <a
                  href="https://github.com/AriiqmanNaufal"
                  target="_blank"
                  title="GitHub"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <FaGithub size={40} />
                </a>
              </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Hero;
