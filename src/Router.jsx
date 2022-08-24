import { NotFound,Home,Main } from "./components/pages/index";
import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Header/>} /> */}
      <Route path="*" element={<NotFound />} />
      <Route path="Main" element={<Main />} />
      <Route path="Home" element={<Home />} />
    </Routes>
  );
}
