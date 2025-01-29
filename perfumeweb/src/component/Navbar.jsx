import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
      <div className="container-fluid d-flex justify-content-between">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{ color: "#ffffff" }}
                ></i>
                &nbsp;&nbsp;Perfumestore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                <i
                  className="fa-solid fa-house"
                  style={{ color: "#ffffff" }}
                ></i>
                &nbsp;&nbsp;Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Product
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
