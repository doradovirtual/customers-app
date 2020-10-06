import React,  { Component} from 'react';

import { withRouter } from 'react-router-dom';
import AppFrame from '../Components/AppFrame';
import CustomersActions from './../Components/CustomersActions'
import './Homecontainer.css';

class HomeContainer extends Component {
    
    handleOnClick = () => {
        console.log("handleOn click");
        this.props.history.push('/customers');
        //console.log("ss" , this.props.history);
         
        
    };
    
    render(){
    return  (
        <div>
           <AppFrame
           header='Home'
            body={
                <div className="HomeContainer-cont">
                    Esta es la pantalla inicial
                    <br></br>
                    
                    <CustomersActions>
                        <div className="button-cont">
                            <button className="button" onClick={this.handleOnClick}>Listado de clientes</button>
                        </div>
                    </CustomersActions>
                </div>
           }>
           </AppFrame>
        </div>
    );
    }
};

HomeContainer.propTypes = {
    
};

/**
 * withRouter permite pasar un componente como funcion y no perder las funcionalidades bvases de las caracteristicas
 * y propiedas del componente.
 */

export default withRouter(HomeContainer);