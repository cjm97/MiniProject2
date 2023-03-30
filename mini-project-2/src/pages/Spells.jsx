import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SpellList from "../components/SpellList";


export default function Spells() {

  return (
    <Box sx={{ flexGrow: 1 }} className="container">
      <Grid container spacing={2}>
        <SpellList />
      </Grid>
    </Box>
  );
}
