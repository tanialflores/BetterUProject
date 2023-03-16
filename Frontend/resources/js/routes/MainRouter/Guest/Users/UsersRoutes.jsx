import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() =>
    import("../../../../pages/Guest/SessionLogin/Login/Login")
);

const RecoverAccount = lazy(() =>
    import("../../../../pages/Guest/SessionLogin/RecoverAccount/RecoverAccount")
);
const RecoverCode = lazy(() =>
    import("../../../../pages/Guest/SessionLogin/RecoverCode/RecoverCode")
);
const Register = lazy(() =>
    import("../../../../pages/Guest/SessionLogin/Register/Register")
);
const RegisterInfo = lazy(() =>
    import("../../../../pages/Guest/SessionLogin/RegisterInfo/RegisterInfo")
);
const RegistrationCode = lazy(() =>
    import(
        "../../../../pages/Guest/SessionLogin/RegistrationCode/RegistrationCode"
    )
);
const TemnsAndCods = lazy(() =>
    import("../../../../pages/Guest/SessionLogin/TemnsAndCods/TemnsAndCods")
);
const UpdateAccesses = lazy(() =>
    import("../../../../pages/Guest/SessionLogin/UpdateAccesses/UpdateAccesses")
);
const WelcomeRegistration = lazy(() =>
    import(
        "../../../../pages/Guest/SessionLogin/WelcomeRegistration/WelcomeRegistration"
    )
);

//Skeletons
import LoginSkelton from "../../../../pages/Guest/SessionLogin/Login/LoginSkelton";
import RecoverAccountSkeleton from "../../../../pages/Guest/SessionLogin/RecoverAccount/RecoverAccountSkeleton";
import RecoverCodeSkeleton from "../../../../pages/Guest/SessionLogin/RecoverCode/RecoverCodeSkeleton";
import RegisterSkeleton from "../../../../pages/Guest/SessionLogin/Register/RegisterSkeleton";
import RegisterInfoSkeleton from "../../../../pages/Guest/SessionLogin/RegisterInfo/RegisterInfoSkeleton";
import RegistrationCodeSkeleton from "../../../../pages/Guest/SessionLogin/RegistrationCode/RegistrationCodeSkeleton";
import TemnsAndCodsSkeleton from "../../../../pages/Guest/SessionLogin/TemnsAndCods/TemnsAndCodsSkeleton";
import UpdateAccessesSkeleton from "../../../../pages/Guest/SessionLogin/UpdateAccesses/UpdateAccessesSkeleton";
import WelcomeRegistrationSkeleton from "../../../../pages/Guest/SessionLogin/WelcomeRegistration/WelcomeRegistrationSkeleton";

const UsersRoutes = ({ AuthFunctions }) => {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <Suspense fallback={<LoginSkelton />}>
                        <Login AuthFunctions={AuthFunctions} />
                    </Suspense>
                }
            />
            <Route
                path="/recover-account"
                element={
                    <Suspense fallback={<RecoverAccountSkeleton />}>
                        <RecoverAccount />
                    </Suspense>
                }
            />
            <Route
                path="/recover-code"
                element={
                    <Suspense fallback={<RecoverCodeSkeleton />}>
                        <RecoverCode />
                    </Suspense>
                }
            />
            <Route
                path="/update-access"
                element={
                    <Suspense fallback={<UpdateAccessesSkeleton />}>
                        <UpdateAccesses />
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
            <Route
                path="/register-code"
                element={
                    <Suspense fallback={<RegistrationCodeSkeleton />}>
                        <RegistrationCode />
                    </Suspense>
                }
            />
            <Route
                path="/register-info"
                element={
                    <Suspense fallback={<RegisterInfoSkeleton />}>
                        <RegisterInfo />
                    </Suspense>
                }
            />
            <Route
                path="/termin-and-conditions"
                element={
                    <Suspense fallback={<TemnsAndCodsSkeleton />}>
                        <TemnsAndCods />
                    </Suspense>
                }
            />
            <Route
                path="/welcome-user"
                element={
                    <Suspense fallback={<WelcomeRegistrationSkeleton />}>
                        <WelcomeRegistration />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default UsersRoutes;
