import React, { useState } from 'react'
import './Cupcake.css'

function Cupcake({color, sabor, foto}) {

  const [estado, setEstado] = useState(false);

  const vender = () => {
    setEstado(true)
  }

  return (
    <div className="content">
      <div className="cupcake">
        <img src={foto} alt="" />
        <h2>Color : {color}</h2>
        <p>{`Sabor : ${sabor}`}</p>
        <p>
          <b>Estado : </b>
          {estado ? "Vendido" : "A la venta"} {/*Validacion Terniaria*/}
        </p>
        {/* Renderizado Condicional */}
        {
          !estado && <button onClick={vender}>Vender</button>
        }
      </div>
    </div>
  )
}

export default Cupcake;