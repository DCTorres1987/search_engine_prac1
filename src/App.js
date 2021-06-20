import './App.css';
import JSONDATA from './data/MOCK_DATA.json';
import {useState} from 'react';

function App() {
 const [searchTerm, setSearchTerm] = useState('')


  return (
    <div className="App">
      <input type="text"
             placeholder="Type name..."
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
      
      }).map((val, key) => {
        return (
          <div className="beanie" key={'ID'+key}>
            {val.Name}
          </div>
        )
      })}
     
    </div>
  );
}

export default App;
