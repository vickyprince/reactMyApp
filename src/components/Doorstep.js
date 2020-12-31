import React from "react";
// import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Route, Link } from "react-router-dom";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import Paper from "@material-ui/core/Paper";
// import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";
const transitionDuration = 400;
const transitionDuration1 = 600;
const transitionDuration2 = 800;
const transitionDuration3 = 1000;
const transitionDuration5 = 2500;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    // maxWidth: "28%",
    // maxHeight: "300%"
  },
  textfield: {
    "& > *": {
      margin: theme.spacing(0),
      // width: '100%'
      width: 300
    }
  },
  card1: {
    // maxHeight: "2%"
  },
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
    maxWidth: 500,
  },
  button: {
    // marginLeft: "70%",
    float: "right",
    marginTop: "3%",
    maxWidth: "50%"
  }
}));

export default function Doorstep() {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [checked, setChecked] = React.useState(true);
  const [FadeChecked, setFadeChecked] = React.useState(true);
  const [name, setName] = React.useState("At your Doorstep");

  const classes = useStyles();
 

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

 const handleChangeMode=(e)=>{
  localStorage.setItem('myValueInLocalStorageName2', "At your Doorstep");

 }

  return (
    <Box
      display="flex"
      justifyContent="center"
  
      p={1}
      bgcolor="background.paper"
    >
      <div className={classes.card} >
      
        <Typography>Delivery Address</Typography>
        <div className={classes.textfield}>

          <Slide direction="left" in={checked} timeout={transitionDuration}>
            <TextField id="standard-basic" label="Flat/House No/Building" variant="outlined" style={{ width: "100%", marginTop: 10 }} />
          </Slide>
          <Slide direction="left" in={checked} timeout={transitionDuration1}>
            <TextField id="standard-basic" label="Town/City/State" variant="outlined" style={{ width: "100%", marginTop: 10 }} />
          </Slide>

          <Slide direction="left" in={checked} timeout={transitionDuration3}>
            <TextField id="standard-basic" label="Pincode" type="number" variant="outlined" style={{ width: "100%", marginTop: 10 }} />
          </Slide>
          <br />
          <br />
        </div>

       
        <Paper className={classes.paper}>
            <Grid item xs={12} sm container>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    color="primary"
                    inputProps={{ "aria-label": "A" }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Fast Delivery
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    (delivery within 1-2 hrs)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$50.00</Typography>
              </Grid>
            </Grid>
          </Paper>
          <br />
          <Paper className={classes.paper}>
            <Grid item xs={12} sm container>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <Radio
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-button-demo"
                    color="primary"
                    inputProps={{ "aria-label": "B" }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Normal Delivery
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    (delivered within 2-3 business days)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$30.00</Typography>
              </Grid>
            </Grid>
          </Paper>
       

      <Link to="/Details" className="links" >
        <Fab color="primary" aria-label="add" className={classes.button} onClick={handleChangeMode}>
          <ArrowRightAltIcon />
        </Fab>
      </Link>
       
      </div>
    </Box >
  );
}
