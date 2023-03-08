import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../../../../pages/Auth/Home/Home"));

//Styles

const HomeRoutes = () => {
    return (
        <Routes>
            <Route
                path="/home"
                element={
                    <Suspense fallback={<></>}>
                        <Home />
                    </Suspense>
                }
            />
            <Route
                path="/"
                element={
                    <Suspense fallback={<></>}>
                        <Home />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default HomeRoutes;
