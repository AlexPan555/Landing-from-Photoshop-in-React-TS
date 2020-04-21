import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Header.module.css'
import logo from '../../img/icons/Logos.png'
import Menu from './Menu'

const Header: React.FC = () =>{
    //const styleDiv =  [classes.header__wrap, 'wrap'].join(' ')
    const styleDiv = `${classes.header__wrap} wrap`
    return(
        <header className= {classes.header} >
            <div className= {styleDiv}  >
                <NavLink className= {classes.header__logo} to='/' >
                    <img src={logo} alt="Logo"/>
                </NavLink>
               <Menu />
            </div>
        </header>
    )
}

export default Header
