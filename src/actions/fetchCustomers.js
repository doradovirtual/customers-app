import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const url = ' http://localhost:3002/customers';

const apiFecthCustomers = () =>{
    fetch(url).then(data => data.json).then(
           console.log(data);
        })
}


export const fetchCustomers =createAction(FETCH_CUSTOMERS,  apiFecthCustomers);
    
 