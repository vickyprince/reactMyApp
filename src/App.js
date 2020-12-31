import React, { Component, lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Exchange from './components/Exchange';
import Login from './components/Login';
import Layout from './components/Layout';
import LayoutDetails from './components/LayoutDetails';

import Details from './components/Details';
import Delivery from './components/Delivery';
import Success from './components/Success';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("propsssd",this.props)
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter history={this.props.history}>
         
          <Switch>
          
          <Route exact path="/" render={(props) => <Login {...props}/>} /> 
            <Layout>
              <Route exact path="/exchange" render={(props) => <Exchange name="towfiq" {...props}/>} />
              <Route exact path="/Delivery" render={(props) => <Delivery name="towfiq"  {...props}/>} />
              <Route exact path="/Details" render={(props) => <Details name="towfiq"  {...props}/>} />
              <Route exact path="/Success" render={(props) => <Success name="towfiq"  {...props}/>} />
            </Layout>
            {/* <LayoutDetails>
            
            </LayoutDetails> */}
          
       
            {/* <Route exact path="/" render={() => <Home />} />
            <Route exact path="/home" render={() => <Home />} />
            <Route path="/chat" render={() => <Chat />} />
            <Route path="/links" render={props => <Links props={props} />} />
            <Route path="/post/:id" render={props => <Post props={props} />} />
            <Route component={Notfound} /> */}
          </Switch>
          
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
