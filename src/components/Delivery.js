import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Address from "./Address.js";
import Doorstep from "./Doorstep.js";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  backgroundColor: "red",
  root: {
    flexGrow: 1,
    // width: "35%",

    backgroundColor: theme.palette.background.paper,
  
    // marginLeft:"32%"
  },

  address: {
    fontSize: 11,
    textAlign: "left"
  },
  card: {
    maxWidth: "100%",
    
  },
  delivery: {
    paddingTop: "1%"
  },
  paper: {
    marginTop: "4%"
  },
  item1: {
    marginLeft: "5%"
  },
  item2: {
    marginLeft: "20%"
  },
  title: {
    marginTop: "50px",
    marginLeft: "32%",
    maxWidth: "35%"
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const [value1, setValue1] = React.useState(0);
  

  const handleChange = (event, newValue) => {
   
    setValue(newValue);
    // setValue1(event.target.value);
  };

  return (
    <>
      {/* <Box className={classes.title}> */}
      <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Exchange Type" />
      </ListItem>
      <Divider />
      </List>
        {/* <Typography variant="h6" color="textSecondary" >
          Catch us at...
        </Typography> */}

      {/* </Box> */}

      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              className={classes.item1}
              label="Near by address"
              {...a11yProps(0)}
            />
            <Tab
              className={classes.item2}
              label="Your doorstep "
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>

        <Card className={classes.card}
        >
          <CardContent>
            <TabPanel value={value} index={0}>
            <Address />
            </TabPanel>

            <TabPanel value={value} index={1}>
            <Doorstep />
              
            </TabPanel>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
