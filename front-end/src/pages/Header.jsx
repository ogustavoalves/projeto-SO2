import '../assets/styles/header.css';
import { App } from "../layouts/App"

export const Header = () => {

    return (
        <App>
            <div className='header-wrapper'>
                <header className="header-container">
                    <div className="logo"><h1>StoreEase</h1></div>
                    <div className="email-wrapper">
                        <p className="email-paragraph">
                            email@email.com
                        </p>
                        <button className="logout-button">
                            Sair
                        </button>
                    </div>
                </header>
            </div>
        </App>
    )

}

export default Header;