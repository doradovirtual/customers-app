import React, {Component} from 'react';
import AppFrame from './../Components/AppFrame';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomersList from './../Components/CustomersList';
import CustomersActions from '../Components/CustomersActions';
import {getCustomers} from './../selectors/customers';
import './Homecontainer.css';
import { fetchCustomers } from '../actions/fetchCustomers';



class CustomersCointainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
        
       
    }
    

    handleAddNew = () =>{
        this.props.history.push('/customers/new')
    }

   renderBody = (customers) => (
       <div >
                <CustomersList
                customers={customers}
                urlPath={'customers/'}>
                </CustomersList>
                <div className="button-action-cont">
                <CustomersActions>
                    <button onClick = {this.handleAddNew}>Nuevo Cliente</button>
                </CustomersActions>
                </div>
         </div>

)


   render(){
    return(
        <div>
            <AppFrame header ={'Listado de Clientes'}
                body = {this.renderBody(this.props.customers)}
                
            ></AppFrame>
        </div>
    );
   }
};

CustomersCointainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersCointainer.defaultProps = {
   customers: []
}

/**
 * {fetchCustomers} es el mapDispatchToProps ssssss
 */
 
 const mapStateToProps = state => ({
     customers: getCustomers(state.customers),
 });




export default withRouter(connect(mapStateToProps, {fetchCustomers})(CustomersCointainer));