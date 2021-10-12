import React, { useState, useEffect, useRef } from 'react'
import './Cupcake.css'

function Cupcake({color, sabor, foto}) {

  const [estado, setEstado] = useState(false);
  const [reservado, setReservado] = useState(false);

  const fotoCupcake = useRef();

  useEffect(() => {
    if(reservado){
      const elemt = fotoCupcake.current;
      elemt.classList.add("vendido");
    }
  }, [reservado]);

  const vender = () => {
    setEstado(true)
    setReservado(true)
  }

  const reservar = () => {
    setReservado(true)
  }

  return (
    <div className="content">
      <div className="cupcake">
        <img ref={fotoCupcake} src={foto} alt="" />
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

        <p>
          <b>Estado : </b>
          {reservado ? "Reservado" : "Libre"} {/*Validacion Terniaria*/}
        </p>
        {/* Renderizado Condicional */}
        {
          !reservado && <button onClick={reservar}>Reservar</button>
        }
      </div>
    </div>
  )
}

export default Cupcake;