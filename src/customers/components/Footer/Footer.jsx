import { Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      className="bg-black text-white mt-10 text-center"
      sx={{ bgcolor: "black", color: "white", py: 3 }}
    >
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Typography className="pb-5" variant="h6">
          Company
        </Typography>
        <Typography variant="body2">About</Typography>
        <Typography variant="body2">Blog</Typography>
        <Typography variant="body2">Jobs</Typography>
        <Typography variant="body2">Press</Typography>
        <Typography variant="body2">Partners</Typography>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Typography className="pb-5" variant="h6">
          Solutions
        </Typography>
        <Typography variant="body2">Marketing</Typography>
        <Typography variant="body2">Analytics</Typography>
        <Typography variant="body2">Commerce</Typography>
        <Typography variant="body2">Insights</Typography>
        <Typography variant="body2">Support</Typography>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Typography className="pb-5" variant="h6">
          Documentation
        </Typography>
        <Typography variant="body2">Guides</Typography>
        <Typography variant="body2">API Status</Typography>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Typography className="pb-5" variant="h6">
          Legal
        </Typography>
        <Typography variant="body2">Claim</Typography>
        <Typography variant="body2">Privacy</Typography>
        <Typography variant="body2">Terms</Typography>
      </Grid>

      <Grid size={12} className="pt-20">
        <Typography variant="body2" align="center">
          © 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          Made with love by Me.
        </Typography>
        <Typography variant="body2" align="center">
          Icons by{" "}
          <Link href="https://www.freepik.com" color="inherit">
            Freepik
          </Link>{" "}
          from{" "}
          <Link href="https://www.flaticon.com" color="inherit">
            flaticon.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
