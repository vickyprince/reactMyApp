import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './AppBar';
import Details from './Details';


class LayoutDetails extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    render() {
        const { children, classes } = this.props;
        return (
            <>
                <NavBar>
                    <div>{children}</div>
                </NavBar>
               {/* <Details/> */}
               

               
            </>
        );
    }
}

export default withStyles({ withTheme: true })(LayoutDetails);
