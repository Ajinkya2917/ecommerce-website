import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../customers/pages/Home";
import Cart from "../customers/components/Cart/Cart";
import Footer from "../customers/components/Footer/Footer";
import Product from "../customers/components/Product/Product";
import ProductDetails from "../customers/components/ProductDetails/ProductDetails";
import Navigation from "../customers/components/Navbar/Navigation";
import CheckOut from "../customers/components/CheckOut/CheckOut";
import Order from "../customers/components/Order/Order";
import OrderDetails from "../customers/components/Order/OrderDetails";
import Paymentsuccess from "../customers/components/Payment/Paymentsuccess";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Home />}></Route>
        <Route path="/register" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
        <Route path="/payment/:orderId" element={<Paymentsuccess />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
