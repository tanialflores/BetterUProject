import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//Lazy
const LandingPage = lazy(() => import("../../../../pages/Guest/LandingPage/LandingPage"));
const Hosts = lazy(() => import("../../../../pages/Guest/Hosts/Hosts"));
const DownloadApp = lazy(() => import("../../../../pages/Guest/DownloadApp/DownloadApp"));
const FormAnfitrion = lazy(() => import("../../../../pages/Guest/Hosts/FormAnfitrion/FormAnfitrion"));
const ShowBlog = lazy(() => import("../../../../pages/Guest/Blog/ShowBlog/ShowBlog"));
const Start = lazy(() => import("../../../../pages/Guest/Start/Start"));
const Blog = lazy(() => import("../../../../pages/Guest/Blog/Blog"));
const Contact = lazy(() => import("../../../../pages/Guest/Contact/Contact"));
const Privacy = lazy(() => import("../../../../pages/Guest/Privacy/Privacy"));
const TmsCds = lazy(() => import("../../../../pages/Guest/Terminos/TmsCds"));

//Skeletons
import ShowBlogSkeleton from "../../../../pages/Guest/Blog/ShowBlog/ShowBlogSkeleton";
import DownloadAppSkeleton from "../../../../pages/Guest/DownloadApp/DownloadAppSkeleton";
import FormAnfitrionSkeleton from "../../../../pages/Guest/Hosts/FormAnfitrion/FormAnfitrionSkeleton";
import HostSkeleton from "../../../../pages/Guest/Hosts/HostSkeleton";
import LandingSkeleton from "../../../../pages/Guest/LandingPage/LandingSkeleton";
import StartSkeleton from "../../../../pages/Guest/Start/StartSkeleton";
import BlogSkeleton from "../../../../pages/Guest/Blog/BlogSkeleton";
import ContactSkeleton from "../../../../pages/Guest/Contact/ContactSkeleton";
import TmsCdsSkeletons from "../../../../pages/Guest/Terminos/TmsCdsSkeletons";
import PrivacySkeletons from "../../../../pages/Guest/Privacy/PrivacySkeletons";

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
                path="/downloadApp"
                element={
                    <Suspense fallback={<DownloadAppSkeleton />}>
                        <DownloadApp />
                    </Suspense>
                }
            />
            <Route
                path="/hosts"
                element={
                    <Suspense fallback={<HostSkeleton />}>
                        <Hosts />
                    </Suspense>
                }
            />
            <Route
                path="/hosts/register"
                element={
                    <Suspense fallback={<FormAnfitrionSkeleton />}>
                        <FormAnfitrion />
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
                path="/blog/:id/show"
                element={
                    <Suspense fallback={<ShowBlogSkeleton />}>
                        <ShowBlog />
                    </Suspense>
                }
            />
            <Route
                path="/contact"
                element={
                    <Suspense fallback={<ContactSkeleton />}>
                        <Contact />
                    </Suspense>
                }
            />
            <Route
                path="/terms-conditions"
                element={
                    <Suspense fallback={<TmsCdsSkeletons />}>
                        <TmsCds />
                    </Suspense>
                }
            />
            <Route
                path="/politics-privacy"
                element={
                    <Suspense fallback={<PrivacySkeletons />}>
                        <Privacy />
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
        </Routes>
    );
};

export default LandingPageRoutes;
