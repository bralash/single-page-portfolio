import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import logo from "./assets/logo.svg";
import Header from "./components/Header";

function App() {
    return (
        <HelmetProvider>
            <div className="App">
                <Helmet>
                    <title>Single Page Portfolio</title>
                    <link rel="icon" href={logo} />
                </Helmet>

                <Header logo={logo} button="Free Consultation" />
            </div>
        </HelmetProvider>
    );
}

export default App;
