import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './AppBar';
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
class Layout extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    render() {
        console.log("layout", this.props)
        console.log("layoutttt", this.props.location.pathname)


        const { children, classes } = this.props;
        return (
            <>
                <NavBar />
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    // justify="center"
                    style={{ height: '100vh' }}
                >

                    <Grid item xs={12} md={4} >
                        <Card style={{ marginTop: 80, height: "80vh", overflowY: "scroll" }}>

                            <div>{children}</div>
                        </Card>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withStyles({ withTheme: true })(Layout);
