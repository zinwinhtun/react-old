import App from "../App";
import Layout from "../components/Layout";
import MyCart from "../Pages/MyCart";
import ProductDetail from "../Pages/ProductDetail";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/mycart',
                element: <MyCart />,
            },
            {
                path: '/productdetail/:id',
                element: <ProductDetail />,
            },
        ],
    }
]);

export default router