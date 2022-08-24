import { Home, Main, Footer, NotFound } from "./components/pages/index";
import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Main" element={<Main />} />
      <Route path="Footer" element={<Footer />} />
      <Route path="NotFound" element={<NotFound />} />
    </Routes>
  );
}
