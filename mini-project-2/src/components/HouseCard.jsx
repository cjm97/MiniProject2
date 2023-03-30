import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HouseCard({
  name,
  description = "Not found!",
  imageURL,
  altText = "Not found!",
}) {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    fetch("https://wizard-world-api.herokuapp.com/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      });
  }, []);

  return (
    <>
      <h1 className="page__header">Houses of Hogwarts</h1>
      {houses.map((house) => (
        <Grid item xs={12} sm={6} md={3} key={house.name}>
          <Card
            sx={{ height: 700 }}
            className="house__card--item"
            id={house.houseColours.toLowerCase().replace(" and ", "")}
          >
            <CardMedia
              component="img"
              height="280"
              image={"src/assets/" + house.name.toLowerCase() + ".jpg"}
              alt={house.name + "__logo"}
            />
            <Typography gutterBottom variant="h4" component="div">
              {house.name}
            </Typography>
            <CardContent>
              <Typography>House Colours:</Typography>
              <Typography gutterBottom variant="h6" component="div">
                {house.houseColours}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                {house.name === "Hufflepuff"
                  ? `The current Head of ${house.name} is ${
                      house["heads"][1]["firstName"] +
                      " " +
                      house["heads"][1]["lastName"]
                    }. `
                  : `The current Head of ${house.name} is ${
                      house["heads"][0]["firstName"] +
                      " " +
                      house["heads"][0]["lastName"]
                    }. `}
                The students of {house.name} reside in {house.commonRoom}. Their
                animal is the {house.animal}. {house.name} was founded by{" "}
                {house.founder}.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {house.name} students are known for the following traits:{" "}
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                component="span"
              >
                <ul className="trait__list">
                  {house.traits.map((trait) => (
                    <li className="trait__list--item" key={trait.name}>
                      {trait.name}
                    </li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}
