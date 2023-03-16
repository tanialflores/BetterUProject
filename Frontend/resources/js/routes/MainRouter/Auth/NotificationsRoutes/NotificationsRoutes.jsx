import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Notifications = lazy(() => import("../../../../pages/Auth/Notifications/Notifications"));



const NotificationsRoutes = () => {
    return (
        <Routes>
            <Route
                path="/notifications"
                element={
                    <Suspense fallback={<></>}>
                        <Notifications/>
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default NotificationsRoutes;