import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import NavBar from "../Components/Shared/NavBar";

const MainLayout = () => {
  return (
    <div className="font-source">
      <div className="lg:w-11/12 mx-auto">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
