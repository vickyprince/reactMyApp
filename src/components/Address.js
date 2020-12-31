import React from "react";
// import "./styles.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {  Link } from "react-router-dom";
import { motion } from "framer-motion";

import Box from "@material-ui/core/Box";




const styles = theme => ({

  address: {
    fontSize: "0.7rem"
  },
  title: {
    fontWeight: 700
  },
  button: {
    marginTop: "30%",
    marginLeft: 10
  },

});

export class Address extends React.Component {
  constructor() {
    super();
    this.state = {
      initial: "false",
      hidden: {
        y: 20,
        opacity: 0
      },
      visible: {
        y: 0,
        opacity: 1
      },

     name2:"From Nearby Address",

      lists: [
        {
          id: 1,
          name: "EBIXCASH World Money",
          address:
            "Concourse, International Tech Park, Sadarmangla, Whitefield Unit No - G - 14, Lower Ground Floor, Bengaluru, Karnataka 560066"
        },
        {
          id: 2,
          name: "Foreign Exchange",
          address:
            "120-B, EPIP, Yoshitha Hightech, Opposite Inorbit Mall, Bengaluru, Karnataka 560066"
        },
        {
          id: 3,
          name: "Travel Money Exchange",
          address:
            " 2, SH 35, Byrappa Layout, Sathya Sai Layout, Whitefield, Bengaluru, Karnataka 560066"
        },
        {
          id: 4,
          name: "ECurrencyKart",
          address:
            "S18, Concourse, Discoverer building ITPL, Whitefield Main Road, Bengaluru, Karnataka 560066"
        }
      ]
    };
  }

 handleChange=()=>{
  localStorage.setItem('myValueInLocalStorageName2', "From Nearby Address");
}


  componentDidMount() {
    setTimeout(() => {
      this.setState({ initial: "true" })
    }, 2000)
  }

  render() {
    const { classes } = this.props;
    if (this.state.initial === "false") {
      return (
        <div class="wrapper">

          <div class="wrapper-cell">
            <div class="image"></div>
            <div class="text">
              <div class="text-line"> </div>
              <div class="text-line"></div>
              <div class="text-line"></div>
              <div class="text-line"></div>
            </div>
          </div>
          <div class="wrapper-cell">
            <div class="image"></div>
            <div class="text">
              <div class="text-line"></div>
              <div class="text-line"></div>
              <div class="text-line"></div>
              <div class="text-line">   </div>
            </div>
          </div>
          <div class="wrapper-cell">
            <div class="image"></div>
            <div class="text">
              <div class="text-line"></div>
              <div class="text-line"></div>
              <div class="text-line"></div>
              <div class="text-line"></div>
            </div>
          </div>
          <div class="wrapper-cell">
            <div class="image"></div>
            <div class="text">
              <div class="text-line"></div>
              <div class="text-line"></div>
              <div class="text-line"></div>
              <div class="text-line"></div>
            </div>
          </div>
          <div class="wrapper-cell">
            <div class="image"></div>
            <div class="text">
              <div class="text-line"> </div>
              <div class="text-line"></div>
              <div class="text-line"></div>
              <div class="text-line"></div>
            </div>
          </div>
          <div class="wrapper-cell">
            <div class="image"></div>
            <div class="text">
              <div class="text-line"></div>
              <div class="text-line"></div>
              <div class="text-line"></div>
              <div class="text-line">   </div>
            </div>
          </div>
        </div>
      );
    }
    else if ((this.state.initial === "true")) {
      return (

        <div  >


          <motion.ul initial={this.state.hidden} animate={this.state.visible} style={{ padding: 0 }}>
            {this.state.lists.map(list => {
              return (
                <Box
                  display="flex"
                  justifyContent="center"
                  // m={1}
                  p={1}
                  bgcolor="background.paper"
                >
                  <Card className="cardeffect" style={{ width: 700 }}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            className={classes.title}
                            gutterBottom
                            variant="subtitle1"
                          >
                            {list.name}
                          </Typography>
                          <Typography
                            className={this.props.classes.address}
                            variant="body2"
                            gutterBottom
                          >
                            {list.address}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Button
                          className={this.props.classes.button}
                          variant="contained"
                          color="primary"
                          // value={value}
                          size="small"
                          onClick=
                          {this.handleChange}
                        >
                          <Link to="/Details" className="links" >
                            Select</Link>
                        </Button>
                      </Grid>
                    </Grid>
                  </Card>
                </Box>
              );
            })}
          </motion.ul>
        </div>

      );
    }
  }
}

export default withStyles(styles)(Address);
