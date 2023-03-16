import React from "react";
import { useNavigate } from "react-router-dom";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";
import Back from "../../../../components/atoms/Back/Back";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";

//Tania ❤🌹
import "./TermsAndConditions.scss";

const TermsAndConditions = () => {
    const navigate = useNavigate();
    return (
        <>
            <AuthHeader/>
            <div className="AuthView"> 
                <div className="TermsAndConditions">
                    <div className="backColor">
                            <div className="backWhite"></div>
                    </div>
                    <div className="TermsTitle">
                        <Back
                        className="Return" onClick={()=> navigate("/legals")}/>
                        <p>Términos y condiciones</p>
                    </div>
                    <div className="ContainerTerms">
                        <div className="insideTerms">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam at porttitor sem. Aliquam erat volutpat. Donec
                                placerat nisl magna, et faucibus arcu condimentum sed. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                at porttitor sem. Aliquam erat volutpat. Donec placerat nisl
                                magna, et faucibus arcu condimentum sed. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Aliquam at porttitor
                                sem. Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aliquam at porttitor sem.
                                Aliquam erat volutpat. Donec placerat nisl magna, et
                                faucibus arcu condimentum sed.
                            </p>
                        </div>
                    </div>
                </div>
                <AuthFooter/>
            </div>
        </>
    );
};

export default TermsAndConditions;
