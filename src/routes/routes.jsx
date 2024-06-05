import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ProfileManagement from "../pages/Dashboard/ProfileManagement/ProfileManagement";
import PrivateRoute from "./private/PrivateRoute";
import EditProfile from "../pages/Dashboard/EditProfile/EditProfile";
import ChangePassword from "../pages/Dashboard/EditProfile/ChangePassword";
import AddProducts from "../pages/Dashboard/AddProducts/AddProducts";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import EditProducts from "../pages/Dashboard/EditProducts/EditProducts";
import ViewDetails from "../pages/ViewDetails/ViewDetails";

export const router = createBrowserRouter([
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
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
      {
        path: "view-details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://eco-mart-server-side.vercel.app/grocers/get/${params.id}`
          ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "profile-management",
        element: (
          <PrivateRoute>
            <ProfileManagement></ProfileManagement>,
          </PrivateRoute>
        ),
      },
      {
        path: "profile/edit/:id",
        element: (
          <PrivateRoute>
            <EditProfile></EditProfile>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://eco-mart-server-side.vercel.app/user/get/${params.id}`
          ),
      },
      {
        path: "profile/edit-pass/:id",
        element: (
          <PrivateRoute>
            <ChangePassword></ChangePassword>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://eco-mart-server-side.vercel.app/user/get/${params.id}`
          ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "my-products",
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "edit-product/edit/:id",
        element: (
          <PrivateRoute>
            <EditProducts></EditProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://eco-mart-server-side.vercel.app/grocers/get/${params.id}`
          ),
      },
    ],
  },
]);
