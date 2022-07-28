import React from 'react'
import S from './Tittle.module.css'

const Tittle = () => {
  return (
    <div className={S.tit}>
        <h3 className={S.tit1}>uma seleção de produtos</h3>
        <h3 className={S.tit2}>especial para você</h3>
        <h3 className={S.tit3}>Todos os produtos desta lista forma selecionados a partir da sua navegação. Aproveite!</h3>
    </div>
  )
}

export default Tittle