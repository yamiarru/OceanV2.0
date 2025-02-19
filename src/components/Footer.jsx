import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Texto del Footer */}
          <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; 2025{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/yamila-arru/"
                className="text-white text-decoration-none"
              >
                Ocean Cosmetics
              </a>{" "}
              || Todos los derechos reservados. Yamila Arru.
            </p>
          </div>
          {/* Íconos Sociales */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="social-icons d-inline-flex justify-content-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/yamiarru"
                className="text-white me-3"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/yamila-arru/"
                className="text-white me-3"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href=""
                className="text-white me-3"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
