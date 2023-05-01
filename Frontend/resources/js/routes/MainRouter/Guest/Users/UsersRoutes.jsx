import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() =>
    import("../../../../pages/Guest/SessionLogin/Login/Login")
);
const Register = lazy(() =>
    import("../../../../pages/Guest/SessionLogin/Register/Register")
);


//Skeletons
import LoginSkelton from "../../../../pages/Guest/SessionLogin/Login/LoginSkelton";
import RegisterSkeleton from "../../../../pages/Guest/SessionLogin/Register/RegisterSkeleton";


const UsersRoutes = ({ }) => {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <Suspense fallback={<LoginSkelton />}>
                        <Login />
                    </Suspense>
                }
            />
            <Route
                path="/register"
                element={
                    <Suspense fallback={<RegisterSkeleton />}>
                        <Register />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default UsersRoutes;
