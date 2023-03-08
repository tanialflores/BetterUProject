import "./FrecuentQuestions.scss";
// react
import React from "react";
import { useNavigate } from "react-router-dom";
// assets
import Back from "../../../../components/atoms/Back/Back";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
// primereact components
import { Accordion, AccordionTab } from 'primereact/accordion';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';


const FrecuentQuestions = () => {
    const navigate = useNavigate();

    const data = [
        {
            title: '¿Qué es alkimia?',
            contain: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title: '¿Qué es alkimia?',
            contain: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title: '¿Qué es alkimia?',
            contain: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title: '¿Qué es alkimia?',
            contain: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title: '¿Qué es alkimia?',
            contain: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ]

    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
        <div className="FrecuentQuestions">
            <div className="backColor">
                <div className="backWhite"></div>
            </div>
            <div className="TermsFrecuent">
                <Back
                className="Return" onClick={()=> navigate("/legals")}/>
                <p>Preguntas frecuentes</p>
            </div>
            <div className="ContainerFrecuent">
                <div className="faq">
                    <div className="ctn-acco">
                    <Accordion activeIndex={0}>
                        {data.map((e, index) => (
                            <AccordionTab header={e.title} key={index}>
                                <p className="m-0">
                                    {e.contain}
                                </p>
                            </AccordionTab>
                        ))}
                    </Accordion>

                    </div>
                </div>
            </div>
        </div>
        <AuthFooter/>
        </div>
        </>
    );
}

export default FrecuentQuestions;