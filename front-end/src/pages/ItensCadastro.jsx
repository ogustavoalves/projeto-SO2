import { Link } from "react-router-dom"; 
import React, { useState } from 'react';
import { App } from "../layouts/App"
import { Header } from "../pages/Header"
import '../assets/styles/CadastroItens.css'
import { useForm } from "react-hook-form";

export const  ItensCadastro = () => {

    const {
        register,
        handleSubmit,
    } = useForm();

    const handleFormInput = ({ nome, foto, descricao, valorCompra, valorVenda, qntdEstoque, estoqueMin, categoria, localEstoque, infoGerais }) => {
        console.log(`DADOS INPUTADOS: nome: ${nome}, foto: ${foto}, descrição: ${descricao}, valor compra: ${valorCompra}`);
        console.log(`DADOS INPUTADOS: valor venda: ${valorVenda}, quantidade estoque: ${qntdEstoque}, estoque mínimo: ${estoqueMin}`)
        console.log(`DADOS INPUTADOS: estoque mínimo: ${estoqueMin}, categoria: ${categoria}, local estoque: ${localEstoque}, informações gerais: ${infoGerais}`)
    };

    return (
        <App>
            <Header></Header>
            <div className="form-container">
                <h1 className="form-title">Cadastro de Item</h1>
                <form className="form" onSubmit={handleSubmit(handleFormInput)}>
                    
                    <label htmlFor="nome-item">Nome do Item</label>
                    <input 
                        {...register("nome")}
                        type="text" 
                        id="nome-item" 
                        
                        placeholder="Digite o Nome do Item"
                    />

                    <label>Foto do Item</label>
                    <input {...register("foto")}
                        type="file" 
                        placeholder="Foto do Item"
                    />

                    <label>Descrição do Item</label>
                    <input 
                        {...register("descricao")}
                        type="text" 
                        placeholder="Descrição do Item"
                    />

                    <label>Valor de Compra do Item</label>
                    <input 
                        {...register("valorCompra")}
                        type="number" 
                        step="0.01" 
                        placeholder="Valor de Compra"
                    />

                    <label>Valor de Venda do Item</label>
                    <input 
                        {...register("valorVenda")}
                        type="number" 
                        step="0.01" 
                        placeholder="Valor de Venda"
                    />

                    <label>Quantidade no Estoque</label>
                    <input 
                        {...register("qntdEstoque")}
                        type="number" 
                        placeholder="Quantidade no Estoque"
                    />

                    <label>Quantidade Mínima no Estoque</label>
                    <input 
                        {...register("estoqueMin")}
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
                        {...register("localEstoque")}
                        type="text" 
                        placeholder="Local do Estoque do Item"
                    />

                    <label htmlFor="info-gerais">Informações Gerais</label>
                    <textarea 
                        {...register("infoGerais")}
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