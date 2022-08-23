import { One, Two, Three, } from "./components/pages/index";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer/Footer";
import Main from "./components/pages/Main/Main";
export default function ChangePages({ pages }) {
  switch (pages) {
    case "One":
      return <One />;
    case "Two":
      return <Two />;
    case "Three":
      return <Three />;
    case "Home":
      return <Home />;
    case "Footer":
      return <Footer />;
    case "Main":
      return <Main />;
    default:
      break;
  }
}
