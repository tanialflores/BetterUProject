import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Test from "../../../../pages/Guest/Test/Test";

const TestRoutes = () => {
    return (
        <Routes>
            <Route
                path="/test"
                element={
                    <Suspense fallback={<div/>}>
                        <Test/>
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default TestRoutes;
