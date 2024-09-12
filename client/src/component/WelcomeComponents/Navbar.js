import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetCurrentUserMutation } from "../../lib/apis/userApi";
import { useLogoutUserMutation } from "../../lib/apis/authapi";
import star from "../../assets/star-icon.png";
import styles from "./Navbar.module.css";
import location from "../../assets/Location.png";
import logo from "../../assets/LOGO 1.png";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [getCurrentUser] = useGetCurrentUserMutation();
  const [logoutUser, isSuccess] = useLogoutUserMutation();

  const { user } = useSelector((state) => state.userState);

  // Use useCallback to memoize the handleScroll function
  const handleScroll = useCallback(() => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  }, [isCollapsed]); // Include isCollapsed in the dependency array

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Include handleScroll in the dependency array

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    getCurrentUser();
  }, [isSuccess]);

  return (
    <>
      <div className={`container ${styles.first_nav} mb-3`}>
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <div>
              <img src={star} alt="Bootstrap" className={styles.nav_icons} />
              <span className={`me-auto ${styles.nav_spans}`}>
                Get 5% Off your first order,{" "}
                <Link
                  className={styles.anchorTags}
                  style={{ fontWeight: "700", fontSize: "12px" }}
                >
                  Promo: ORDER5
                </Link>
              </span>
            </div>

            <div className="me-5" style={{ display: "flex" }}>
              <img
                src={location}
                alt="Bootstrap"
                className={styles.nav_icons}
              />
              <span className={styles.nav_spans}>
                Regent Street, A4, A4201, London{" "}
                <Link className={styles.anchorTags}>Change Location</Link>
              </span>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <div className="container-fluid">
            <Link to={"/"}>
              <img
                className={`navbar-brand ${styles.app_logo}`}
                alt="logo"
                src={logo}
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={!isCollapsed}
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ms-5 ${
                isCollapsed ? "" : "show"
              }`}
              id={`navbarNav ${styles.navbarNav}`}
            >
              <ul className="navbar-nav">
                <li className={`nav-item fw-bold ${styles.second_nav_list}`}>
                  <a className="nav-link active" aria-current="page" href="##">
                    Home
                  </a>
                </li>
                <li className={`nav-item fw-bold ${styles.second_nav_list}`}>
                  <a className="nav-link" href="##">
                    Browse Menu
                  </a>
                </li>
                <li className={`nav-item fw-bold ${styles.second_nav_list}`}>
                  <a className="nav-link" href="##">
                    Special Offers
                  </a>
                </li>
                <li className={`nav-item fw-bold ${styles.second_nav_list}`}>
                  <a className="nav-link" href="##" aria-disabled="true">
                    Restaurant
                  </a>
                </li>
                <li className={`nav-item fw-bold ${styles.second_nav_list}`}>
                  <a className="nav-link" href="##" aria-disabled="true">
                    Track Order
                  </a>
                </li>
                <li className={`nav-item fw-bold ${styles.second_nav_list}`}>
                  {!user && (
                    <Link to={"/auth/signup"} className={`btn btn-warning`}>
                      Login/Signup
                    </Link>
                  )}

                  {user && user.type === "admin" && (
                    <Link to={"/dashboard"} className={`btn btn-warning`}>
                      Dashboard
                    </Link>
                  )}
                </li>

                <li className={`nav-item fw-bold ${styles.second_nav_list}`}>
                  {user && (
                    <Link
                      to=""
                      className={`btn btn-danger`}
                      onClick={() => logoutUser()}
                    >
                      Logout
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
