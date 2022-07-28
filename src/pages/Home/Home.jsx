import React from 'react'
import Header from '../../components/Common/Header/Header'
import Form from '../../components/Form/Form'
import Separacoes from '../../components/Common/Separacoes/Separacoes'
import Produtos from '../../components/Produtos/Produtos'
import Footer from '../../components/Footer/Footer'
import Compartilhe from '../../components/Compartilhe/Compartilhe'
import S from '../../styles/corpo.module.css'


const Home = () => {
  return (
    <div className={S.container}>
        <Header />
        
        <div className={S.corpo}>
          <Form />
          <Separacoes text='Sua seleção especial' />
          <Produtos />

          <Separacoes text='Compartilhe a novidade' />

          <Compartilhe />
        </div>

        <Footer />
    </div>
  )
}

export default Home