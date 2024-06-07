import { Link } from "react-router-dom";
import { App } from "../layouts/App"
import { useForm } from "react-hook-form";

import '../assets/styles/loginForm.css'

export const SignIn = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleFormSubmit = ({ email, password }) => {
        console.log("ACESSANDO APLICAÇÃO", email, password);
    };

    return (
        <App>
            <div className="login-form-container">
                <h1 className="form-title">Login</h1>
                <form className="form" autoComplete="on" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="input-wrapper">
                        <input 
                            {...register("email", {
                                required: true,
                                maxLength: 255,
                                minLength: 5,
                                
                            })}
                            type="email" 
                            placeholder="email@exemplo.com" 
                            className="input-email"
                        />

                        <input
                            {...register("password", {
                                required: true,
                                maxLength: 255,
                                minLength: 8,
                            })}
                            type="password" 
                            placeholder="Senha" 
                            className="input-email"
                        />
                    </div>
                    <button type="submit" className="submit-button">Acessar</button>
                </form>

                <p className="">
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
