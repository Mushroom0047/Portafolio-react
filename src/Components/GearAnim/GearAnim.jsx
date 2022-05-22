import React from 'react'
import GearImg from '../../img/gear.png'
import '../GearAnim/gearAnim.scss'

const GearAnim = () => {
  return (
    <div className='box__engine'>
            <img className='box__engine__gear1' alt='gear animation' src={GearImg}/>
            <img className='box__engine__gear2' alt='gear animation' src={GearImg}/>
    </div>
  )
}

export default GearAnim