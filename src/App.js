// import logo from './logo.svg';
import './App.css';
// import Router from './Router'
import { BrowserRouter, Link } from 'react-router-dom';
import Router from './Router'

// export const pages = ["One", "Two", "Three"]
export const pagesNames = ["Home", "Main", "Footer", "NotFound"]

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        {pagesNames.map(pageNav =>
          <Link to={pageNav}><button>{pageNav}</button><br></br></Link>
        )
        }
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
