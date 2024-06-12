import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { SignIn } from "./SignIn.jsx"
import { SignUp } from "./SignUp.jsx";
import { Home } from "./Home.jsx";
import { ItensCadastro } from "./ItensCadastro.jsx";

export const Pages = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                {/* <Route path="/sign-up" element={<SignUp />} /> */}

                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<ItensCadastro/>} />
            </Routes>
        </Router>
    )
}

export default Pages;