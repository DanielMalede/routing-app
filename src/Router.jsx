import { One, Two, Three,Home,Main,Footer } from "./components/pages/index";
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
