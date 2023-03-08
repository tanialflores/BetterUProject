import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//components
const TermsAndConditions = lazy(() => import("../../../../pages/Auth/Legal/TermsAndConditions/TermsAndConditions"));
const Legal = lazy(() => import("../../../../pages/Auth/Legal/Legal"));
const PrivacyPolicies = lazy (() => import("../../../../pages/Auth/Legal/PrivacyPolicies/PrivacyPolicies"));
const FrecuentQuestions = lazy (() => import ("../../../../pages/Auth/Legal/FrecuentQuestions/FrecuentQuestions"));
//Skeleton
import LegalSkeleton from "../../../../pages/Auth/Legal/LegalSkeleton";
import PrivacyPoliciesSkeleton from "../../../../pages/Auth/Legal/PrivacyPolicies/PrivacyPoliciesSkeleton";
import TermsAndConditionsSkeleton from "../../../../pages/Auth/Legal/TermsAndConditions/TermsAndConditionsSkeleton";
import FrecuentQuestionsSkeleton from "../../../../pages/Auth/Legal/FrecuentQuestions/FrecuentQuestionsSkeleton";

const LegalsRoutes = () => {
    return (
        <Routes>
            <Route
                path="/legals"
                element={
                    <Suspense fallback={<LegalSkeleton/>}>
                        <Legal/>
                    </Suspense>
                }
            />
            <Route
                path="/legals/terms-conditions"
                element={
                    <Suspense fallback={<TermsAndConditionsSkeleton/>}>
                        <TermsAndConditions/>
                    </Suspense>
                }
            />
            <Route
                path="/legals/privacy-policies"
                element={
                    <Suspense fallback={<PrivacyPoliciesSkeleton/>}>
                        <PrivacyPolicies/>
                    </Suspense>
                }
            />
            <Route
                path="/legals/frecuent-questions"
                element={
                    <Suspense fallback={<FrecuentQuestionsSkeleton/>}>
                        <FrecuentQuestions/>
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default LegalsRoutes;