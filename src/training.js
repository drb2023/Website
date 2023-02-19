import {createRoot} from "react-dom/client";
// import { ReactDOM } from "react";
// import {useState} from "react";
import Header from "./components/Header";
import Body from "./components/TrainingBody";
import Footer from "./components/Footer";

const App = () => {return (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>

)};



const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App/>);
