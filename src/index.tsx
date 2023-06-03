import ReactDOM from "react-dom/client";
import React from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Authentication from './app-oxalus/Auth/Auth';
import "./index.scss";
import 'react-loading-skeleton/dist/skeleton.css';
import LoginOxalus from './app-oxalus/Auth/Login';
import Register from './app-oxalus/Auth/Register';
import LayoutApp from './app-oxalus/App/LayoutApp';
import ResetPassword from './app-oxalus/Auth/ResetPassword';
import LayoutDasboard from './app-oxalus/App/Pages/LayoutDasboard';
import Subscribtion from './app-oxalus/App/Pages/Subscribtion/Subscribtion';
import PaymentIntruction from './app-oxalus/App/Pages/Subscribtion/PaymentIntruction';
import IndexDasboard from './app-oxalus/App/Pages/IndexDasboard';
import { LaoderLayoutApp } from "./app-oxalus/Routes/Loader/loader";
import Setting from "./app-oxalus/App/Pages/Setting/Setting";
import ResetPasswordSendEmail from "./app-oxalus/Auth/ResetPasswordSendEmail";
import Error404 from "./Error/Error404";
import { IndexHome } from "./HandeIndex";

const routes = createBrowserRouter([
    {
        path: '/',
        id: 'loader-layout-app',
        loader: LaoderLayoutApp,
        element: <LayoutApp/>,
        errorElement: <Error404/>,
        children:[
            {
                index: true,
                element: <IndexHome/>
            },
            {
                path: 'auth',
                element: <Authentication/>,
                children:[
                    {
                        index: true,
                        element: <IndexHome/>
                    },
                    {
                        path: 'login',
                        element: <LoginOxalus/>,
                    },
                    {
                        path: 'register',
                        element: <Register/>,
                    },
                    {
                        path: 'reset-password',
                        element: <ResetPasswordSendEmail/>,
                    },
                    {
                        path: 'validasi-reset-password',
                        element: <ResetPassword/>
                    }
                ]
            },
            {
                path: 'dasboard',
                element: <LayoutDasboard/>,
                children:[
                    {
                        index: true,
                        element: <IndexDasboard/>
                    },
                    {
                        path: 'subscription',
                        element: <Subscribtion/>
                    },
                    {
                        path: 'payment-intruction',
                        element: <PaymentIntruction/>,
                    },
                    {
                        path: 'setting',
                        element: <Setting/>
                    },
                ]
            }
        ],
    }
]);

const renders = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
renders.render(
    <React.Fragment>
        <RouterProvider router={routes}/>
    </React.Fragment>
)