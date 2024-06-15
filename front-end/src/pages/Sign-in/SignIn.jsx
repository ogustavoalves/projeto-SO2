import { Link, useNavigate  } from "react-router-dom";
import { App } from "../../layouts/App"
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import { useEffect, useState } from "react";
import './SignIn.css';

export const SignIn = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            navigate('/');
        }
    }, [navigate]);



    const handleFormSubmit = ({ email, password }) => {
        if (email === "admin@admin.com" && password === "admin") {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/home');
        } else {
            setLoginError("Invalid email or password");
        }
    };

    
    return (
        <App>
            <div className="login-form-container">
                <h1 className="login-form-title">Login</h1>
                <form className="login-form" autoComplete="on" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="input-wrapper">

                        <input 
                            {...register("email", {
                                required: true,
                                maxLength: 255,
                                minLength: 5,
                                
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
                    {loginError && (
                        <span className="input-error-message">
                            {loginError}
                        </span>
                    )}
                    <button type="submit" className="submit-button">Acessar</button>
                </form>

                <p className="login-form-paragraph">
                    Não possui uma conta?
                    <span>
                        <Link className="" to={"/sign-up"}>
                            Crie uma agora!
                        </Link>
                    </span>
                    </p>
            </div>    
        </App>
    )
}

export default SignIn;
