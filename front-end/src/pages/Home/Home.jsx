import React, { useState, useEffect } from 'react';
import { App } from "../../layouts/App"
import ItemCard from "../ItemCard/ItemCard";
import Header from "../Header/Header"
import axios from "axios";
import { Link } from "react-router-dom";
import './Home.css';

const api = axios.create({
    baseURL: 'http://localhost:3000/'
});

export const Home = () => {
    
    // função de busca
    const [searchValue, setSearchValue] = useState('');
    //get data
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const [filteredData, setFilteredData] = useState([]);

    

    
    
    useEffect(() => {
        api.get('/itens').then(res => {
            // console.log('Fetched data:', res.data);
            setData(res.data);
            setFilteredData(res.data);
        }).catch(err => {
            setError(err);
            console.log('Error', err);
        });
    }, []);


    useEffect(() => {
        const results = data.filter((item) =>
          item.nome_item.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(results);
      }, [searchValue, data]);


    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }
    //----------
    
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    return (
        <App>
            <Header></Header>
            <div className="home-bg">
                <h1 className="home-title">Home Page</h1>
        
                <div className="search-container"> 
                <label>Pesquisar Item:</label>
                <div className="search-input-wrapper">
                    <input 
                        type="text" 
                        className="search-field" 
                        value={searchValue} 
                        onChange={(event) => setSearchValue(event.target.value)}
                    />
                    
                        
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
                    
                    {filteredData.map((item, index) => (<ItemCard props={item} key={index} onDelete={handleDelete}/>))}

                    
                </div>                
            </div>
        </App>
    )
}

export default Home;