import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { SignIn } from "./Sign-in/SignIn.jsx";
import { SignUp } from "./Sign-up/SignUp.jsx";
import { Home } from "./Home.jsx";
import { ItensCadastro } from "./ItensCadastro.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";


export const Pages = () => {
    
    
    return (
        <Router>
            <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/cadastro" element={<ProtectedRoute element={<ItensCadastro />} />} />
                
                <Route path="*" element={<Navigate to="/sign-in" replace />} />
            </Routes>
        </Router>
    )
}

export default Pages;