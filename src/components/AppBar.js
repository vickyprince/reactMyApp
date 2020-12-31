import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));


export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed"> 
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Money Xchange
          </Typography>
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
               
                color="inherit"
              >
                <AccountCircle /> 
              </IconButton>
              <h4 style={{color:"white", fontWeight:"bold"}}>Vicky Prince</h4>
        </Toolbar>
       
      </AppBar>

    </div>
  );
}
