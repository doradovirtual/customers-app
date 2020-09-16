import React from 'react';
import PropTypes from 'prop-types';

const CustomersData = ({nombre, dni, age}) => {
    return (
        <div>
             <div className="customer-data"></div>
             <h2>Datos Cliente</h2>
             <div><strong>Nombre<i>{nombre}</i></strong></div> 
             <div><strong>DNI<i>{dni}</i></strong></div>
             <div><strong>EDAD<i>{age}</i></strong></div>
        </div>

    );
};

CustomersData.propTypes = {
    nombre: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
};

export default CustomersData;