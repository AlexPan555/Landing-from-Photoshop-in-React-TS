import React from 'react'
import classes from './footer.module.css'
import Menu from '../header/Menu'


const Footer = () => {

    return(
        <section className={classes.footer} >
            <div className={classes.footer__wraper} >
            <Menu />
            </div>
        </section>
    )
}
export default Footer