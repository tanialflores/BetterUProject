import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Guest from "./Guest/Guest";

import "./MainRouter.scss";

// prime react
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

export default function MainRoute() {

    return (
        <main>
            <Router>
                <Guest />
            </Router>
        </main>
    );
}


    ReactDOM.render(
        <MainRoute />,
        document.getElementById("reactRoute")
    );

