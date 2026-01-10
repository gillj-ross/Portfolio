import "./Home.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm Jude Gill</h1>

        <div className="home-subtitle">
          <h2>Software Engineer</h2>
        </div>

        <div className="home-socials">
          <a
            href="https://www.linkedin.com/in/jude-gill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/juderossgill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/gillj-ross"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <div className="home-buttons">
          <a href="#contact" className="btn">
            Get in Touch
          </a>
          <a href="#projects" className="btn btn-outline">
            View Projects
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src="/profile1.JPG" alt="Portrait of Jude Gill" />
      </div>
    </section>
  );
}
