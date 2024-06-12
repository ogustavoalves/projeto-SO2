import { Link } from "react-router-dom";
import { App } from "../layouts/App"
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import '../assets/styles/LoginForm.css'

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
                                minLength: 8,
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
