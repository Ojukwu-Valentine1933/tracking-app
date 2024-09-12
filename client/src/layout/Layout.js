import Approute from "./Approute";
import NavbarPage from "../pages/NavbarPage";
import FooterPage from "../pages/FooterPage";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <header>
        <NavbarPage />
      </header>
      <main>
        <Approute />
      </main>
      <footer>
        {pathname === "/dashboard" ||
        pathname.startsWith("/dashboard") ? null : (
          <FooterPage />
        )}
      </footer>
    </>
  );
};

export default Layout;
