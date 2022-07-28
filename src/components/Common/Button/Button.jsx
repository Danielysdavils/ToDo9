import React from 'react'
import S from './Button.module.css'

const Button = () => {
  return (
    <div className={S.contBot}>
        <input type="button" value="Conheça Linux" className={S.boton1}/>
        <input type="button" value="Ajude o algoritmo" className={S.boton1}/>
        <input type="button" value="Seus produtos" className={S.boton1} />
        <input type="button" value="Compartilhe" className={S.boton1}/>
    </div>
  )
}

export default Button