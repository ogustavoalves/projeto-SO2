import React, { useState, useEffect } from 'react';
import { App } from "../layouts/App"
import ItemCard from "./ItemCard";
import Header from "./Header"
import '../assets/styles/Home.css';
import axios from "axios";
import { Link } from "react-router-dom";

const api = axios.create({
    baseURL: 'http://localhost:3000/'
});

export const Home = () => {
    
    // função de busca
    const [searchValue, setSearchValue] = useState('');

    function handleSearch(){
        console.log(`Search Value: ${searchValue}`);
        
    };
    //--------------

    //get data
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    
    useEffect(() => {
        api.get('/itens').then(res => {
            console.log('Fetched data:', res.data);
            setData(res.data);
        }).catch(err => {
            setError(err);
            console.log('Error', err);
        });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }
    //----------
    


    return (
        <App>
            <Header></Header>
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
                    <button 
                        type="button" 
                        className="search-button" 
                        onClick={handleSearch}
                    >
                        Pesquisar
                    </button>
                    <button 
                        type="button" 
                        className="cadastro-button" 
                    >
                        <Link className="no-style-link" to={"/cadastro"}>
                        Cadastrar Item
                        </Link>
                        
                    </button>
                </div>
                        
                </div>
                <div className="itens-wrapper">
                    
                    {data.map((item, index) => (<ItemCard props={item} key={index}/>))}
                     
                    
                </div>                
            </div>
        </App>
    )
}

export default Home;