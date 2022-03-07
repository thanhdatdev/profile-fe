import React from "react";
import { Container as MuiContainer, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import * as Color from "./color";
import * as Typography from "./typography";
import * as Sizing from "./sizing";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    // [theme.breakpoints.up("md")]: {
    //   paddingLeft: 16,
    //   paddingRight: 16,
    // },
    // [theme.breakpoints.up("md")]: {
    //   paddingLeft: 32,
    //   paddingRight: 32,
    // },
  },
}));

function Container({ children }) {
  const classes = useStyles();
  return (
    <MuiContainer maxWidth="lg" className={classes.container}>
      {children}
    </MuiContainer>
  );
}

Container.propTypes = {
  children: PropTypes.bool.isRequired,
};

export { Typography, Color, Sizing, Container };
