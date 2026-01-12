import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const Order = () => {
  const orderStatus = [
    {
      label: "On Theb Way",
      value: "On_the_way",
    },
    {
      label: "Delivered",
      value: "delivered",
    },
    {
      label: "Cancelled",
      value: "cancelled",
    },
    {
      label: "Returned",
      value: "returned",
    },
  ];
  return (
    <div className="px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid size={{ xs: 2.5 }}>
          <div className="h-auto bg-white p-5 sticky shadow-lg">
            <h1 className="text-lg font-semibold">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="fontSemi\">ORDER STATUS</h1>
              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={option.value}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid size={{ xs: 9 }}>
          <div className="space-y-5">
            {[1, 1, 1, 1, 1].map((item) => (
              <OrderCard />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
