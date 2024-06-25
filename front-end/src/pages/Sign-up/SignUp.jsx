import { Link } from "react-router-dom";
import { App } from "../../layouts/App"
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import classNames from 'classnames';
import axios from "axios";
import "../Sign-up/SignUp.css";

const api = axios.create({
    baseURL: 'http://localhost:3000/'
});


export const SignUp = () => {

    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);


    const handleFormSubmit = (data) => {

        api.post('/user', data).then(res => {
            console.log('User saved:', res.data);
            setSuccess(true);
            navigate('/sign-in');
            setError('');
            reset();
            
        }).catch(err => {
            setError(err.message);
            setSuccess(false);
            console.log('Error:', err);
        })

    };

    return (
        <App>
            <div className="login-form-container">
                <h1 className="login-form-title">Cadastro</h1>
                {error && <div className="error">Error: {error}</div>}
                {success && <div className="success">User added successfully!</div>}

                <form className="login-form" autoComplete="on" onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="input-wrapper">
                        <input
                            {...register("email", {
                                required: true,
                                maxLength: 255,
                                minLength: 10,
                                
                            })}
                            type="email" 
                            placeholder="email@exemplo.com" 
                            className={classNames(
                                "input-style",
                                {"input-error" : errors.email?.type === "required"}
                            )}
                        />
                        {errors.email?.type === "required" ? (
                            <span className="input-error-message"> 
                                Email é obrigatório
                            </span>
                        ) : null }
                        {errors.email?.type === "minLength" ? (
                            <span className="input-error-message">
                                Email 
                            </span>
                        ) : null }

                        <input 
                            {...register("password", {
                                required: true,
                                maxLength: 255,
                                minLength: 5,
                            })}
                            type="password" 
                            placeholder="Senha" 
                            className={classNames(
                                "input-style",
                                {"input-error" : !!errors.password}
                            )}
                        />
                        {errors.password?.type === "required" ? (
                            <span className="input-error-message">
                                Senha é obrigatória
                            </span>
                        ) : null }
                        {errors.password?.type === "minLength" ? (
                            <span className="input-error-message">
                                Senha precisa ter ao menos 5 caracteres
                            </span>
                        ) : null }

                    </div>
                    
                    <button className="submit-button" >Criar Conta</button>
                </form>

                <p className="login-form-paragraph">
                    Já possui cadastro?
                    <span>
                        <Link className="" to={"/sign-in"}>
                            Acessar conta
                        </Link>
                    </span>
                </p>
            </div>
        </App>
    )
}

export default SignUp;