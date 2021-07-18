import './App.css';
import JSONDATA from './data/MOCK_DATA.json';
import {useState} from 'react';

function App() {
 const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      <div className="banner">
        <p className="text1">Search</p>               
        <img className="ty-image" src="/image/ty-tag-image2.png" alt="tyimage" />
        <p className="text2">Engine</p> 
      </div>
      <img className='banner-img' src="/image/ty_beanie_banner.PNG" alt="banner" />

      <input type="text"
             className="input"
             placeholder="Scan Item or Type Name.."
             onChange={event => {
               setSearchTerm(event.target.value) 
              
             }} 
      />
      {JSONDATA.filter((val) => {
        if (setSearchTerm === "") {
          return val
        } else if (val.UPC.includes(searchTerm)) {
          return val
        } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        };
         
          return false
      
      }).map((val, key) => {
        return (
          <div className="main" key={'ID'+key}>
            <div className="beanie" >   
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
