import React from 'react'
import S from './CardProduto.module.css'

const CardProduto = ({ dados }) => {
  
  const {name, image, description, oldPrice, price} = dados
  console.log(name);

    return (
      <div>
        
        <div className={S.card}>
          <img src={image} alt="" className={S.img}/>
          <h3 className={S.titulo}>{name}</h3>
          <p className={S.paragrafo}>{description}</p>
          <h4 className={S.paragrafo}>De: <span>R${oldPrice}</span></h4>
          <p className={S.paragrafo}>Por: <span>R${price}</span></p>
          <input type="button" value="comprar" className={S.button}/>
        </div>
        
      </div>
  )
}

export default CardProduto