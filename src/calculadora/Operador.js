import React, { Component}  from 'react';

function Operador(props) {
    let valor = (Math.floor((Math.random()*10))+1);
    let aux = props.etiqueta + "(random :  "+valor+")";
    let divEtiqueta = <div style={{display:'inline',backgroundColor:'#FF0000'}} >{aux}</div>;
    if(valor %2==0){
        divEtiqueta=<div style={{display:'inline',backgroundColor:'#0000FF'}} >{aux}</div>;
    }
    return <div >
        {divEtiqueta}
        <input type="number" id={props.id} value={props.valor} onChange={(e) => props.actualizar(props.id,e.target.value)}></input>
    </div>;
}
export default Operador;