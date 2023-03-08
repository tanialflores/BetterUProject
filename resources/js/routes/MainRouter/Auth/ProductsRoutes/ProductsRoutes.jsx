import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const ShowProducts = lazy(() => import("../../../../pages/Auth/Products/ShowProducts/ShowProducts")) ;
const Products = lazy(() => import("../../../../pages/Auth/Products/Products"));



const ProductsRoutes = () => {
    return (
        <Routes>
            <Route
                path="/products"
                element={
                    <Suspense fallback={<></>}>
                        <Products />
                    </Suspense>
                }
            />
             <Route
                path="/products/:id/show"
                element={
                    <Suspense fallback={<></>}>
                        <ShowProducts />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default ProductsRoutes;
