import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';
import { reduxForm, Field} from 'redux-form';
import './index.css';
import {setPropsAsInitial } from './../helpers/setPropsAsInitial';

/*
const isRequired = value => (
        !value && "Este campo es requerido" 
        
);
*/
const validate = values => {
    const error  = {};

    if(!values.name){
        error.name = "El campo nombre es requerido";
    }

    if(!values.dni){
        error.dni = "El campo DNI es requerido";
    }
    console.log(error);
    return error;
}
const onlyGrow = (value, previousValue, values) =>
    value && previousValue && (value > previousValue ? value : previousValue);
    
const toNumber = value => value && Number(value);
const isNumber = value =>(isNaN(Number(value)) && "El campo debe ser un numero");

const MyField = ({input, meta, type})=>(
    <div>
        <input {...input} type={!type ? "text": type}/>
        {
           meta.touched && meta.error && <span>{` ${meta.error}`}</span>
        }
    </div>
);

const CustomersEdit = ({name, dni, age, handleSubmit, submitting, onBack}) => {
    return (
        <div className="customers-edit-cont">
                <table className="table-title-cont">
                    <tr>
                      <td className="title-cont">
                          <div className = "h3-cont">
                            <h2>Edicion del cliente {dni} </h2> 
                          </div>
                      </td>
                  </tr> 
                </table>
            <br></br>
            <form onSubmit ={handleSubmit}>
                <table className="form-edit-cont">
                    <tr>
                    <div>
                        <th>
                            <label htmlFor= "name" >Nombre:</label>
                        </th>
                        <td>
                            <Field name ="name" component={MyField} type="text"  ></Field>
                        </td>
                    </div>
                    </tr>
                    <tr>
                    <div>
                        <th>
                            <label htmlFor= "dni">DNI:</label>
                        </th>
                        <td>
                            <Field name ="dni" component={MyField} type="text" validate={isNumber}></Field>
                        </td>
                    </div>
                    </tr>
                    <tr>
                    <div>
                        <th>
                            <label htmlFor= "age">Age: </label>
                        </th>
                        <td>
                            <Field name ="age" 
                                component={MyField} 
                                type="number" 
                                validate = {[isNumber]} 
                                parse={toNumber}
                                normalize= {onlyGrow}>    
                            </Field>
                        </td>
                    </div>
                    </tr>
                    <tr>
                        <td>
                            <br></br>
                        <CustomersActions>
                            <button type="submit" disabled ={submitting}>Aceptar</button>
                            <button onClick={onBack}>Cancelar</button>
                        </CustomersActions>
                        </td>
                    </tr>
                    </table>
                </form>
                <br></br>

        </div>
    );
};

CustomersEdit.propTypes = {
   name: PropTypes.string,
   dni: PropTypes.string,
   age: PropTypes.string, 
   onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm(
    {
        form: 'CustomerEdit',
        validate: validate,
})(CustomersEdit);

//high order component
export default setPropsAsInitial(CustomerEditForm);