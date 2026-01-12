import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1
          className="font-bold text-xl py-7
        "
        >
          Delivery Address
        </h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container justifyContent="center" className="space-y-4 ">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid container size={{ xs: 12, md: 10 }}>
            {/* CARD */}
            <Grid
              container
              size={12}
              className=" rounded-md border bg-white shadow-md shadow-black hover:shadow-2xl"
              alignItems="center"
              sx={{
                px: 4,
                py: 5, // 👈 vertical breathing space
                minHeight: 220, // 👈 taller card
              }}
            >
              {/* LEFT */}
              <Grid size={{ xs: 12, md: 8 }}>
                <div className="flex items-center gap-6">
                  <img
                    className="w-[5.5rem] h-[5.5rem] object-cover rounded"
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu-bb.jpeg?q=70"
                    alt=""
                  />

                  <div className="space-y-2">
                    <p className="font-semibold text-base">
                      Men's Printed Cotton Blend Straight Kurta
                    </p>

                    <p className="flex gap-4 text-xs font-semibold text-gray-500">
                      <span>Color: Yellow</span>
                      <span>Size: M</span>
                    </p>

                    <p className="text-sm">Seller: linearia</p>
                    <p className="font-bold text-lg">₹1099</p>
                  </div>
                </div>
              </Grid>

              {/* RIGHT */}
              <Grid
                size={{ xs: 12, md: 4 }}
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Box
                  sx={{
                    color: deepPurple[500],
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <StarBorderIcon sx={{ fontSize: "2.2rem" }} />
                  <span className="font-semibold text-sm">
                    Rate & Review Product
                  </span>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
