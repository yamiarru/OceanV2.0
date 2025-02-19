import logo from "../assets/imgs/logo.png";
import MyCart from "./MyCart";
import { CiMenuFries } from "react-icons/ci";
import sideLogo from "../assets/imgs/sideLogo.png";
import sideLogo2 from "../assets/imgs/sideLogo2.png";


const Nav = () => {
  return (
    <>
      <div className="text-center my-3 d-flex justify-content-center align-items-center">
        <a className="navbar-brand" href="/" style={{ marginRight: "auto", marginLeft: "300px" }}>
          <img src={sideLogo} alt="logo" style={{ width: "150px" }} />
        </a>
        <a className="navbar-brand mx-auto" href="/">
          <img src={logo} alt="logo" style={{ width: "200px", margin: "0 20px" }} />
        </a>
        <a className="navbar-brand" href="/" style={{ marginLeft: "auto", marginRight: "300px" }}>
          <img src={sideLogo2} alt="logo" style={{ width: "150px" }} />
        </a>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 custom-navbar w-100">
        <div className="container-fluid">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <CiMenuFries className="menu-icon text-white" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ofertas
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link">Contacto</a>
              </li>
            </ul>
            <MyCart />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
