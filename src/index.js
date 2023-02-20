

// Note to Elle & Violet. I had this set up to use <Body /> in the return div with my nav buttons within it but I wanted it to load the content from what would have been separate HTML files into a single Flex Box within the index.html, that's why I have it set to a function instead. I'm not sure if this qualifies for the project, but it allows me to incorporate a real world example of useState & that is pretty epic in my mind.

import {createRoot} from "react-dom/client";
import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/IndexBody";
import TrainingBody from "./components/TrainingBody";
import PortfolioBody from "./components/PortfolioBody";
import ResumeBody from "./components/ResumeBody";
import ContactBody from "./components/ContactBody";
import Footer from "./components/Footer";

const App = () => {
    
    const [body, setBody] = useState(Body);
    function changeToTraining() {
        setBody(TrainingBody)
    }
    function changeToPortfolio() {
        setBody(PortfolioBody)
    }
    function changeToResume() {
        setBody(ResumeBody)
    }
    function changeToContact() {
        setBody(ContactBody)
    }
    function changeToIndex() {
        setBody(Body)
    }
    
    return (
    <div>
        <nav className="nav-boxes">
            <a onClick={changeToTraining} className="nav-box-1">Training</a>
            <a onClick={changeToPortfolio} className="nav-box-2">Portfolio</a>
            <a onClick={changeToResume} className="nav-box-3">Resume</a>
            <a onClick={changeToContact} className="nav-box-4">Contact</a>
        </nav>
        <Header onClick={changeToIndex}/>
        {body}
        <Footer />
    </div>

)};



const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App/>);
