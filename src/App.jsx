import {
  Routes,
  Route,
  useLocation,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./Pages/mainPage";
import SiginIn from "./Pages/SiginIn";
import SignUp from "./Pages/SignUp";
import DashBoard from "./Pages/DashBoard";
import ProductDetailPage from "./Pages/ProductDetailPage";
import Order from "./Pages/Order";
import Cart from "./Pages/Cart";
import UpdateProduct from "./Pages/UpdateProduct";
import Shop from "./Pages/Shop";
import Layout from "./Components/Layout";
import Contact from "./Pages/Contact";
import VerifyAccount from "./Pages/VerifyAccount";
import Profile from "./Pages/Profile";
import UpdateProfile from "./Pages/UpdateProfile";
import UpdatePassword from "./Pages/UpdatePassword";
import MyProfile from "./Pages/MyProfile";
import MyOrders from "./Pages/MyOrders";
import OrderDetails from "./Sections/DashBoard/SideBarSections/OrderDetails";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Favourite from "./Pages/Favourite";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="" element={<Layout />}>
          <Route path="" element={<MainPage />} />
          <Route path="productDetails" element={<ProductDetailPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path='/favourite' element={<Favourite/>}  />
          <Route path="order" element={<Order />} />
          <Route path="updateProduct" element={<UpdateProduct />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="Registration" element={<SiginIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="DashBoard" element={<DashBoard />} />
        <Route path="verifyAccount" element={<VerifyAccount />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="profile" element={<Profile />}>
          <Route path="updateProfile" element={<UpdateProfile />} />
          <Route path="updatePassword" element={<UpdatePassword />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="myOrders" element={<MyOrders />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
