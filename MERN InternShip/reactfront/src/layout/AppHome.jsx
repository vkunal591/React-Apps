import { Outlet, Link } from "react-router-dom";
import Navbar from "../component/Navbar";

const AppHome = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AppHome;
