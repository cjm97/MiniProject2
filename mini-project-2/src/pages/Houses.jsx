import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import HouseCard from "../components/HouseCard";

export default function Houses() {
  return (
    <Box sx={{ flexGrow: 1 }} className="container">
      <Grid container spacing={2}>
        <HouseCard />
      </Grid>
    </Box>
  );
}
