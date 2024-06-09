import React, { useState } from 'react';
import { App } from "../layouts/App"
import ItemCard from "./ItemCard";
import '../assets/styles/Home.css';

export const Home = () => {
    
    const [searchValue, setSearchValue] = useState('');

    function handleSearch(){
        console.log(`Search Value: ${searchValue}`);
    };

    return (
        <App>
            <div className="home-bg">
                <h1 className="home-title">Home Page</h1>
                
                <div className="search-container"> 
                    <label>Pesquisar um Item:</label>
                    <div className="search-input-wrapper">
                        <input 
                            type="text" 
                            className="search-field" 
                            value={searchValue} 
                            onChange={(event) => setSearchValue(event.target.value)}
                        />
                        <button type="button" className="search-button" onClick={handleSearch}>Pesquisar</button>
                    </div>
                    
                </div>
                <div className="itens-wrapper">
                    <ItemCard />
                    <ItemCard />
                </div>
                
            </div>
        </App>
    )
}

export default Home;