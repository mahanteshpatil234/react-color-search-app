import './App.css';
import React, { useState } from "react";
import namedColors from 'color-name-list';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedItem, setSearchedItem] = useState([]);
  
  const handleChange = event => {
    setSearchTerm(event.target.value);
    const searchedColor = namedColors.find(
      color => color.name.toLowerCase() === event.target.value
      )
    setSearchedItem(searchedColor)
  };

  return (
    <>
      <main className="main" style={{ backgroundColor:  searchedItem !== undefined ? searchedItem.name : ''}}>
      <div>
        <label style={{ paddingBottom : "10px"}}> Search your color :</label>
        <input
          type="text"
          placeholder="Search"
          class="form-control"
          value={searchTerm}
          onChange={handleChange}
        />
        <div style={{ paddingTop: "40px"}}>
          { searchedItem !== undefined && !Array.isArray(searchedItem) ? (
            <div className="card" style={{ width: "22rem" }}>
            <div class="card text-center">
              <div class="card-header">
              {searchedItem.name} color card
              </div>
              <div className="card-body" style= {{backgroundColor : searchedItem.name}}>
                <h3 className="card-title">{searchedItem.name}</h3>
                <h4>{searchedItem.hex}</h4>
              </div>
              </div>
            </div> ) : null}
        </div>
      </div>
      </main>
    </>
  );
}

export default App;
