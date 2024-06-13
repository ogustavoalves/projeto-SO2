import axios from "axios";
import React, { useState } from "react";
import { App } from "../layouts/App"
import '../assets/styles/ItemCard.css'
import { useEffect } from "react";


const api = axios.create ({
    baseURL: 'http://localhost:3000/'
})

export const ItemCard = ({props}) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const [itemData, setItemData] = useState(props);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setItemData(props);
    }, [props]);

    const handleEditClick = () => {
        setIsEditMode(true);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        api.put(`/itens/${itemData.id}`, itemData)
        .then(res => {
            console.log('Item atualizado: ', res.data);
            setSuccess(true);
            setError('');
            setIsEditMode(false);
        }).catch(err => {
            setError(err.message);
            setSuccess(false);
            console.log('Error:', err);
        });
    };



    return (
        <App>
            <div className="card-wrapper">
                
                <div className="img-container">
                    <img className="img-element" src={itemData.foto_item} alt={itemData.nome_item} />
                </div>

                <div className="info-wrapper">

                    <h1 className="item-name">{itemData.nome_item}</h1>

                    <div className="row-1-container">
                        <p className="">Preço de venda: R$ <span>{itemData.valor_venda}</span>
                        </p>
                        <p className="">Categoria: <span>{itemData.categoria}</span></p>
                    </div>

                    

                    <h5>Descrição</h5>
                    <p className="descricao-container">
                    {props.descricao_item}
                    </p>
                    
                </div>
                <div className="buttons-container">
                    <button className="edit-button" onClick={handleEditClick}><p>editar</p></button>
                    <button className="delete-button"><p>excluir</p></button>
                </div>
            </div>

            {isEditMode && (
                <div className="edit-form-container">
                    <h2>Edit Item</h2>
                    {error && <div className="error"><p>Error:</p> {error}</div>}
                    {success && <div className="success"><p>Item updated successfully!</p></div>}
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label>Nome:</label>
                            <input
                                type="text"
                                name="nome_item"
                                value={itemData.nome_item}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Preço de venda:</label>
                            <input
                                type="number"
                                name="valor_venda"
                                value={itemData.valor_venda}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label>Categoria:</label>
                            <div className="categoria-group">
                                <input 
                                    type="radio" 
                                    id="Diversos" 
                                    value="Diversos" 
                                    name="categoria" 
                                    checked={itemData.categoria === "Diversos"}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="Diversos">Diversos</label>
                                <input
                                    type="radio" 
                                    id="Porção" 
                                    value="Porção" 
                                    name="categoria" 
                                    checked={itemData.categoria === "Porção"}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="Porção">Porção</label>
                                <input 
                                    type="radio" 
                                    id="Bebida" 
                                    value="Bebida" 
                                    name="categoria" 
                                    checked={itemData.categoria === "Bebida"}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="Bebida">Bebida</label>
                                <input 
                                    type="radio" 
                                    id="Combo" 
                                    value="Combo" 
                                    name="categoria" 
                                    checked={itemData.categoria === "Combo"}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="Combo">Combo</label>
                            </div>
                        </div>
                    
                        
                        <div className="textarea-container">
                            <label>Descrição:</label>
                            <textarea
                                name="descricao_item"
                                value={itemData.descricao_item}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Image URL:</label>
                            <input
                                type="text"
                                name="foto_item"
                                value={itemData.foto_item}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="button-wrapper">
                            <button type="submit">Save</button>
                            <button type="button" onClick={() => setIsEditMode(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}

        </App>
    )
}

export default ItemCard;