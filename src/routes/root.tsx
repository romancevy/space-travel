import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Root = () => {
  return (
    <body className="home">
      <Navigation />
      <Outlet />
    </body>
  );
};
export default Root;
