import React, { Component } from 'react';
import {  BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import './App.css';
import CustomersCointainer from './Containers/CustomersCointainer';
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
              <div className ="cont1">
                <Route exact path = "/" component={this.renderHome}/>
              </div> 
              <div >
                <Route exact path = "/customers" component={this.renderCustomerListContainer}/>
              </div>
             
              <Switch>
                  <Route  path = "/customers/new" component={this.renderCustomerNewContainer}/>
                  <Route  path = "/customers/:dni" component={this.renderCustomerContainer}/>
              </Switch>
          <br></br>
      </div>
      </Router>

   );
  }
}

export default App;
