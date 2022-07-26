import React from 'react'

const Form = () => {
  return (
    <div>
        <label htmlFor="nome">Seu nome:</label>
        <input type="text" name="nome" id="nome" />

        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
        
        <label htmlFor="cpf">CPF:</label>
        <input type="number" name="cpf" id="cpf" />

        <input type="radio" name="male" id="male" />
        <label htmlFor="male">Masculino</label>
        
        <input type="radio" name="fem" id="fem" />
        <label htmlFor="fem">Feminino</label>

        <input type="button" value="enviar" />
    </div>
  )
}

export default Form