import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Header.module.css'
import logo from '../../img/Logos.png'

const Header: React.FC = () =>{
    //const styleDiv =  [classes.header__wrap, 'wrap'].join(' ')
    const styleDiv = `${classes.header__wrap} wrap`
    return(
        <header className= {classes.header} >
            <div className= {styleDiv}  >
                <NavLink className= {classes.header__logo} to='/' >
                    <img src={logo} alt="Logo"/>
                </NavLink>
                <div>
                    <ul className={classes._menu}>
                        <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >Home </NavLink> </li>
                        <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >Features </NavLink> </li>
                        <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >Portfolio </NavLink> </li>
                        <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >SKILLS </NavLink> </li>  
                        <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >Blog </NavLink> </li>  
                        <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >CLIENTS </NavLink> </li>  
                        <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/test' >Contacts </NavLink> </li>   
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
