import './App.css';
import JSONDATA from './data/MOCK_DATA.json';
import {useState} from 'react';
import styled from 'styled-components'
import React from 'react';

const INPUT_TEXT = styled.input`
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 50px;
  margin-top: 50px;
  padding: 12px 20px;
  width: 50%;
`;

const BEANIE_DIV = styled.div `
  background: white;
  border: solid lightgray;
  display: flex;
  float: left;
  height: 350px;
  padding: 65px;
  position: relative;
  margin-left: 10%;
  margin-top: 10px;
  width: 350px;
`;

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

      <INPUT_TEXT
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
            <BEANIE_DIV>   
              <a href={val.EBAY}><img className="Ebay" src="/image/ebay.PNG" alt={val.Name} /></a>         
              <div className="beanie-image">
                <b><p className="beanie-name">{val.Name}</p></b>
                
                <img src={val.Image} alt={val.Name} />    
                <div className="poem"><p className="Poem">{val.Poem}</p></div>             
              </div>             
            </BEANIE_DIV>
          </div>
        )
      })}
     
    </div>
  );
}

export default App;
