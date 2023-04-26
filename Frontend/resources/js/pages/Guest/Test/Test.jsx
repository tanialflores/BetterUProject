import "./Test.scss";

import React, { useEffect, useState } from "react";
import ChatAlkimia from "../../../components/molecules/ChatAlkimia/ChatAlkimia";

const Test = () => {

    return (
        <div className="AuthView">
            <div className="Contact-Better">
                <div className="bg-vg">
                    <div className="bg-white1"></div>
                </div>
                <div className="cnt-txt">Test Better U</div>
                <div className="cardBody-Better">
                    <ChatAlkimia />
                </div>
            </div>
        </div>
    );
};

export default Test;
