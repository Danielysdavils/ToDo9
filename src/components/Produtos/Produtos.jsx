import React from 'react'
import {useState, useEffect} from "react"
import CardProduto from '../CardProduto/CardProduto'

const Produtos = () => {

  const [produtos, setProdutos] = useState([])
  const [randomNum, setrandomNum] = useState(1)

  async function handleRequisicao(){
    
    const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${randomNum}`
    const response = await fetch(url)
    const json = await response.json() 
    const info = json.products
    const numero = Math.random() * (50 - 1) + 1

    setProdutos([...produtos, ...info]);
    setrandomNum(numero + 1)
  }

  useEffect(() => {
    handleRequisicao();
  }, [])

  return (
    <div>
      <div>
        {produtos.map((produto) => {
          return <CardProduto dados={produto} key={produto.id} />
        })}
      </div>

      <input type="button" onClick={handleRequisicao} value="Ainda mais produtos aquí!" />
    </div>
  )
}

export default Produtos