import Approute from "./Approute";
import NavbarPage from "../pages/NavbarPage";
import FooterPage from "../pages/FooterPage";


const Layout = () => {
  return (
    <>
      <header>
        <NavbarPage />
      </header>
      <main>
        <Approute />
      </main>
      <footer>
        <FooterPage />
      </footer>
    </>
  );
};

export default Layout;
