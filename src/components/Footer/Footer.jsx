import React from 'react'
import S from './Footer.module.css'

const Footer = () => {
  return (
    <div className={S.section}>
        <div className={S.quadrado}>

            <div className={S.contTrian}>
              <div className={S.triangulo}></div>
            </div>
            
            <article className={S.art}>
                <h3 className={S.txt}>Testando suas habilidades em HTML, CSS e JS</h3>
                <h3 className={S.txt}>Linx Impulse</h3>
                <h3 className={S.txt}>2019</h3>
            </article>

        </div>
    </div>
  )
}

export default Footer
