import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "../../../components/organisms/GuestLayout/GuestLayout";
import ExperiencesRoute from "../Auth/ExperiencesRoute/ExperiencesRoute";
import LandingPageRoutes from "./LandingPageRoutes/LandingPageRoutes";
import UsersRoutes from "./Users/UsersRoutes";

const  Guest = ({}) => {
    return (
        <>
            <GuestLayout>
                <LandingPageRoutes />
                <UsersRoutes />
                <ExperiencesRoute></ExperiencesRoute>
            </GuestLayout>
        </>
        
    );
};

export default Guest;
