import React from 'react'
import classes from './responsive.module.css'

const Responsive = () => {

    return(
        <section className={classes.responsive} >
            <main className={classes.responsive__wrap} >
            <div className={classes.responsive__info}>
<p className={classes.responsive__title} > Fully Responsive Design Ready </p>
<p className={classes.responsive__text} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Claritas est etiam processus dynamicus.</p>

<ul className={classes.responsive__ul} >
    <li className={classes.responsive__li} >Claritas est etiam processus dynamicus.</li>
    <li className={classes.responsive__li} >Mirum est notare quam littera gothica, quam.</li>
    <li className={classes.responsive__li} >Nam liber tempor cum soluta.</li>
    <li className={classes.responsive__li} >Duis autem vel eum iriure dolor in hendrerit.</li>
    <li className={classes.responsive__li} >Typi non habent claritatem insitam.</li>
</ul>

<button className={classes.responsive__btn} >Buy This Now</button>
            </div>
            </main>
        </section>
    )
}

export default Responsive