import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Toolbar, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const Nav = () => {
const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            App
          </Typography>
          <Button color="primary">Sign In</Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
