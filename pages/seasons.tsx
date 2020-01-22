import React from "react";
import Container from "@material-ui/core/Container";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
export default function About() {
  return (
    <Container
      maxWidth='xl'
      style={{
        padding: 30,
        backgroundColor: "yellow",
        justifyContent: "center"
      }}
    >
      <div style={{ padding: 30, fontSize: 20 }}>
        Regular Italic Seasons Page Here We Go👋
        <Grid container spacing={10} justify='center'></Grid>
      </div>

      <div style={{ height: 4000 }}></div>
    </Container>
  );
}
