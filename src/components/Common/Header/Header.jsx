import React from 'react'
import Button from '../Button/Button'
import Tittle from '../Tittle/Tittle'
import S from './Header.module.css'

const Header = () => {
  return (
    <div className={S.section}>
        <div className={S.quadrado}>
            <Tittle className={S.title} />
            <Button className={S.button} />
            <div className={S.contTrian}>
              <div className={S.triangulo}>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header