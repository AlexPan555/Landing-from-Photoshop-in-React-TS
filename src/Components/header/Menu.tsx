import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Header.module.css'

const Menu = () => {

    return (
        <ul className={classes._menu}>
            <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >Home </NavLink> </li>
            <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >Features </NavLink> </li>
            <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >Portfolio </NavLink> </li>
            <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >SKILLS </NavLink> </li>  
            <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >Blog </NavLink> </li>  
            <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >CLIENTS </NavLink> </li>  
            <li className={classes.menu__element}> <NavLink className={classes.menu__link} to='/' >Contacts </NavLink> </li>   
        </ul>
    )
}

export default Menu