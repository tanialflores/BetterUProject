import React from "react";
import AuthLayout from "../../../components/organisms/AuthLayout/AuthLayout";
import DestinyRoutes from "./DestinyRoutes/DestinyRoutes";
import ExperiencesRoute from "./ExperiencesRoute/ExperiencesRoute";
import HomeRoutes from "./HomeRoutes/HomeRoutes";
import LegalsRoutes from "./LegalsRoutes/LegalsRoutes";
import MapsRoutes from "./Maps/MapsRoutes";
import ProfileRoutes from "./ProfileRoutes/ProfileRoutes";
import ProductsRoutes from "./ProductsRoutes/ProductsRoutes";
import PurchasesRoutes from "./Purchases/PurchasesRoutes";
import RuteRoutes from "./Rute/RuteRoutes";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";
import CoinPurseRoutes from "./CoinPurseRoutes/CoinPurseRoutes";
import FavoriteRoutes from "./FavoriteRoutes/FavoriteRoutes";
import ContactRoutes from "./ContactRoutes/ContactRoutes";
import NotificationsRoutes from "./NotificationsRoutes/NotificationsRoutes";

const Auth = ({ AuthFunctions }) => {

    return (
        <>
            <AuthLayout AuthFunctions={AuthFunctions}>
                <AuthHeader />
                <HomeRoutes />
                <ExperiencesRoute />
                <DestinyRoutes />
                <ProductsRoutes />
                <PurchasesRoutes />
                <LegalsRoutes />
                <MapsRoutes />
                <RuteRoutes />
                <ProfileRoutes/>
                <CoinPurseRoutes />
                <FavoriteRoutes/>
                <ContactRoutes />
                <NotificationsRoutes />
            </AuthLayout>
        </>
    );
};

export default Auth;
