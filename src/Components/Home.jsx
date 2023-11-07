import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const backgroundWithShadow = {
    background: "rgba(0, 0, 0, 0.3)",
};
const Home = () => {
  return (
    <div style={backgroundWithShadow}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
