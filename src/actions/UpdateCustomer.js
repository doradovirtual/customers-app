import { UPDATE_CUSTOMERS } from "../constants";
import { createAction } from 'redux-actions';
import { apiPut } from "./../api";
import { urlCustomer } from "../api/urls";

export const UpdateCustomer = createAction(UPDATE_CUSTOMERS,(id, customer) => apiPut(urlCustomer,id,customer));