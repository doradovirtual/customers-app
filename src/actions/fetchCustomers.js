import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const url = ' http://localhost:3001/customers';

const apiFecthCustomers = () => {
    fetch(url).then(v => v.json)
}


export const fetchCustomers =createAction(FETCH_CUSTOMERS, apiFecthCustomers);
    
 