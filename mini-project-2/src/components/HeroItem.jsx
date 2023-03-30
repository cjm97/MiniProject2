import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


export default function HeroItem({
  name,
  description = "Not found!",
  imageURL,
  altText = "Not found!",
}) {
  return (
    <Card className="hero__item--card">
      <CardActionArea href={name.toLowerCase()}>
        <CardMedia
          component="img"
          height="280"
          image={imageURL}
          alt={altText}
        />

        <CardContent className="hero__card--content">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
