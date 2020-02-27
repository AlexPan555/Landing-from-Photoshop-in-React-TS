import React, {useState} from 'react'
import classes from './Advantages.module.css'
import {NavLink} from 'react-router-dom'
import {useSpring, animated} from 'react-spring'
import list from '../../img/icons/list.svg'
import list_red from '../../img/icons/list _red.svg'
import branding from '../../img/icons/branding.svg'
import responsive from '../../img/icons/responsive.svg'
import developem from '../../img/icons/developm.svg'

const Advantages: React.FC = () =>{
   
    const [hover, changeHover] = useState(false)
    const styleDiv = `${classes.advantages} wrap`
    const propsMotion = useSpring({opacity: hover? 1 : 0 })
    const colorRedMotion = useSpring({color: hover? '#e5493a'  : 'rgb(99, 99, 99)'})
    const colorWhiteMotion = useSpring({color: hover? 'white'  : 'rgb(99, 99, 99)'})
    const handleOver = () =>{
        console.log('over')
        changeHover(true)
    }
    const handleOut = () =>{
        console.log('out')
        changeHover(false)
    }
    return(
        <section className={styleDiv}>
<NavLink to='/' className={classes.item} onMouseOver={handleOver} onMouseOut={handleOut} >
    <div className={classes.icon} >
        <div className={classes.img} >
            <img className={classes.svg} src={list} alt='icon list'/> 
            <animated.img style={propsMotion} className={classes.svg} src={list_red} alt='icon list'/> 
        </div>
        <animated.h1 style={colorRedMotion} className={classes.h1}>Clean Design</animated.h1>
        <animated.p style={colorWhiteMotion} className={classes.p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam.</animated.p>
    </div>
</NavLink>
<NavLink to='/' className={classes.item} >
    <div className={classes.icon}>
        <div className={classes.img}>
          <img className={classes.svg} src={branding} alt='icon list'/>
        </div>
        <h1 className={classes.h1}>Branding</h1>
        <p className={classes.p}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse.</p>
    </div>
</NavLink>
<NavLink to='/' className={classes.item} >
    <div className={classes.icon}>
        <div className={classes.img}>
          <img className={classes.svg} src={responsive} alt='icon list'/>
        </div>
        <h1 className={classes.h1}>Responsive</h1>
        <p className={classes.p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam.</p>
    </div>
</NavLink>
<NavLink to='/' className={classes.item} >
    <div className={classes.icon}>
        <div className={classes.img}>
          <img className={classes.svg} src={developem} alt='icon list'/>
        </div>
        <h1 className={classes.h1}>Development</h1>
        <p className={classes.p}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse.</p>
    </div>
</NavLink>
        </section>
    )
}
export default Advantages