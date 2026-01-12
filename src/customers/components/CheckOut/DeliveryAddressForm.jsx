import { Grid, Box, Button, TextField } from "@mui/material";

import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    const orderData = { address, navigate };

    dispatch(createOrder(orderData));
    console.log(address);
  };

  return (
    <Grid container spacing={4}>
      {/* LEFT PANEL */}
      <Grid
        size={{ xs: 12, lg: 6 }}
        className="border rounded-e-md shadow-md h-[35.5rem] overflow-y-scroll"
      >
        <Box className="p-5 border-b cursor-pointer">
          <AddressCard />
          <Button
            sx={{ mt: 2, bgcolor: "rgb(145 85 253)" }}
            size="large"
            variant="contained"
            fullWidth
          >
            Deliver Here
          </Button>
        </Box>
      </Grid>

      {/* RIGHT PANEL */}
      <Grid size={{ xs: 12, lg: 6 }}>
        <Box className="border rounded-s-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  name="firstName"
                  label="First Name"
                  fullWidth
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  name="lastName"
                  label="Last Name"
                  fullWidth
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  required
                  name="address"
                  label="Address"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField required name="city" label="City" fullWidth />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField required name="state" label="State" fullWidth />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField required name="zip" label="Zip Code" fullWidth />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                />
              </Grid>

              <Grid size={12}>
                <Button
                  type="submit"
                  sx={{ mt: 2, bgcolor: "rgb(145 85 253)" }}
                  size="large"
                  variant="contained"
                  fullWidth
                >
                  Deliver Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DeliveryAddressForm;
