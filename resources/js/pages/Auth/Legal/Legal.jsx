import React from "react"
import AuthFooter from "../../../components/atoms/AuthFooter/AuthFooter";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";
import "./Legal.scss";
import law from "../../../assets/icons/law.png";
import politica from "../../../assets/icons/politica.png";
import faq from "../../../assets/icons/faq.png";
import { useNavigate } from "react-router-dom";

const Legal = () => {
const navigate = useNavigate();

    return(
        <>
        <div className="AuthView">
            <div className="Legal">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="TitleLegal">Legales</div>
                <div className="ContainerLegal">
                    <div className="ContainerTerms" onClick={() => navigate ("terms-conditions")}>
                        <img src={law} className="Law"></img>
                        <div className="TextTerms">Términos y condiciones</div>
                    </div>
                    <div className="ContainerPolicies" onClick={() => navigate ("privacy-policies")}>
                        <img src={politica} className="policies"></img>
                        <div className="TextPolicies">Políticas de privacidad</div>
                    </div>
                    <div className="ContainerQuestions" onClick={() => navigate ("frecuent-questions")}>
                        <img src={faq} className="questions"></img>
                        <div className="TextQuestions">Preguntas frecuentes</div>
                    </div>
                </div>
            </div>
            <AuthFooter/>
        </div>
        </>
    );
}

export default Legal;