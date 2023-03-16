import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const FilterDestiny = lazy(() =>
    import("../../../../pages/Auth/Destiny/FilterDestiny/FilterDestiny")
);
const ShowDestiny = lazy(() =>
    import("../../../../pages/Auth/Destiny/ShowDestiny/ShowDestiny")
);
const Destiny = lazy(() => import("../../../../pages/Auth/Destiny/Destiny"));

//Styles

const DestinyRoutes = () => {
    return (
        <Routes>
            <Route
                path="/destiny"
                element={
                    <Suspense fallback={<></>}>
                        <Destiny />
                    </Suspense>
                }
            />
            <Route
                path="/destiny/show/:id"
                element={
                    <Suspense fallback={<></>}>
                        <ShowDestiny />
                    </Suspense>
                }
            />
            <Route
                path="/destiny/show/:id/filter"
                element={
                    <Suspense fallback={<></>}>
                        <FilterDestiny />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default DestinyRoutes;
