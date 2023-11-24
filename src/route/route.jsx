import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddArticles from "../Pages/AddArticles";
import AllArticles from "../Pages/AllArticles";
import DashboardLayout from "../Layout/DashboardLayout";
import PremiumArticles from "../Pages/PremiumArticles";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addArticles",
        element: <AddArticles></AddArticles>,
      },
      {
        path: "/allArticles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "/subscription",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
      },
      {
        path: "/myArticles",
        element: <DashboardLayout></DashboardLayout>,
      },
      {
        path: "/premiumArticles",
        element: <PremiumArticles></PremiumArticles>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      }
    ]
  },
]);

export default router;
