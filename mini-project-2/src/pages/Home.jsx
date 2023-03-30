import React from "react";
import HeroItem from "../components/HeroItem";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { heroItemList } from "../components/ListItems";


export default function Home() {
  return (
    <section id="hero__section">
      <h1 className="hero__header">Welcome to Wizarding World!</h1>
      <h3 className="hero__subheader">
        View your favourite magical-related things here, whether it's:
      </h3>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} lg={4}>
            <HeroItem
              name={heroItemList[2]["name"]}
              description={heroItemList[2]["description"]}
              imageURL={heroItemList[2]["imageURL"]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <HeroItem
              name={heroItemList[1]["name"]}
              description={heroItemList[1]["description"]}
              imageURL={heroItemList[1]["imageURL"]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <HeroItem
              name={heroItemList[0]["name"]}
              description={heroItemList[0]["description"]}
              imageURL={heroItemList[0]["imageURL"]}
            />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
