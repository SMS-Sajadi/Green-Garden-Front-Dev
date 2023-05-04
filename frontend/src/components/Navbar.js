import React, { useEffect} from "react";
import { Link } from "react-router-dom";

//image
import logo from "../assets/images/green garden2.svg";

const Navbar = () => {


  useEffect(() => {
    const nav = document.getElementById('topnav');
  
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        nav.style.background= '#228753d1';
      } else {
        nav.style.background= '';
      }
    });
  }, []);

  return (
    <div>


      {/* <!-- Navbar Start --> */}
      <header
        id="topnav"
        className="sticky"
      >
        <div className="container">
          <div>
            <Link className="logo" to="/home">
              {/* <img src="../assets/images/green garden2.svg" className="l-dark" height="33" alt="G G logo"  /> */}
              <img src={logo} className="l-light" alt="G G loog" />
              Green Garden
            </Link>
          </div>



          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0">
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-link text-decoration-none dropdown-toggle p-0 pe-2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="uil uil-search h5 search"></i>
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-0"
                  style={{width: "300px"}}
                >
                  <form>
                    <input
                      type="text"
                      id="text"
                      name="name"
                      className="form-control border bg-white"
                      placeholder="جستجو..."
                    />
                  </form>
                </div>
              </div>
            </li>
            <li className="list-inline-item mb-0 pe-1">
              <Link
                to="#"
                className="btn btn-icon  nav-icon"
                data-bs-toggle="modal"
                data-bs-target="#wishlist"
              >
                <i className="uil uil-heart align-middle icons"></i>
              </Link>
            </li>
            <li className="list-inline-item mb-0">
              <div className="dropdown dropdown-primary">
                <button
                  type="button"
                  className="btn btn-icon  dropdown-toggle nav-icon"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="uil uil-user align-middle icons"></i>
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-3"
                  style={{width: "200px"}}
                >
                  <Link className="dropdown-item text-dark" to="#">
                    <i className="uil uil-user align-middle me-1"></i> حساب کاربری
                  </Link>
                  <Link className="dropdown-item text-dark" to="#">
                    <i className="uil uil-clipboard-notes align-middle me-1"></i>{" "}
                    سفارشات من{" "}
                  </Link>
                  <Link className="dropdown-item text-dark" to="#">
                    <i className="uil uil-arrow-circle-down align-middle me-1"></i>{" "}
                    دانلود ها{" "}
                  </Link>
                  <div className="dropdown-divider my-3 border-top"></div>
                  <Link className="dropdown-item text-dark" to="#">
                    <i className="uil uil-sign-out-alt align-middle me-1"></i> خروج{" "}
                  </Link>
                </div>
              </div>
            </li>
          </ul>



          <div className="menu-extras">
            <div className="menu-item">
              {/* <!-- Mobile menu toggle--> */}
              <Link className="navbar-toggle" id="isToggle">
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
              {/* <!-- End mobile menu toggle--> */}
            </div>
          </div>

          <div id="navigation">
            <ul className="navigation-menu nav-light">
              <li>
                <Link to="/home" className="sub-menu-item">
                  صفحه اصلی{" "}
                </Link>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <Link to="#">پیشنهاد گیاه </Link>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li className="has-submenu parent-menu-item">
                    <Link to="#"> نمونه </Link>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link
                          to="account-profile.html"
                          className="sub-menu-item"
                        >
                          تست 1{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="has-submenu parent-menu-item">
                <Link to="#">درباره ما </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>





    </div>
  );
};

export default Navbar;
