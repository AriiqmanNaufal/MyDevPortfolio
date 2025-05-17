import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#000",
        height: "130px",
        color: "white",
      }}
    >
      <div
        className="social-links"
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <a
          href="mailto:ariiqmannaufal59@gmail.com"
          target="_blank"
          title="Email"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FaEnvelope size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/ariiqman-naufal"
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://github.com/AriiqmanNaufal"
          target="_blank"
          title="GitHub"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FaGithub size={32} />
        </a>
      </div>
      <p style={{ fontSize: "0.875rem" }}>
        © {new Date().getFullYear()} Ariiqman Naufal. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
