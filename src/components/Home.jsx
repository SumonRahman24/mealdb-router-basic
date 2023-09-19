import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="m-10">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
