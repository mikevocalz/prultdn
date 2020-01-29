import Container from "@material-ui/core/Container";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    style={{
      marginTop: 60,
      width: "100%",
      height: "auto"
    }}
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    bullets={false}
    infinite={false}
    width='100wh'
  >
    <div data-src='https://sc-schemes.s3.amazonaws.com/27498/header_image.jpg' />
    <div data-src='https://www.toytriangle.com/sites/default/files/styles/header_image___1600x500/public/power_rangers_header.jpg?itok=Z4kXntIo' />
    <div
      style={{ top: "0px", left: "0px", position: "relative" }}
      data-src='https://i.pinimg.com/originals/fc/91/78/fc9178ccca72df238ee3934c738d1d11.png'
    />
    <div data-src='https://assets2.ignimgs.com/2016/05/06/alien-power-rangersjpg-6da490.jpg' />
    <div data-src='https://assets1.ignimgs.com/2016/05/06/zeo-power-rangersjpg-6da495.jpg' />
    <div data-src='https://assets2.ignimgs.com/2016/05/06/turbo-power-rangersjpg-652e61.jpg' />
  </AutoplaySlider>
);
export default function Index() {
  return (
    <Container
      maxWidth='lg'
      style={{
        marginTop: 0,
        backgroundColor: "yellow",
        padding: 0
      }}
    >
      <div>
        {slider}
        <div
          onClick={() => window.alert()}
          style={{
            cursor: "pointer",
            borderRadius: 10,
            marginTop: "-80px",
            marginLeft: "5%",
            zIndex: 1000,
            padding: 5,
            width: 250,
            height: 60,
            backgroundColor: "red",
            position: "relative",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: "15px",
            textTransform: "capitalize",
            color: "white"
          }}
        >
          BUTTON{" "}
        </div>
      </div>
      <div style={{ padding: 30, fontSize: 20 }}>Home</div>
      <div style={{ height: 4000, overflow: "auto" }}></div>
    </Container>
  );
}
//display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20
