import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';
import './index.css';

const CustomersData = ({name, dni, age, onBack}) => {
    return (
        <div>
            <div className = "customer-data" >
              <table className="table-title-cont">
                  <tr>
                      <td className="title-cont">
                       <div className = "h3-cont">
                           <h2>Datos del cliente </h2> 
                       </div>
                      </td>
                  </tr>
              </table>
              <table className="table-customer-cont">
                  <tr>
                      <th>Nombre:</th>
                      <td>{name}</td>
                  </tr>
                  <tr>
                      <th>Edad:</th>
                      <td>{age}</td>
                  </tr>
                  <tr>
                      <th>DNI:</th>
                      <td>{dni}</td>
                  </tr>
                  <br></br>
                  <tr>
                      <td>
                          <CustomersActions>
                              <button onClick={onBack}>Regresar</button>
                          </CustomersActions>
                      </td>
                  </tr>
              </table>
            
          </div>

     </div>

      

    );
};

CustomersData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    OnBack: PropTypes.func.isRequired,
};

export default CustomersData;