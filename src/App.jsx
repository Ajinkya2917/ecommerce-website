import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./customers/components/Navbar/Navigation";
import Home from "./customers/pages/Home";
import Footer from "./customers/components/Footer/Footer";
import Product from "./customers/components/Product/Product";
import ProductDetails from "./customers/components/ProductDetails/ProductDetails";
import Cart from "./customers/components/Cart/Cart";
import CheckOut from "./customers/components/CheckOut/CheckOut";
import Order from "./customers/components/Order/Order";
import OrderDetails from "./customers/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>

      {/* <div>
        
      </div>

      <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
