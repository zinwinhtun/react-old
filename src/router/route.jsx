import App from "../App";
import Layout from "../components/Layout";
import ErrorPage from "../Pages/ErrorPage";
import MyCart from "../Pages/MyCart";
import ProductDetail from "../Pages/ProductDetail";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage/>,
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
                path: '/productdetail/:slag',
                element: <ProductDetail />,
            },
        ],
    }
]);

export default router