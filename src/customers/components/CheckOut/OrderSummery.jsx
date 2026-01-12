import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummery = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  const location = useLocation();
  const searcParams = new URLSearchParams(location.search);
  const orderId = searcParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleCheckOut = () => {
    dispatch(createPayment(orderId));
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 relative mt-5">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p
                className="uppercase font-bold opacity-60 pb-4
            "
              >
                Price details
              </p>
              <hr />
              {/* <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span class>Price</span>
                  <span className="">₹4697</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span className="">Discount</span>
                  <span className=" text-green-600">₹3419</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span class>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>

                <div className="flex justify-between pt-3 font-bold ">
                  <span className="">Total Amount</span>
                  <span className="text-green-600 ">1278</span>
                </div>
              </div> */}
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price ({order.order?.totalItem} item)</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">
                    -₹{order.order?.discounte}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">
                    ₹{order.order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>

              <Button
                variant="contained"
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
                onClick={handleCheckOut}
              >
                checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
