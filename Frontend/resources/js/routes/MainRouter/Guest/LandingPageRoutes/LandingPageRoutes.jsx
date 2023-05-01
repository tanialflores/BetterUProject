import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//Lazy
const LandingPage = lazy(() => import("../../../../pages/Guest/LandingPage/LandingPage"));
const Tips = lazy(() => import("../../../../pages/Guest/Tips/Tips"));
const Start = lazy(() => import("../../../../pages/Guest/Start/Start"));
const Blog = lazy(() => import("../../../../pages/Guest/Blog/Blog"));

import TipsSkeleton from "../../../../pages/Guest/Tips/TipsSkeleton";
import LandingSkeleton from "../../../../pages/Guest/LandingPage/LandingSkeleton";
import StartSkeleton from "../../../../pages/Guest/Start/StartSkeleton";
import BlogSkeleton from "../../../../pages/Guest/Blog/BlogSkeleton";
import Test from "../../../../pages/Guest/Test/test";

const LandingPageRoutes = () => {

    return (
        // <GuestLayout>
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<LandingSkeleton />}>
                        <LandingPage />
                    </Suspense>
                }
            />
            <Route
                path="/tips"
                element={
                    <Suspense fallback={<TipsSkeleton />}>
                        <Tips />
                    </Suspense>
                }
            />
            <Route
                path="/blog"
                element={
                    <Suspense fallback={<BlogSkeleton />}>
                        <Blog />
                    </Suspense>
                }
            />
            <Route
                path="/start"
                element={
                    <Suspense fallback={<StartSkeleton />}>
                        <Start />
                    </Suspense>
                }
            />
            <Route
                path="/test"
                element={
                    <Suspense fallback={<div/>}>
                        {<Test/>} 
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default LandingPageRoutes;
