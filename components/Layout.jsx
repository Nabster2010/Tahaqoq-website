import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
