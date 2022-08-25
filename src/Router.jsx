import { NotFound, Home, Main } from "./components/pages/index";
import { Routes, Route } from "react-router-dom";
import Devices from "./components/contexts/devices";

export default function Router() {
  return (
    <Devices>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="Main" element={<Main />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </Devices>
  );
}
