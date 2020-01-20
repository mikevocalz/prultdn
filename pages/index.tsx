import Container from "@material-ui/core/Container";
import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Link from 'next/link';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    style={{
      marginTop: 0,
      width: '100%',
      height: 'auto'
    }}
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    infinite={false}
    width="100wh"
  > 
  
    <div data-src="https://sc-schemes.s3.amazonaws.com/27498/header_image.jpg" onClick="window.location='http://google.com';" />
    <div data-src="https://www.toytriangle.com/sites/default/files/styles/header_image___1600x500/public/power_rangers_header.jpg?itok=Z4kXntIo" />
    <div data-src="https://assets1.ignimgs.com/2016/05/06/ninjetti-power-rangersjpg-652e60.jpg" />
    <div data-src="https://assets2.ignimgs.com/2016/05/06/alien-power-rangersjpg-6da490.jpg" />
    <div data-src="https://assets1.ignimgs.com/2016/05/06/zeo-power-rangersjpg-6da495.jpg" />
    <div data-src="https://assets2.ignimgs.com/2016/05/06/turbo-power-rangersjpg-652e61.jpg" />
  </AutoplaySlider>
);
export default function Index() {
  return (
    <Container maxWidth="xl" style={{padding:0}}>

      <div>
       { slider }
      </div>
      <div style={{height: 4000}}>

      </div>
     
    </Container>
  ) 
}
 
  