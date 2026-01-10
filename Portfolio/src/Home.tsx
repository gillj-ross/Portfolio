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
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.github.com/users/yourID"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src="/profile1.JPG" alt="Portrait of Jude Gill" />
      </div>
    </section>
  );
}
