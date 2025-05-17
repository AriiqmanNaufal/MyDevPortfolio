import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#000",
        height: "145px",
        color: "white",
      }}
    >
      <div
        className="social-links"
        style={{
          display: "flex",
          columnGap: "2rem",
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
        ariiqmannaufal59@gmail.com
      </p>
      <p style={{ fontSize: "0.875rem" }}>
        © {new Date().getFullYear()} Ariiqman Naufal. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
