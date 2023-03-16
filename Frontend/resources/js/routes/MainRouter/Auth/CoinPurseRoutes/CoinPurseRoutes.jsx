import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CoinPurseSkeleton from "../../../../pages/Auth/CoinPurse/CoinPurseSkeleton";
const NewMethod = lazy(() => import("../../../../pages/Auth/CoinPurse/NewMethod/NewMethod")) ;
const CoinPurse = lazy(() => import("../../../../pages/Auth/CoinPurse/CoinPurse")) ;

//Styles

const CoinPurseRoutes = () => {
    return (
        <Routes>
            <Route
                path="/coinPurse"
                element={
                    <Suspense fallback={<CoinPurseSkeleton />}>
                        <CoinPurse />
                    </Suspense>
                }
            />
             <Route
                path="/coinPurse/new-method"
                element={
                    <Suspense fallback={<></>}>
                        <NewMethod />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default CoinPurseRoutes;
