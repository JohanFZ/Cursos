import React, { useState } from 'react'

const Cupcake = (sabor, color, foto) => {

const vender = () => {
  console.log('hola');
}

  return (
    <div className="content">
      <div className="cupcake">
        <img src={foto} alt="" />
        <h2>Color : {color}</h2>
        <p>{`Sabor : ${sabor}`}</p>
        <p>
          <b>Estado : </b>
          {vendido ? "Vendido" : "A la venta"} {/*Validacion Terniaria*/}
        </p>
        {/* Renderizado Condicional */}
        {
          !vendido && <button onClick={vender}>Vender</button>
        }
      </div>
    </div>
  )
}

export default Cupcake;