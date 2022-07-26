import React from 'react'
import { Link } from 'react-router-dom'

const CardProduto = ({ dados }) => {
  
  const {id, foto, nome, descricao, precoAntigo, preco, parcelas} = dados
  
    return (
      <div>
        <img src={foto} alt="" />
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <h3>{precoAntigo}</h3>
        <p>{preco}</p>
        <p>{parcelas}</p>

        <Link to={`/produto/${nome}`}>Ver produto</Link>
      </div>
  )
}

export default CardProduto