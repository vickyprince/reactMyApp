import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';




const transitionOut=2000;

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{bottom:0}}>
            {'Copyright © '}
            <Link color="inherit" href="https://exchange.com/">
                Xchange
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1515606378517-3451a4fa2e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function SignInSide(props) {
    const [checked, setChecked] = React.useState(true);
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
        message: ""
    });
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { vertical, horizontal, open, message } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const handleSubmit = () => {
        if (email === "" && password === "") {
            console.log("email & pwd is empty");
            setState({
                open: true, vertical: 'top',
                horizontal: 'right', message: "Email and Password is empty"
            });


        } else {
            if (email === "") {
                console.log("email is empty");
                setState({
                    open: true, vertical: 'top',
                    horizontal: 'right', message: "Email should not be empty"
                });
            } else {

                if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) === false) {
                    console.log("email is invalidddd...")
                    setState({
                        open: true, vertical: 'top',
                        horizontal: 'right', message: "Email is invalid"
                    });
                }
            }
            if (password === "") {
                console.log("password is empty");
                setState({
                    open: true, vertical: 'top',
                    horizontal: 'right', message: "Password should not be empty"
                });
            }
            if(email !== "" && password !== "") {
                if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) === true) {
                    console.log("props", props)
                props.history.push("exchange");
                }
                
            }
            
        }
    }

    return (
        <>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in to exchange
          </Typography>
                        <div className={classes.form} >
                       
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                           
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                          
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleSubmit}
                            >
                                Sign In
            </Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                key={`${vertical},${horizontal}`}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
            // message={message}
            ><Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
}