import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";

import logo from "./assets/logo.svg";
import patternGraphics from "./assets/pattern-graphic-design.svg";
import patternUI from "./assets/pattern-ui-ux.svg";
import patternApps from "./assets/pattern-apps.svg";
import patternIllustration from "./assets/pattern-illustrations.svg";
import patternPhotography from "./assets/pattern-photography.svg";
import patternMotion from "./assets/pattern-motion-graphics.svg";
import amy from "./assets/image-amy.webp";

import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Card from "./components/Card";
import CTA from "./components/CTA";

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
                  With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs.
                </Slogan>

                <div className="grid grid-cols-3 gap-6 mb-136">
                  <div className="grid-block">
                    <Card color="#755CDE" text="Graphics Design" icon={patternGraphics} size="lg"/>
                  </div>

                  <div className="grid grid-rows-2 gap-y-6">
                    <div className="grid grid-cols-2 sub-grid gap-6 higher">
                      <Card color="#F6A560" text="UI/UX" icon={patternUI} size="sm"/>
                      <Card color="#F39E9E" text="Apps" icon={patternApps} size="sm"/>
                    </div>
                    <div className="sub-grid">
                      <Card color="#EB7565" text="Illustrations" icon={patternIllustration} size="md"/>
                    </div>
                  </div>

                  <div className="grid grid-rows-2 gap-y-6">
                    <div className="sub-grid higher">
                      <Card color="#61C4B7" text="Photography" icon={patternPhotography} size="md"/>
                    </div>
                    <div className="sub-grid">
                      <Card color="#552049" text="Motion Graphics" icon={patternMotion} size="md"/>
                    </div>
                  </div>
                </div>

                <CTA image={amy} header="I’m Amy, and I’d love to work on your next project" button="Free Consultation">
                  I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!
                </CTA>
            </div>
        </HelmetProvider>
    );
}

export default App;
