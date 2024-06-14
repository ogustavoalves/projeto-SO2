import '../assets/styles/Header.css';
import { App } from "../layouts/App"
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/sign-in')
    }

    const handleTitleClick = () => {
        
        navigate('/')
    }


    return (
        <App>
            <div className='header-wrapper'>
                <header className="header-container">
                    <div className="logo">
                        <button onClick={handleTitleClick}>
                            <h1 >StoreEase</h1>
                        </button>
                    </div>
                    <div className="email-wrapper">
                        <p className="email-paragraph">
                            email@email.com
                        </p>
                        <button className="logout-button" onClick={handleLogout}>
                            Sair
                        </button>
                    </div>
                </header>
            </div>
        </App>
    )

}

export default Header;