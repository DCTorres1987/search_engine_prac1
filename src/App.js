import './App.css';
import JSONDATA from './data/MOCK_DATA.json';
import {useState} from 'react';

function App() {
 const [searchTerm, setSearchTerm] = useState('')
//  const [results, setResults] = useState([]);
//  const [searchBarcode, setSearchBarcode] = useState("");

//  const filterBarcode = JSONDATA.filter((item) => {
//    return searchBarcode !== "" ? item.UPC === searchBarcode : item;
//  });

  return (
    <div className="App">
      <div className="banner"></div>
      <img className='banner-img' src="/image/TY_Beanie_Baby_Banner.PNG" alt="banner" />

      <input type="text"
             className="input"
             placeholder="Type name of beanie babie..."
             onChange={event => {
              setSearchTerm(event.target.value)
             }} 
      />
      {JSONDATA.filter((val) => {

        if (setSearchTerm === "") {
          return val
        } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        };
         
          return false
      
      }).map((val, key) => {
        return (
          <div className="main">
            <div className="beanie" key={'ID'+key}>   
            <a href={val.EBAY}><img className="Ebay" src="/image/ebay.PNG" alt={val.Name} /></a>         
              <div className="beanie-image">
                <b><p className="beanie-name">{val.Name}</p></b>
                
                <img src={val.Image} alt={val.Name} />    
                <div className="poem"><p className="Poem">{val.Poem}</p></div>             
              </div>             
            </div>            
          </div>
        )
      })}
     
    </div>
  );
}

export default App;
