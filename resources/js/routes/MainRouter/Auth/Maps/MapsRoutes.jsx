import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MapsSkeleton from "../../../../pages/Auth/Maps/MapsSkeleton";
const Maps = lazy(() => import("../../../../pages/Auth/Maps/Maps"));



const MapsRoutes = () => {
    return (
        <Routes>
            <Route
                path="/map"
                element={
                    <Suspense fallback={<MapsSkeleton />}>
                        <Maps />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default MapsRoutes;