import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "../../../components/organisms/GuestLayout/GuestLayout";
import LandingPageRoutes from "./LandingPageRoutes/LandingPageRoutes";
import UsersRoutes from "./Users/UsersRoutes";

const  Guest = ({}) => {
    return (
        <>
            <GuestLayout>
                <LandingPageRoutes />
                <UsersRoutes />
            </GuestLayout>
        </>
        
    );
};

export default Guest;
