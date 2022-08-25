// import logo from './logo.svg';
import './App.css';
// import Router from './Router'
import { BrowserRouter, Link } from 'react-router-dom';
import Router from './Router'
import Header from './components/features/Header/Header';
import  Footer  from './components/features/Footer/Footer';
export const pagesNames = ["Home", "Main"]

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Header/>
      <br></br>
        {pagesNames.map(pageNav =>
          <Link to={pageNav}><button>{pageNav}</button></Link>)
        }
        <Router />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
