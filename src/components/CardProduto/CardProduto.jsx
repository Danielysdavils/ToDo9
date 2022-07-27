import React from 'react'

const CardProduto = ({ dados }) => {
  
  const {name, image, description, oldPrice, price} = dados
  console.log(name);

    return (
      <div>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>{oldPrice}</h3>
        <p>{price}</p>
        <input type="button" value="comprar" />
      </div>
  )
}

export default CardProduto