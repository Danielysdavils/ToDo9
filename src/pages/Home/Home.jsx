import React from 'react'
import Header from '../../components/Common/Header/Header'
import Texto from '../../components/Common/Texto/Texto'
import Form from '../../components/Form/Form'
import Separacoes from '../../components/Common/Separacoes/Separacoes'
import Produtos from '../../components/Produtos/Produtos'

const Home = () => {
  return (
    <div>
        <Header />
        <Texto />
        <Form />
        <Separacoes />
        <Produtos />
    </div>
  )
}

export default Home