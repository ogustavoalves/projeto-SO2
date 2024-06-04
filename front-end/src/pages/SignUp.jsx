import { Link } from "react-router-dom";
import { App } from "../layouts/App"
import { useForm } from "react-hook-form";

export const SignUp = () => {
    
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
            <div className="form-container">
                <h1 className="form-title">Cadastro</h1>
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
                    
                    <button className="submit-button">Criar Conta</button>
                </form>

                <p className="">
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