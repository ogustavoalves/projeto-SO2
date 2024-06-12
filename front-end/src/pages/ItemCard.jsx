import axios from "axios";
import React, { useState } from "react";
import { App } from "../layouts/App"
import '../assets/styles/ItemCard.css'
import { useEffect } from "react";

export const ItemCard = ({props}) => {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get("http://localhost:3000/itens");
    //         setData(response.data);
    //         // setFilteredData(response.data);
    //       } catch (error) {
    //         console.error("Erro ao buscar dados:", error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);

    return (
        <App>
            <div className="card-wrapper">

                <div className="img-container">
                    <img className="img-element" src={props.foto_item} alt={props.nome_item} />
                </div>

                <div className="info-wrapper">

                    <h1 className="item-name">{props.nome_item}</h1>

                    <div className="row-1-container">
                        <p className="">Preço de venda: R$ <span>{props.valor_venda}</span>
                        </p>
                        <p className="">Categoria: <span>{props.categoria}</span></p>
                    </div>

                    

                    <h5>Descrição</h5>
                    <p className="descricao-container">
                    {props.descricao_item}
                    </p>
                    
                </div>

            </div>
        </App>
    )
}

export default ItemCard;