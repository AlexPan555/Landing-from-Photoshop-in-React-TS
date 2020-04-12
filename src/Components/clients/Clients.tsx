import React from 'react'
import classes from './clients.module.css'
import Carousel from './Carusel'

const Clients = () => {

    return (
        <section className={classes.clients} >
            <main className={classes.clients__wrap}>
<h2 className={classes.clients__title}>Our Happy Clients</h2>
<p className={classes.clients__text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Claritas est etiam processus dynamicus.</p>

 <div className={classes.clients__carousel} >
   <Carousel />
 </div>   
    
            </main>
        </section>
    )
}
export default Clients