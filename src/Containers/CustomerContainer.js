import React, { Component } from 'react';
import { Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../Components/AppFrame';
import './Homecontainer.css';
import CustomersEdit from './../Components/CustomersEdit';
import CustomersData from './../Components/CustomersData';
import { getCustomerByDni } from '../selectors/customers';
import {fetchCustomers} from './../actions/fetchCustomers';
import { UpdateCustomer } from './../actions/UpdateCustomer';
import { SubmissionError } from 'redux-form';

class CustomerContainer extends Component {

    componentDidMount() {
        if(!this.props.customer){
           this.props.fetchCustomers();
        }
    }
    

    handleSubmit = values =>{
        console.log(JSON.stringify(values));
        const {id} = values;
        return this.props.UpdateCustomer(id, values).then( r => {
            if (r.payload && r.payload.error){
                throw new SubmissionError(r.payload.error);
            }
        });

    }

    handleOnBack= () => {
        this.props.history.goBack();
    }

    handleSubmitSuccess = () => {
        this.props.history.goBack();
    };

    renderBody = () => (
        <Route path ="/customers/:dni/edit" children ={
            ({ match }) => {
                if(this.props.customer){
                
                        const CustomersControl = match ? CustomersEdit : CustomersData;
                           return <CustomersControl {...this.props.customer} 
                           onSubmitSuccess={this.handleSubmitSuccess}
                           onSubmit={this.handleSubmit}
                           onBack={this.handleOnBack} /> 

                    }
                    return null;
                }
        }/>
   
    )


    render() {
        return (
            <div>
               <AppFrame header={`Cliente `}
               body ={this.renderBody()}
               
                   ></AppFrame> 
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    UpdateCustomer: PropTypes.func.isRequired,

};

const mapStateToProps = (state, props) =>({
    customer: getCustomerByDni(state, props),
    
});

export default withRouter(connect(mapStateToProps,{
    fetchCustomers,
    UpdateCustomer
    })(CustomerContainer));