import React from 'react'
import { useState } from 'react'
import S from './Compartilhe.module.css'

const Compartilhe = () => {

  const [emailUser, setEmailUser] = useState('')

  const handleEmail = (target) => {
    setEmailUser(target.value)
  }

  function validaEmail(){
    if(emailUser.length >= 10 && emailUser.indexOf('@') > 2){
      console.log('Email Valido'); 
    }else{
      console.log('Email invalido');
    }
  }

  return (
    <div className={S.container}>
        <div className={S.conTit}>
            <p className={S.txt}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        </div>    

        <div className={S.form}>
            <div className={S.contNome}>
               <label htmlFor="nome" className={S.label}>Nome do seu amigo:</label>
                <input type="text" name="nome" id="nome" className={S.input} /> 
            </div>
            
            <div className={S.contEmail}>
               <label htmlFor="email" className={S.label}>E-mail: </label>
                <input type="email" name="email" id="email" className={S.input} value={emailUser} onChange={({target}) => handleEmail(target)} /> 
            </div>
        </div>

        <div className={S.contButton}>
           <input type="button" value="Enviar agora" className={S.button} onClick={(e) => {
          e.preventDefault()
          validaEmail()
        }}/> 
        </div>

    </div>
  )
}

export default Compartilhe