import React from 'react'
import Button from '../Button/Button'
import Tittle from '../Tittle/Tittle'

const Header = () => {
  return (
    <div className='container'>
        <div className='top1'></div>
        <div className='section1'>
            <div className='indent'>
                <div>
                    <Tittle/>
                    <Button />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header