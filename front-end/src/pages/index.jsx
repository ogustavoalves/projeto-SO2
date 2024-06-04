import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { SignIn } from "./SignIn.jsx"
import { SignUp } from "./SignUp.jsx";
import { Home } from "./Home.jsx";

export const Pages = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-" element={<SignUp />} />
            </Routes>
        </Router>
    )
}

export default Pages;