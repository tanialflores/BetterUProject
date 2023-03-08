import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//components
const MyProfile = lazy(() => import("../../../../pages/Auth/MyProfile/MyProfile"));
const Levels = lazy(() => import ("../../../../pages/Auth/MyProfile/Levels/Levels"));
const EditProfile = lazy(() => import("../../../../pages/Auth/MyProfile/EditProfile/EditProfile"));
const Address = lazy(() => import("../../../../pages/Auth/MyProfile/Address/Address"));
const EditAddress = lazy(() => import("../../../../pages/Auth/MyProfile/EditAddress/EditAddress"));
const NewAddress = lazy(() => import("../../../../pages/Auth/MyProfile/NewAddress/NewAddress"));

//Skeleton
import MyProfileSkeleton from "../../../../pages/Auth/MyProfile/MyProfileSkeleton";
import LevelsSkeleton from "../../../../pages/Auth/MyProfile/Levels/LevelsSkeleton";
import EditProfileSkeleton from "../../../../pages/Auth/MyProfile/EditProfile/EditProfileSkeleton";
import AddressSkeleton from "../../../../pages/Auth/MyProfile/Address/AddressSkeleton";
import EditAddressSkeleton from "../../../../pages/Auth/MyProfile/EditAddress/EditAddressSkeleton";
import NewAddressSkeleton from "../../../../pages/Auth/MyProfile/NewAddress/NewAddressSkeleton";

const ProfileRoutes = () => {
    return (
        <Routes>
            <Route
                path="/profile"
                element={
                    <Suspense fallback={<MyProfileSkeleton/>}>
                        <MyProfile/>
                    </Suspense>
                }
            />
            <Route
                path="/profile/levels"
                element={
                    <Suspense fallback={<LevelsSkeleton/>}>
                        <Levels/>
                    </Suspense>
                }
            />
            <Route
                path="/profile/edit"
                element={
                    <Suspense fallback={<EditProfileSkeleton/>}>
                        <EditProfile/>
                    </Suspense>
                }
            />
            <Route
                path="/profile/edit-address"
                element={
                    <Suspense fallback={<EditAddressSkeleton/>}>
                        <EditAddress/>
                    </Suspense>
                }
            />
            <Route
                path="/profile/address"
                element={
                    <Suspense fallback={<AddressSkeleton/>}>
                        <Address/>
                    </Suspense>
                }
            />
            <Route
                path="/profile/new-address"
                element={
                    <Suspense fallback={<NewAddressSkeleton/>}>
                        <NewAddress/>
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default ProfileRoutes;