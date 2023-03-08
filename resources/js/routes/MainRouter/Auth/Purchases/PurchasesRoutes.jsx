import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ChatSkelton from "../../../../pages/Auth/Purchases/Chat/ChatSkelton";
const Chat = lazy(() => import("../../../../pages/Auth/Purchases/Chat/Chat"));
import PurchasesSkeleton from "../../../../pages/Auth/Purchases/PurchasesSkeleton";
import RateExperienceSkeleton from "../../../../pages/Auth/Purchases/RateExperience/RateExperienceSkeleton";
import ReceiptProductSkeleton from "../../../../pages/Auth/Purchases/ReceiptProduct/ReceiptProductSkeleton";
const ReceiptProduct = lazy(() => import("../../../../pages/Auth/Purchases/ReceiptProduct/ReceiptProduct"));
import RescheduleSkeleton from "../../../../pages/Auth/Purchases/Reschedule/RescheduleSkeleton";
const Reschedule = lazy(() => import("../../../../pages/Auth/Purchases/Reschedule/Reschedule"));
const Receipt = lazy(() => import("../../../../pages/Auth/Purchases/Receipt/Receipt"));
const RateExperience = lazy(() => import("../../../../pages/Auth/Purchases/RateExperience/RateExperience")) ;
const Purchases = lazy(() => import( "../../../../pages/Auth/Purchases/Purchases"));



const PurchasesRoutes = () => {
    return (
        <Routes>
            <Route
                path="/purchases"
                element={
                    <Suspense fallback={<PurchasesSkeleton />}>
                        <Purchases />
                    </Suspense>
                }
            />
            <Route
                path="/purchases/rate-experience/:id"
                element={
                    <Suspense fallback={<RateExperienceSkeleton />}>
                        <RateExperience />
                    </Suspense>
                }
            />
            <Route
                path="/purchases/receipt/:id/:type"
                element={
                    <Suspense fallback={<RateExperienceSkeleton />}>
                        <Receipt />
                    </Suspense>
                }
            />
            <Route
                path="/purchases/reschedule/:id"
                element={
                    <Suspense fallback={<RescheduleSkeleton />}>
                        <Reschedule />
                    </Suspense>
                }
            />
            <Route
                path="/purchases/receipt-product/:id/:type"
                element={
                    <Suspense fallback={<ReceiptProductSkeleton />}>
                        <ReceiptProduct />
                    </Suspense>
                }
            />
             <Route
                path="/purchases/chat/:id"
                element={
                    <Suspense fallback={<ChatSkelton />}>
                        <Chat />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default PurchasesRoutes;