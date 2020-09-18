import { handleActions } from 'redux-actions';
import {FETCH_CUSTOMERS}  from './../constants/index';

 export const customers = handleActions( 
   {[FETCH_CUSTOMERS]: (action) => [...action.payload],
     }, []);


