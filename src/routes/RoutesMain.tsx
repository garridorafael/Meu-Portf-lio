import { Route, Routes } from "react-router-dom";
import ContactMe from "../components/Contact";
import { Home } from "../components/Home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/contact" element={<ContactMe />} />
    </Routes>
  );
};
