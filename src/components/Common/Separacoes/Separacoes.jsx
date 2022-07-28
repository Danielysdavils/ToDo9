import React from 'react'
import S from './Separacoes.module.css'

const Separacoes = (props) => {
  return (
    <div className={S.container}>
        <div className={S.linha}></div>
        <h3 className={S.txt}>{props.text}</h3>
        <div className={S.linha}></div>
    </div>
  )
}

export default Separacoes