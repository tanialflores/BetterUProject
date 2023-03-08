import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Auth from "./Auth/Auth";
import Guest from "./Guest/Guest";

import "./MainRouter.scss";

// prime react
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

export default function MainRoute() {

    const [auth, setAuth] = useState(false)
    const token = localStorage.getItem('authToken')

    useEffect(() => {
        // listener needed to block scroll when a modal is present
        function checkDOMChange() {
            if($(".openSideBar")[0]) {
                
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = "auto"
            }

            // call the function again after 100 milliseconds
            setTimeout( checkDOMChange, 100 );
        }
        

        checkDOMChange()
    }, [])

    // useStates 👇
    useEffect(() => {
        if(token) setAuth(true)
    },[token])

    return (
        <main>
            <Router>
                {auth === true ? (
                    <>
                        <Auth AuthFunctions={setAuth} />
                    </>
                ) : (
                    <>
                        <Guest AuthFunctions={setAuth} />
                    </>
                )}
            </Router>
        </main>
    );
}

if (document.getElementById("reactRoute")) {
    ReactDOM.render(
        <MainRoute />,
        document.getElementById("reactRoute")
    );
}
