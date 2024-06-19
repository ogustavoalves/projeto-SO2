import React, { useState } from 'react';
import { App } from "../layouts/App"
import { Header } from "./Header/Header"
import '../assets/styles/CadastroItens.css'
import { useForm } from "react-hook-form";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://3.89.100.45:3000/'
})

export const  ItensCadastro = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleFormInput = (data) => {

        api.post('/itens', data).then(res => {
            console.log('User saved:', res.data);
            setSuccess(true);
            setError('');
            reset();
            
        }).catch(err => {
            setError(err.message);
            setSuccess(false);
            console.log('Error:', err);
        })

        // console.log("ACESSANDO APLICAÇÃO", email, password);
    };

    return (
        <App>
            <Header></Header>
            <div className="form-container">
                <h1 className="form-title">Cadastro de Item</h1>
                {error && <div className="error">Error: {error}</div>}
                {success && <div className="success">User added successfully!</div>}
                <form className="form" onSubmit={handleSubmit(handleFormInput)}>
                    
                    <label htmlFor="nome-item">Nome do Item</label>
                    <input 
                        {...register("nome_item")}
                        type="text" 
                        id="nome-item" 
                        
                        placeholder="Digite o Nome do Item"
                    />

                    <label>Foto do Item</label>
                    <input {...register("foto_item")}
                        type="text" 
                        placeholder="URL da imagem do Item"
                    />

                    <label>Descrição do Item</label>
                    <input 
                        {...register("descricao_item")}
                        type="text" 
                        placeholder="Descrição do Item"
                    />

                    <label>Valor de Compra do Item</label>
                    <input 
                        {...register("valor_compra")}
                        type="number" 
                        step="0.01" 
                        placeholder="Valor de Compra"
                    />

                    <label>Valor de Venda do Item</label>
                    <input 
                        {...register("valor_venda")}
                        type="number" 
                        step="0.01" 
                        placeholder="Valor de Venda"
                    />

                    <label>Quantidade no Estoque</label>
                    <input 
                        {...register("quantidade_estoque")}
                        type="number" 
                        placeholder="Quantidade no Estoque"
                    />

                    <label>Quantidade Mínima no Estoque</label>
                    <input 
                        {...register("estoque_min")}
                        type="number" 
                        placeholder="Estoque Mínimo"
                    />

                    
                    <label>Categoria do Item</label>
                        <div className="categoria-group">
                            <input 
                                {...register("categoria")}
                                type="radio" 
                                id="Diversos" 
                                value="Diversos" 
                                name="categoria" 
                                placeholder="Categoria do Item"
                            />
                        <label htmlFor="Diversos">Diversos</label>
                            <input 
                                {...register("categoria")}
                                type="radio" 
                                id="Porção" 
                                value="Porção" 
                                name="categoria" 
                                placeholder="Categoria do Item"
                            />
                        <label htmlFor="Porção">Porção</label>
                            <input 
                                {...register("categoria")}
                                type="radio" 
                                id="Bebida" 
                                value="Bebida" 
                                name="categoria" 
                                placeholder="Categoria do Item"
                            />
                        <label htmlFor="Bebida">Bebida</label>
                            <input 
                                {...register("categoria")}
                                type="radio" 
                                id="Combo" 
                                value="Combo" 
                                name="categoria" 
                                placeholder="Categoria do Item"
                            />
                        <label htmlFor="Combo">Combo</label>
                    </div>

                    <label>Local do Estoque</label>
                    <input 
                        {...register("local_estoque")}
                        type="text" 
                        placeholder="Local do Estoque do Item"
                    />

                    <label htmlFor="info-gerais">Informações Gerais</label>
                    <textarea 
                        {...register("informacoes_gerais")}
                        id="info-grais" 
                        placeholder="Informações Gerais sobre o Item"
                    >
                    </textarea>
                    <div className="button-wrapper">
                        <button className="submit-button-itens" type="submit">
                            Cadastrar Item
                        </button>
                    </div>
                    
                </form>
            </div>
        </App>
    )
}