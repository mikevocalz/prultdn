import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";

import SeasonCard from "../components/SeasonCard";
import { mockData } from "../Api/data";
export default function About() {
  return (
    <Container
      maxWidth='lg'
      style={{
        paddingTop: 30,
        //backgroundColor: "yellow",
        justifyContent: "center"
      }}
    >
      <div style={{ padding: 30, fontSize: 20 }}>
        Regular Italic Seasons Page Here We Go👋
      </div>

      <div style={{ height: 4000 }}>
        <Grid
          container
          spacing={10}
          style={{
            padding: "0"
          }}
        >
          {mockData.map(season => (
            <Grid
              key={season.id}
              alignItems='center'
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={3}
            >
              <SeasonCard
                key={season.id}
                name={season.season_title}
                thumb={season.season_thumb}
                year={season.season_year}
                description={season.season_desc}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
