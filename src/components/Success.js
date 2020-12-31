import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import Fab from "@material-ui/core/Fab";
import check from './check.svg';

const transitionDuration = 1500;
const transitionDurationImg = 1300;

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 650,
    minHeight: 800
  },
  root: {
    height: 180
  },
  container1:{
    paddingLeft: "19px"
  }
  
}));

export default function Success() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);
  const [checked, setChecked] = React.useState(true);
  // const [check, setCheck] = React.useState("");
  // const [value1, setValue1] = React.useState(
  //   localStorage.getItem('myValueInLocalStorageName') || '' 
  //   // setCheck({check:myValueInLocalStorageName})
  const [value2, setValue2] = React.useState(
    localStorage.getItem('myValueInLocalStorageName2') || '' 
    // setCheck({check:myValueInLocalStorageName2})
  );

  return (
    <Box display="flex" justifyContent="center">
      <Card className={classes.card} >
        <CardContent>
          <Box display="flex" justifyContent="center" m={4} p={1}>
            <div className={classes.root}>
              <div className={classes.container}>
                <Box
                  display="flex"
                  justifyContent="center"
                  fontWeight="fontWeightRegular"
                  m={5}
                  mt={0}
                  color="text.primary"
                >
                  <Grow in={checked} timeout={transitionDurationImg}>
                    <div elevation={4} className={classes.paper}>
                      <img src={check} height="100px" width="100px" />
                    </div>

                  </Grow>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  fontWeight="fontWeightRegular"
                  m={5}
                  mt={0}
                  color="text.primary"
                >
                  <Grow in={checked} timeout={transitionDurationImg}>
                  <h2>Congratulations!</h2>
                  </Grow>
                </Box>


              </div>
            </div>
          </Box>
        </CardContent>
        <CardContent>
          <div className={classes.root}>
            <div className={classes.container}>
              <Grow in={checked} timeout={transitionDuration}>
                <Box
                  display="flex"
                  justifyContent="center"
                  fontWeight="fontWeightRegular"
                  m={5}
                  mt={-2}
                  color="text.primary"
                >
                  <div elevation={4} className={classes.paper}>
                    {/* <Typography>Submitted Successfully</Typography> */}


                    <box display="flex" justifyContent="center" >
                    <Typography className={classes.container1} >
                          Your Order has been placed.
                       </Typography>
                       <box display="flex" justifyContent="center">
                       <Typography>
                      Get the money - {value2}
                     
                    </Typography>
                    </box>
                    </box>
                  </div>
                </Box>
              </Grow>
            </div>
          </div>
        </CardContent>
        {/* <CardContent> */}
        {
          <Box display="flex" justifyContent="center">
            <Link to="/exchange" className="links">
              <Grow in={checked} timeout={transitionDurationImg}>
                <div>
                  <Fab variant="extended" color="primary">
                    Place another order
                      </Fab>
                </div>
              </Grow>
            </Link>           
          </Box>
        }
      </Card>
    </Box>
  );
}
