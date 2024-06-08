import { App } from "../layouts/App"
import ItemCard from "./ItemCard";
import '../assets/styles/Home.css';

export const Home = () => {
    
    return (
        <App>
            <div className="home-bg">
                <h1 className="home-title">Home Page</h1>
                <div className="search-container"> 
                    <label>Pesquisar um Item:</label>
                    <input type="text"/>
                </div>
                <div className="itens-wrapper">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
                
            </div>
        </App>
    )
}

export default Home;