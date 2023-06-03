//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({name, country}) {
  return (
    <div className="card_success">
      <p>Hola, <strong>{name}</strong></p>
      <p>Registramos tú país <strong>{country}</strong> </p>
    </div>

    
    
  );
}

export default Card;
