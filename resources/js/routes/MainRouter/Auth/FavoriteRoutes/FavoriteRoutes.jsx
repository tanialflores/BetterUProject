import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//Components
const Favorites = lazy(() => import("../../../../pages/Auth/Favorites/Favorites"));

//Skeletons
import FavoritesSkeleton from "../../../../pages/Auth/Favorites/FavoritesSkeleton";
import ShowFavorites from "../../../../pages/Auth/Favorites/ShowFavorites/ShowFavorites";

const FavoriteRoutes = () => {
    return (
        <Routes>
            <Route
                path="/favorite"
                element={
                    <Suspense fallback={<FavoritesSkeleton/>}>
                        <Favorites/>
                    </Suspense>
                }
            />
            <Route
                path="/favorite/show"
                element={
                    <Suspense fallback={<FavoritesSkeleton/>}>
                        <ShowFavorites/>
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default FavoriteRoutes;