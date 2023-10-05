import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Header></Header>
      </div>
      <Outlet className="container mx-auto"></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
