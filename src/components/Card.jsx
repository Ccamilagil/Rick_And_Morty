import style from './Card.module.css';

function Card({name, gender, onClose, species, image}) {
   return (
      <div className={`${style.card}`}>
         <button className={`${style.botonCartas}`} onClick={onClose}>X</button>
         <h2 className={`${style.name}`}>{name}</h2>
         <img className={`${style.imagen}`} src={image} alt="" /> 
         <h2 className={`${style.description}`}>{species}</h2>
         <hr />
         <h2 className={`${style.description}`}>{gender}</h2>
      </div>
   );
}

export default Card;
