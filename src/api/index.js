import { urlCustomer } from "./urls";

export const apiGet = () => {
   return fetch(urlCustomer).then(data =>{
         return data.json();
        });    
}

export const apiPut = (url, id, obj) => 
      fetch(`${url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: new Headers({'Content-type': 'application/json'})
      }).then(v => v.json())
      .then(r => {
             if(r.error){
                   return ({error: r.validation});
             }
             return r;
     });
   