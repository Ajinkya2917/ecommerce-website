import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { updatePayment } from "../../../State/Payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

const Paymentsuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);

    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [orderId, paymentId]);
  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit=content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations Your Order get placed..
        </Alert>
      </div>
      <OrderTracker activeStep={1} />

      <Grid
        container
        spacing={3}
        justifyContent="center"
        className="py-5 pt-20"
      >
        {order.order?.orderItems.map((item, index) => (
          <Grid key={index} size={{ xs: 11, sm: 10, md: 10 }}>
            <Grid
              container
              className="shadow-xl rounded-md p-8"
              sx={{
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              {/* LEFT SECTION */}
              <Grid size={7}>
                <div className="flex gap-6">
                  <img
                    className="w-[6rem] h-[6rem] object-cover object-top"
                    src={item.product.imageUrl}
                    alt=""
                  />

                  <div className="space-y-2">
                    <p className="text-lg font-medium">{item.product.title}</p>

                    <div className="opacity-50 text-xs font-semibold space-x-5">
                      <span>Color: {item.color}</span>
                      <span>Size: {item.size}</span>
                    </div>

                    <p>Seller: {item.product.brand}</p>
                    <p className="font-semibold">₹ {item.price}</p>
                  </div>
                </div>
              </Grid>

              {/* RIGHT SECTION */}
              <Grid size={4}>
                <AddressCard address={order.order?.shippingAddress} />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Paymentsuccess;
