import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//components
const NewReserve = lazy(() => import("../../../../pages/Auth/Experiences/NewReserve/NewReserve"));
const Reserve = lazy(() => import("../../../../pages/Auth/Experiences/Reserve/Reserve"));
const ShowExperiences = lazy(() => import("../../../../pages/Auth/Experiences/ShowExperiences/ShowExperiences")) ;
const ViewExperiences = lazy(() => import( "../../../../pages/Auth/Experiences/ViewExperiences/ViewExperiences"));
const Experiences = lazy(() => import("../../../../pages/Auth/Experiences/Experiences")) ;

//Skeletons
import NewReserveSkeleton from "../../../../pages/Auth/Experiences/NewReserve/NewReserveSkeleton";
const Voucher = lazy(() => import("../../../../pages/Auth/Experiences/Voucher/Voucher"));
//Styles

const ExperiencesRoute = () => {
    return (
        <Routes>
            <Route
                path="/experiences"
                element={
                    <Suspense fallback={<></>}>
                        <Experiences />
                    </Suspense>
                }
            />
             <Route
                path="/experiences/view"
                element={
                    <Suspense fallback={<></>}>
                        <ViewExperiences />
                    </Suspense>
                }
            />
            <Route
                path="/experiences/:id"
                element={
                    <Suspense fallback={<></>}>
                        <ShowExperiences />
                    </Suspense>
                }
            />
            <Route
                path="/experiences/reserve/:id"
                element={
                    <Suspense fallback={<></>}>
                        <Reserve/>
                    </Suspense>
                }
            />
            <Route
                path="experiences/new-reserve/:id"
                element={
                    <Suspense fallback={<NewReserveSkeleton/>}>
                        <NewReserve/>
                    </Suspense>
                }
            />
             <Route
                path="experiences/payment-method/:id"
                element={
                    <Suspense fallback={<NewReserveSkeleton/>}>
                        <Voucher/>
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default ExperiencesRoute;
