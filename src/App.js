import React, { Component } from 'react';
import {  BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import './App.css';
import CustomersCointainer from './Containers/CustomersCointainer';
import CustomerContainer from "./Containers/CustomerContainer"
import HomeContainer from './Containers/HomeContainer';


class App extends Component {

  renderHome= () => <HomeContainer></HomeContainer>;

  renderCustomerContainer = () => <h1>Customer Container</h1>;

  renderCustomerListContainer = () => <CustomersCointainer></CustomersCointainer>;

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

  render(){
    return(
      <Router>
      <div className= "cont">
                <Route exact path = "/" component={this.renderHome}/>
                <Route exact path = "/customers" component={this.renderCustomerListContainer}/>
              <Switch>
                  <Route  path = "/customers/new" component={this.renderCustomerNewContainer}/>
                  <Route  path = "/customers/:dni" 
                    render={props =><CustomerContainer  dni = {props.match.params.dni} />}/>
              </Switch>
      </div>
      </Router>

   );
  }
}



export default App;
