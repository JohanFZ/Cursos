import './Cupcake.css';

function Cupcake(props) {
  console.log(props);
  return (
    <div className="content">
      <div className="cupcake">
        <img src={props.foto} alt="" />
        <h2>Color : {props.color}</h2>
        <p>{`Sabor : ${props.sabor}`}</p>
      </div>
    </div>
  )
}

export default Cupcake;