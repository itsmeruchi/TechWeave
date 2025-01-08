import "./App.css";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword"
import Cart from "./component/Cart/Cart"
import Shipping from "./component/Cart/Shipping"
import ConfirmOrder from "./component/Cart/ConfirmOrder"
import Payment from "./component/Cart/Payment"
import OrderSuccess from "./component/Cart/OrderSuccess"
import MyOrders from "./component/Order/MyOrders"
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard"
import ProductList from "./component/Admin/ProductList"
import NewProduct from "./component/Admin/NewProduct"
import UpdateProduct from "./component/Admin/UpdateProduct"
import OrderList from "./component/Admin/OrderList"
import ProcessOrder from "./component/Admin/ProcessOrder"
import UsersList from "./component/Admin/UsersList"
import UpdateUser from "./component/Admin/UpdateUser"
import ProductReviews from "./component/Admin/ProductReviews"
import About from "./component/layout/About/About";
import Contact from "./component/layout/Contact/Contact"
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/account" element={<ProtectedRoute element={<Profile />} />} />
        <Route exact path="/me/update" element={<ProtectedRoute element={<UpdateProfile />} />} />
        <Route exact path="/password/update" element={<ProtectedRoute element={<UpdatePassword />} />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/shipping" element={<ProtectedRoute element={<Shipping />} />} />
        <Route exact path="/order/confirm" element={<ProtectedRoute element={<ConfirmOrder />} />} />
        <Route exact path="/process/payment" element={<ProtectedRoute element={<Payment />} />} />
        <Route exact path="/success" element={<ProtectedRoute element={<OrderSuccess />} />} />
        <Route exact path="/orders" element={<ProtectedRoute element={<MyOrders/>} />} />
        <Route exact path="/order/:id" element={<ProtectedRoute element={<OrderDetails />} />} />
        <Route
          path="/admin/dashboard"
          element={<ProtectedRoute isAdmin={true} element={<Dashboard />} />}
        />
        <Route
          path="/admin/products"
          element={<ProtectedRoute isAdmin={true} element={<ProductList />} />}
        />
        <Route
          path="/admin/product"
          element={<ProtectedRoute isAdmin={true} element={<NewProduct />} />}
        />
        <Route
          path="/admin/product/:id"
          element={<ProtectedRoute isAdmin={true} element={<UpdateProduct />} />}
        />
        <Route
          path="/admin/orders"
          element={<ProtectedRoute isAdmin={true} element={<OrderList />} />}
        />
        <Route
          path="/admin/order/:id"
          element={<ProtectedRoute isAdmin={true} element={<ProcessOrder />} />}
        />
        <Route
          path="/admin/users"
          element={<ProtectedRoute isAdmin={true} element={<UsersList />} />}
        />
        <Route
          path="/admin/user/:id"
          element={<ProtectedRoute isAdmin={true} element={<UpdateUser />} />}
        />
        <Route
          path="/admin/reviews"
          element={<ProtectedRoute isAdmin={true} element={<ProductReviews />} />}
        />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
