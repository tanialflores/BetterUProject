import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RuteSkeleton from "../../../../pages/Auth/Rute/RuteSkeleton";
const Rute = lazy(() => import("../../../../pages/Auth/Rute/Rute"));



const RuteRoutes = () => {
    return (
        <Routes>
            <Route
                path="/rute"
                element={
                    <Suspense fallback={<RuteSkeleton />}>
                        <Rute />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default RuteRoutes;