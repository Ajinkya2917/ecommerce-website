import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/account/order/${5}`);
      }}
      className="p-5 shadow-md shadow-black hover:shadow-2xl border mt-7"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid size={{ xs: 6 }}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <h1>ALY JOHN</h1>
              <p className="mb-2"> Men Solid Pure Cotton Straight Kurta</p>
              <p className="opacity-50 text-xs font-semibold">Size : M</p>
              <p className="opacity-50 text-xs font-semibold">color : White</p>
            </div>
          </div>
        </Grid>

        <Grid item size={{ xs: 2 }}>
          <p>₹1500</p>
        </Grid>

        <Grid item size={{ xs: 4 }}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2"
                />
                <span>Delivered on March 03</span>
              </p>
              <p className="text-xs">Your Item has Delivered</p>
            </div>
          )}

          {false && (
            <p>
              <span> Expected Delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
