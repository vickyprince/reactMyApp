import React, { useState, useEffect } from "react";
// import createMuiTheme from "./createMuiTheme";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";
import { spacing } from "@material-ui/system";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import { Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import logo from './MoneyTransfer.svg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';



const transitionDuration = 1000;
const transitionDuration1 = 900;
const transitionDuration3 = 500;
const transitionDuration4 = 700;

const useStyles = makeStyles(theme => ({
 
  paper1: {
    margin: theme.spacing(1),
  },
//   verify:{
//     animation: "aa 1s 0s ease-in 1"
//   },

//   "@keyframes aa" :
// {
//   from: {
//     pacity: "1"
//   },
//   to: {
//     opacity: "0",
    
// }
  
// } ,

  card: {
    marginTop: "50px",
    maxWidth: 700,
    maxHeight: 700
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flex: "1 0 auto",
    margin: theme.spacing(1)
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  buttonPadding: {
    padding: "10px"
  },
  table: {
    minWidth: 650
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  message: {
    "&::before": {
      content: "'Global font size: 16px'",
      [theme.breakpoints.up("sm")]: {
        content: "'Global font size: 18px'"
      },
      [theme.breakpoints.up("md")]: {
        content: "'Global font size: 20px'"
      },
      [theme.breakpoints.up("lg")]: {
        content: "'Global font size: 24px'"
      }
    }
  }
}));

export default function Details() {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [Transaction, setTransaction] = useState("");
  const [Passport, setPassport] = useState("");
  const [Visa, setVisa] = useState("");
  const [value, setValue] = React.useState(
    localStorage.getItem('myValueInLocalStorage') || ''
  );
  const [valueN, setValueN] = React.useState(
    localStorage.getItem('myValueInLocal') || ''
  );

 

  useEffect(()=>{
  
      window.scrollTo(0, 0)
      console.log("scolllef")
  },[])

  return (
    <>

<div className={classes.container}>
        <div>
      <div style={{ width: "100%" }}>
  <List component="nav" className={classes.root} aria-label="mailbox folders">
 
      <ListItem  className={classes.verify}>
        <b><ListItemText primary="Verify"/></b>
      </ListItem>
     
      <Divider />
      </List>
    
        <CardContent>
          <Typography>

            <form className={classes.root} noValidate autoComplete="off">
          
          <div elevation={4} className={classes.paper1}> 
 
              <Box
                display="flex"
                justifyContent="center"
                bgcolor="background.paper"
              >
                <img
                  src={logo}
                  width="180"
                  height="140"
                />
              </Box>
             
              </div>
        

       
          <div elevation={4} className={classes.paper}>

              <Box fontWeight="400" m={1} color="text.primary" display="flex" justifyContent="center">
                <Typography component="div" >
                  
                Please transfer <i>{value} {valueN}</i> to the below account and fill the details
                 
                        </Typography>
              </Box>
              </div>
            
              <Fade direction="bottom" in={checked} timeout={transitionDuration4}>
              <Box display="flex" justifyContent="center">
                
                <table>
                  <tbody>
                    <tr>
                      <td><Box
                          fontWeight="fontWeightRegular"
                          color="text.secondary"
                          display="flex"
                          justifyContent="flex-start"
                        >
                          Bank Name
                                </Box>

                      </td>
                      <td>
                      <Box
                          fontWeight="fontWeightBold"
                          color="text.disabled"
                        >
                          : Federal Bank
                                </Box>
                      </td>
                      </tr>
                      <tr>
                      <td>
                        <Box
                          fontWeight="fontWeightRegular"
                          color="text.secondary"
                          display="flex"
                          justifyContent="flex-end"
                        >
                          Account Number
                                </Box>
                      </td>
                      <td>
                        <Box
                          fontWeight="fontWeightBold"
                          color="text.disabled"
                        >
                          : 11234567
                                </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Box
                          fontWeight="fontWeightRegular"
                          color="text.secondary"
                        >
                          IFSC Code
                                </Box>
                      </td>
                      <td>
                        <Box
                          fontWeight="fontWeightBold"
                          color="text.disabled"
                        >
                          : FDIL000132
                                </Box>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
              </Box>
              </Fade>
              <Slide direction="left" in={checked} timeout={transitionDuration3}>
              <Box display="flex" m={1} p={1}>
                <TextField
                  variant="outlined"
                  required
                  type="number"
                  id="Transaction"
                  label="Transaction ID"
                  fullWidth
                  onChange={e => setTransaction(e.target.value)}
                />
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  m={-8}
                  p={1}
                >
                  <IconButton
                    color="primary"
                    className={classes.iconButton}
                  >
                    <Grid item>
                      <ReceiptOutlinedIcon />
                    </Grid>
                  </IconButton>
                </Box>
              </Box>
              </Slide>

              <Slide direction="left" in={checked} timeout={transitionDuration4}>
              <Box display="flex" m={1} p={1}>
                <TextField
                  variant="outlined"
                  required
                  id="Passport"
                  label="Passport Number"
                  fullWidth
                  onChange={e => setPassport(e.target.value)}
                />
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  m={-8}
                  p={1}
                >
                  <IconButton
                    color="primary"
                    className={classes.iconButton}
                  >
                    <Grid item>
                      <MenuBookRoundedIcon />
                    </Grid>
                  </IconButton>
                </Box>
                
              </Box>
              </Slide>
              <Slide direction="left" in={checked} timeout={transitionDuration1}>
              <Box display="flex" m={1} p={1}>
                <TextField
                  variant="outlined"
                  required
                  id="Visa"
                  label="Visa Number"
                  fullWidth
                  onChange={e => setVisa(e.target.value)}
                />
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  m={-8}
                  p={1}
                >
                  <IconButton
                    color="primary"
                    className={classes.iconButton}
                  >
                    <Grid item>
                      <CreditCardRoundedIcon />
                    </Grid>
                  </IconButton>
                </Box>
              </Box>
          </Slide>
          
              <Box
                fontWeight="fontWeightBold"
                m={3}
                display="flex"
                justifyContent="flex-end"
                m={1}
                p={1}
                bgcolor="background.paper"
              >
                <Link to="/Success" className="links" >
                  <Fab color="primary" aria-label="add" className={classes.button}>
                    <ArrowRightAltIcon />
                  </Fab>
                </Link>
              </Box>
            </form>
          </Typography>
        </CardContent>
        {/* </Card>
          </Box>
        </Box> */}
      </div>
      <createMuiTheme />
    </div>


          {/* </div>
        </Zoom> */}
        
      </div>  
   


   
    </>
  );
}












