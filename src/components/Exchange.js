import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import { Route, Link } from "react-router-dom";
import currencies from './ConstantsList';
import Fab from '@material-ui/core/Fab';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 100
    }
  },
  card: {
    maxWidth: 800,
    maxHeight: 900,
    marginTop: "50px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  symbol:{
    paddingLeft:"15%"
  }
}));

export default function Exchange() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("INR");
  const [currencyLabel, setCurrencyLabel] = React.useState("USD");
  const [tocurrency, settoCurrency] = React.useState("USD");
  const [rates, setRates] = React.useState({});
  const [currencyvalue, setCurrencyValue] = React.useState("");
  const [Udata, setUdata] = React.useState({});
  const [denom, setDenom] = React.useState("");
  const [newDenom, setNewDenom] = React.useState("");

  const bull = <span className={classes.bullet}>•</span>;


  async function fetchdata(currency, currencyLabel) {
    const response = await axios.get(
      `https://api.exchangeratesapi.io/latest?base=${currency}`
    );

    const newCurrencyLabel = response.data.rates[currencyLabel];
    setUdata(newCurrencyLabel);
    setNewDenom("");
  }
  let data = undefined;
  let val = undefined;
  useEffect(() => {
    fetchdata(currency, currencyLabel);

  }, []);

  const toHandlelabelChange = event => {
    console.log("secobd field", event.target.value)
    
    setCurrencyLabel(event.target.value);
    setDenom("");
  };
  const handleFromCurrencyDropDown = e => {
    setCurrency(e.target.value);
  }

  useEffect(() => {

    fetchdata(currency, currencyLabel);

  }, [currency, currencyLabel]);

  React.useEffect(() => {
    const tot1 = Udata * denom;
    console.log(tot1);
    setNewDenom(Udata * denom);

    console.log("hello12", newDenom);
  }, [denom]);



  const currencyChange = event => {
    localStorage.setItem('myValueInLocalStorage', event.target.value);
    setDenom(event.target.value);

  };




  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Box>
        <ListItem button>
        <ListItemText primary="Lets Exchange" />
      </ListItem>
      <Divider />
          {/* <Card className={classes.card}> */}
          <CardContent>
            <Typography>
              <form className={classes.root} noValidate autoComplete="off">
                <Box fontWeight="400"  color="text.primary"  p={1} align="center">
                  <futura>Choose your currency pair</futura>
                </Box>

                <table>
                  <tbody>
                    <tr>
                      <td>
                        <Box display="flex" justifyContent="flex-start">
                          <TextField
                            id="standard-select-currency"
                            select
                            label="From"
                            value={currency}
                            
                            onChange={handleFromCurrencyDropDown}
                          >
                            {currencies.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.value}
                              </MenuItem>
                            ))}
                          </TextField>


                        </Box>
                      </td>
                      <td className={classes.symbol}>
                        <Box display="flex" justifyContent="flex-end" p={4} m={-3}>
                        {currencies.map(option => {
                              return currency === option.value ? option.label : "";
                            })}
                        </Box>
                      </td>
                      <td>
                        <Box display="flex" justifyContent="flex-start" p={4}>

                          <TextField value={denom}

                            onChange={currencyChange} 
                           
                           
                           />

                        </Box>
                      </td>

                    </tr>
                    <tr>
                      <td>
                        <Box display="flex" justifyContent="flex-start">

                          <TextField
                            id="xchange currency"
                            select
                            label="To"
                            ClipboardEvent
                            value={currencyLabel}
                           
                            onChange={toHandlelabelChange}
                          >
                            {currencies.map(one => (
                              <MenuItem key={one.value} value={one.value}>
                                {one.value}
                              </MenuItem>
                            ))}
                          </TextField>

                        </Box>
                      </td>
                      <td className={classes.symbol}>
                        {currencies.map(one => {
                          return currencyLabel === one.value ? one.label : "";
                        })}
                      </td>
                      <td>
                        <Box display="flex" justifyContent="center"  >



                          <h4>{newDenom}</h4>
                        </Box>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Box display="flex" justifyContent="flex-end">
                  <Link to="/Delivery" className="links">
                    <Fab color="primary" aria-label="add">
                      <ArrowRightAltIcon />
                    </Fab>
                  </Link>
                  {/* <Button variant="contained" color="primary" >
                      <Link to="/Delivery"  className="links">
                        LETS START!</Link>
                    </Button> */}
                </Box>
              </form>


            </Typography>
          </CardContent>
          {/* </Card> */}
        </Box>
      </Box>

    </div>
  );
}


