import React from 'react'
import logo from "../../assets/logo.svg"
import detail from "../../assets/detail.svg"
import "./InitialMenu.styles.scss"

const InitialMenu = () => {
    const enumIInitialMenu = ["Continue", "New Game", "Options", "amiibo", "Downloadable Content"];

  return (
    <div className='InitialMenu'>
        <div className='containerLogo'><img src={logo} alt="logo" /></div>

        <ul className='containerMenus'>
            {enumIInitialMenu.map(item => <li><img className='icon' src={detail} alt="detalhe"/> {item}</li>)}
        </ul>

        <div className='containerNintendo'>
            <p>Ver. 1.6.0</p>
            <p>© 2017 Nintendo</p>
        </div>
        

    </div>
  )
}

export default InitialMenu