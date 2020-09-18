import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const url = 'http://localhost:3001/Customers';



const apiFecthCustomers = () =>{
    fetch(url).then(data => data.json()); 
}
/*
const accion  = () => {
    return console.log("ejecute accion de tipo" , FETCH_CUSTOMERS);
}
*/
export const fetchCustomers = createAction(FETCH_CUSTOMERS,apiFecthCustomers);
    
 