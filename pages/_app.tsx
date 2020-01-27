import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";

import App from "next/app";
import Head from "next/head";
import React from "react";

import MenuAppBar from "../components/MenuAppBar";
import theme from "../themes/theme";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <title>Power Rangers Unlimited</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MenuAppBar />
          <Grid
            container
            justify='center'
            spacing={0}
            style={{ paddingTop: 0 }}
          >
            <Hidden xlUp>
              <Grid item xs>
                <Paper
                  style={{
                    padding: theme.spacing(2),
                    textAlign: "center",
                    color: theme.palette.text.secondary
                  }}
                >
                  xs
                </Paper>
              </Grid>
            </Hidden>
            <Grid item xs={12}>
              <Component {...pageProps} />
            </Grid>
            <Hidden xlUp>
              <Grid item xs style={{ alignItems: "flex-start" }}>
                <div
                  style={{
                    textAlign: "center",
                    color: "black"
                  }}
                >
                  xs
                </div>
              </Grid>
            </Hidden>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default MyApp;
