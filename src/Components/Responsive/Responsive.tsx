import React from 'react'
import classes from './responsive.module.css'
import Button from '../../UI/Button'

const Responsive = () => {
    const buttonProps = {
        text: 'Buy This Now',
        backgroundColor: '#8dc63f',
        border: '2px solid transparent',
        width: '170px',
        height: '54px',
        marginLeft: 0,
        fontSize: '14px',
        fontFamily: "Raleway",
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        '&:focus': {
          borderColor: '#e5493a',
          backgroundColor: '#8dc63f'
        },
        '&:hover': {
          backgroundColor: '#507916'
        },
      }
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
<Button buttonProps={buttonProps} />
            </div>
            </main>
        </section>
    )
}

export default Responsive