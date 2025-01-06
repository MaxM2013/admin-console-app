import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

// const Layout = React.lazy(() => import("../layout/Layout"))
// const LoginPage = React.lazy(() => import("../pages/login/LoginPage"))
const HomePage = React.lazy(() => import('../pages/home/HomePage'))
const AboutPage = React.lazy(() => import('../pages/about/AboutPage'))
// const NotFoundPage = React.lazy(() => import("../pages/notFound/NotFoundPage"))

import Layout from  '../layout/Layout'
import LoginPage from "../pages/login/LoginPage"
// import HomePage from '../pages/home/HomePage'
// import AboutPage from '../pages/about/AboutPage'
import NotFoundPage from "../pages/notFound/NotFoundPage"
import Exam1Page from "../pages/redux-exam/Exam1Page";
import ReduxCounterPage from "../pages/redux-exam/ReduxCounterPage";
import { PostListPage } from "../pages/posts/PostListPage";


export const defaultRouters = [
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/home",
        element: <ProtectedRoute><Layout /></ProtectedRoute>,
        children: [
            {
                path: "",
                element: <ProtectedRoute><HomePage /></ProtectedRoute>
            },
            {
                path: "about",
                element: <ProtectedRoute><AboutPage /></ProtectedRoute>
            },
            {
                path: "exam1",
                element: <ProtectedRoute><Exam1Page /></ProtectedRoute>
            },
            {
                path: "reduxCounter",
                element: <ProtectedRoute><ReduxCounterPage /></ProtectedRoute>
            },
            {
                path: "posts",
                element: <ProtectedRoute><PostListPage /></ProtectedRoute>
            }     
        ]
    },
]

export const baseRouters = [
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/home",
        element: <ProtectedRoute><Layout /></ProtectedRoute>,
        children: [
            {
                path: "",
                element: <ProtectedRoute><HomePage /></ProtectedRoute>
            }      
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    } 
]

export const functionalRouters = [
    {
        meta: {
            name: 'about',
        },
        path: "about",
        element: <ProtectedRoute><AboutPage /></ProtectedRoute>
    },
    {
        meta: {
            name: 'exma1',
        },
        path: "exam1",
        element: <ProtectedRoute><Exam1Page /></ProtectedRoute>
    },
    {
        meta: {
            name: 'reduxCounter',
        },
        path: "reduxCounter",
        element: <ProtectedRoute><ReduxCounterPage /></ProtectedRoute>
    },
    {
        meta: {
            name: 'posts',
        },
        path: "posts",
        element: <ProtectedRoute><PostListPage /></ProtectedRoute>
    }     
]



// export default defaultRouters