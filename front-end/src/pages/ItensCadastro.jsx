import { Link } from "react-router-dom"; 
import { App } from "../layouts/App"
import '../assets/styles/cadastro.css'

export const  ItensCadastro = () => {
    return (
        <App>
            <div className="form-container">
                <h1 className="form-title">Cadastro de Item</h1>
                <form className="form">
                    
                    <label htmlFor="nome-item">Nome do Item</label>
                    <input type="text" id="nome-item" placeholder="Digite o Nome do Item"/>

                    <label>Foto do Item</label>
                    <input type="file" placeholder="Foto do Item"/>

                    <label>Descrição do Item</label>
                    <input type="text" placeholder="Descrição do Item"/>

                    <label>Valor de Compra do Item</label>
                    <input type="number" placeholder="Valor de Compra"/>

                    <label>Valor de Venda do Item</label>
                    <input type="number" placeholder="Valor de Venda"/>

                    <label>Quantidade no Estoque</label>
                    <input type="number" placeholder="Quantidade no Estoque"/>

                    <label>Quantidade de Estoque Mínimo</label>
                    <input type="number" placeholder="Estoque Mínimo"/>

                    
                    <label>Categoria do Item</label>
                        <div className="categoria-group">
                            <input type="radio" id="Diversos" value="Diversos" name="categoria" placeholder="Categoria do Item"/>
                        <label htmlFor="Diversos">Diversos</label>
                            <input type="radio" id="Porção" value="Porção" name="categoria" placeholder="Categoria do Item"/>
                        <label htmlFor="Porção">Porção</label>
                            <input type="radio" id="Bebida" value="Bebida" name="categoria" placeholder="Categoria do Item"/>
                        <label htmlFor="Bebida">Bebida</label>
                            <input type="radio" id="Combo" value="Combo" name="categoria" placeholder="Categoria do Item"/>
                        <label htmlFor="Combo">Combo</label>
                    </div>

                    <label>Quantidade no Estoque</label>
                    <input type="text" placeholder="Local do Estoque do Item"/>

                    <textarea placeholder="Informações Gerais sobre o Item">

                    </textarea>

                    <button type="submit">Cadastrar Item</button>
                </form>
            </div>
        </App>
    )
}