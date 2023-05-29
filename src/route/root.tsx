import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import SkipToContent from "../components/SkipToContent";
import { CONTENT } from "../data/data";

const Root = () => {
  return (
    <>
      <Navigation />
      <SkipToContent />
      <Outlet context={CONTENT} />
    </>
  );
};
export default Root;
