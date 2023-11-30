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
import AllUser from "../Components/AllUser/AllUser";
import AdminArticles from "../Components/adminArticles/adminArticles";
import AddPublisher from "../Components/AddPublisher/AddPublisher";
import AdminDashboard from "../Components/AdminDashboard/AdminDashboard";
import ErrorPage from "../Pages/ErrorPage";
import MyArticles from "../Pages/MyArticles";
import PrivateRoute from "./PrivateRoute";
import UpdateArticles from "../Pages/UpdateArticles";
import AllArticlesViewDetails from "../Pages/AllArticlesViewDetails";
import Subscription from "../Pages/Subscription";
import CheckPayment from "../Pages/CheckPayment";
import Payment from "../Pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <AddArticles></AddArticles>
          </PrivateRoute>
        ),
      },
      {
        path: "/allArticles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "/subscription",
        element: (
          <PrivateRoute>
            <Subscription></Subscription>
          </PrivateRoute>
        ),
      },
      {
        path: "/myArticles",
        element: (
          <PrivateRoute>
            <MyArticles></MyArticles>
          </PrivateRoute>
        ),
      },
      {
        path: "/premiumArticles",
        element: (
          <PrivateRoute>
            <PremiumArticles></PremiumArticles>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkPayment",
        element: <CheckPayment></CheckPayment>,
      },
      {
        path: "/payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "/updateArticle/:id",
        element: <UpdateArticles></UpdateArticles>,
        loader: ({ params }) =>
          fetch(
            `https://daily-news-hazel-seven.vercel.app/add-articles/update/${params.id}`
          ),
      },
      {
        path: "/allArticlesViewDetails/:id",
        element: <AllArticlesViewDetails></AllArticlesViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://daily-news-hazel-seven.vercel.app/add-articles/viewDetails/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "adminDashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "allUser",
        element: <AllUser></AllUser>,
      },
      {
        path: "adminArticles",
        element: <AdminArticles></AdminArticles>,
      },
      {
        path: "addPublisher",
        element: <AddPublisher></AddPublisher>,
      },
    ],
  },
]);

export default router;
