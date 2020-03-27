import React, { FC } from 'react'
import classes from './banner.module.css'

const Banner: FC = () => {
    const styleDiv = `${classes.banner__wrap} wrap`

    return (
        <section className={classes.banner}>
            <div className={styleDiv}>
                <div className={classes.banner__info} >
 <h1 className={classes.banner__text}>Smart Moves 
    <span className={classes.banner__little}> of <span className={classes.banner__little__red}>
    Successful</span> Business</span>
 </h1>
 
<p className={classes.banner__p} >Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
<div className={classes.banner__flex} >
    <div className={classes.banner__btn} >< strong >Buy This Now</strong> </div>
    <div className={classes.banner__btn2} >Live Preview</div>
</div>

                </div>
            </div>
        </section>
    )
}

export default Banner