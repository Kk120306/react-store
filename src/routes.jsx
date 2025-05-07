import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Store from "./components/Store/Store";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/Store/ProductPage/ProductPage";
import Checkout from "./components/Checkout/Checkout";  

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/store",
                element: <Store />,  
            },
            {
                path: "/store/:productName",  
                element: <ProductPage />, 
            },
            {
                path: "/checkout",
                element: <Checkout />,
            }
        ]
    }
];

export default routes;
