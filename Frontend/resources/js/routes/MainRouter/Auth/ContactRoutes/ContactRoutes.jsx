import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Contact = lazy(() => import("../../../../pages/Auth/Contact/Contact"));
//Styles

const ContactRoutes = () => {
    return (
        <Routes>
            <Route
                path="/contact"
                element={
                    <Suspense fallback={< ></>}>
                        <Contact />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default ContactRoutes;