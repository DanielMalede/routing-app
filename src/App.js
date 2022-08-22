// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Router from './Router'

export const pages = ["One", "Two", "Three"]
export const pagesNames = ["Home","Main","Footer"]
function App() {
  const [pageNumber, setPageNumber] = useState("One")
  const [pagesName,setPagesName]=useState("Home")
  return (

    <div className="App">
      {
        pages.map(pageNum =>
          <button onClick={() => setPageNumber(pageNum)}>{pageNum}</button>
        )
      }
      {
        pagesNames.map((nameP)=>
        <button onClick={()=>setPagesName(nameP)}>{nameP}</button>
        )
      }
      <Router pages={pageNumber} />
    </div>
  );
}

export default App;
