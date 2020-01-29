import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(
  createStyles({
    card: {
      alignSelf: "center",
      margin: "auto",
      maxWidth: 500,
      borderRadius: 20,
      border: "1px solid black"
      //borderRight: "1px solid black"
    },
    media: {
      mariginTop: 30,
      maxWidth: 500,
      minHeight: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      resizeMode: "contain",
      borderColor: "black",
      backgroundColor: "black",
      zIndex: -100
      //border : 10,
      //borderColor: 'black'
    },
    titleText: {
      fontWeight: "bold"
    },
    subTextTitleText: {
      fontWeight: 600,
      fontSize: 17,
      marginTop: -10
    },
    cardAction: {
      backgroundColor: "black",
      paddingTop: 20,
      paddingLeft: 20,
      height: 60,
      marginTop: -15,
      zIndex: 100
    },
    buttonText: {
      fontWeight: "bold",
      color: "red",
      fontSize: 18
    }
  })
);

export default function ImgMediaCard({ name, thumb, description, year }: any) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Power Rangers'
          className={classes.media}
          //image='https://ewscripps.brightspotcdn.com/dims4/default/9b63b10/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.abc15.com%2Fphoto%2F2017%2F10%2F10%2FKNXV%20Power%20Rangers%20Live_1507676409591_68481358_ver1.0_640_480.jpg'
          image={thumb}
          title='Power Rangers'
        />

        <div
          style={{
            marginTop: -20,
            zIndex: 100,
            backgroundColor: "black",
            height: 20,
            borderRadius: 20,
            borderTop: "40px solid black"
          }}
        />
        <CardContent style={{ minHeight: 196 }}>
          <Typography
            gutterBottom
            variant='h6'
            component='h2'
            className={classes.titleText}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant='h6'
            component='h2'
            className={classes.subTextTitleText}
          >
            {year}
          </Typography>
          <Typography
            variant='body2'
            color='textPrimary'
            component='strong'
            style={{
              fontSize: 16
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <div
          style={{
            marginTop: -25,
            backgroundColor: "black",
            height: 20,
            borderRadius: 20,
            borderTop: "40px solid white"
          }}
        />
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button size='medium' className={classes.buttonText}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
