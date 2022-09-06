import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import logo from "./assets/logo.svg";

import Header from "./components/Header";
import Slogan from "./components/Slogan";

function App() {
    return (
        <HelmetProvider>
            <div className="App">
                <Helmet>
                    <title>Single Page Portfolio</title>
                    <link rel="icon" href={logo} />
                </Helmet>

                <Header logo={logo} button="Free Consultation" />
                <Slogan header="Design solutions made easy">
                  With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.
                </Slogan>
            </div>
        </HelmetProvider>
    );
}

export default App;
