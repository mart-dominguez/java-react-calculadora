import React, { Component}  from 'react';
import Operador from './Operador';
import Resultado from './Resultado';
class Calculadora extends Component {

    constructor(props){
        super(props);
        this.state = {
            operador1 : 2,
            operador2 : 3,
            resultado : 0,
            historial : []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnSumar = this.handleBtnSumar.bind(this);
    }

    handleInputChange(name,value) {
        console.log(name+","+value);
        this.setState({[name]: value});
    }


    handleBtnSumar() {
        let res = this.state.operador1 +  this.state.operador2;
        this.setState({resultado: res});
    }
    
    render(){
        return <div>
            <Operador etiqueta="Ingrese operador 1" id="operador1" valor={this.state.operador1} actualizar={this.handleInputChange}></Operador>
            <Operador etiqueta="Operador 2" id="operador2"  valor={this.state.operador2} actualizar={this.handleInputChange}></Operador>
            <input type="button" value="Sumar" onClick={this.handleBtnSumar}></input>
            <Resultado valor={this.state.resultado}></Resultado>
        </div>;
    }
}


export default Calculadora;