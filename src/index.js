// CLicking on my name at the top left will return to the homepage.

import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ContactBody, Footer, Header, Body, PortfolioBody, ResumeBody, TrainingBody } from "./components/index";


const App = () => {
    
    
    return (
        <BrowserRouter>
            <div>
                <nav className="nav-boxes">
                    <Link to="/training" className="nav-box-1">Training</Link>
                    <Link to="/portfolio" className="nav-box-2">Portfolio</Link>
                    <Link to="/resume" className="nav-box-3">Resume</Link>
                    <Link to="/contact" className="nav-box-4">Contact</Link>
                </nav>
                <Header/>
                <Routes>
                    <Route path="/" element={<Body/>}/>
                    <Route path="/training" element={<TrainingBody/>}/>
                    <Route path="/portfolio" element={<PortfolioBody/>}/>
                    <Route path="/resume" element={<ResumeBody/>}/>
                    <Route path="contact" element={<ContactBody/>}/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
)};



const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App/>);
