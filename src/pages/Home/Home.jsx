import React from 'react'
import Header from '../../components/Common/Header/Header'
import Texto from '../../components/Texto/Texto'
import Form from '../../components/Form/Form'
import Separacoes from '../../components/Common/Separacoes/Separacoes'

const Home = () => {
  return (
    <div>
        <Header />
        <Texto />
        <Form />
        <Separacoes />
    </div>
  )
}

export default Home