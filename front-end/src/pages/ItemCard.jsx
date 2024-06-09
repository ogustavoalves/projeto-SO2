import { App } from "../layouts/App"
import '../assets/styles/ItemCard.css'
import { useEffect } from "react";

export const ItemCard = () => {

    return (
        <App>
            <div className="card-wrapper">

                <div className="img-container">
                    <img className="img-element" src="../public/imgs/cola can.png" />
                </div>

                <div className="info-wrapper">

                    <h1 className="item-name">Nome do Item</h1>

                    <div className="row-1-container">
                        <p className="">Preço de compra: <span>R$ 12,43</span></p>
                        <p className="">Preço de venda: <span>R$ 12,43</span></p>
                        <p className="">Categoria: <span>Bebida</span></p>

        
                    </div>

                    <div className="row-2-container">
                        <p className="">Qtde no estoque: <span></span></p>
                        <p className="">Qtde no mínima no estoque: <span>15</span></p>
                        <p className="">Local no estoque: <span>Refrigerador</span></p>
                    </div>

                    <h5>Descrição</h5>
                    <p className="descricao-container">
                    

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    
                </div>

                <h5>Informações Gerais</h5>
                <p className="info-gerais-container">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

            </div>
        </App>
    )
}

export default ItemCard;