import React from 'react'
import {useSpring, animated} from 'react-spring'
import classes from './Advantages.module.css'

const AdvantagesItem = (props: any) => {
    console.log('props', props)
    const propsMotion = useSpring({opacity: props.state.isOver? 1 : 0 })
    const colorRedMotion = useSpring({color: props.state.isOver? '#e5493a'  : 'rgb(99, 99, 99)'})
    const colorWhiteMotion = useSpring({color: props.state.isOver? 'white'  : 'rgb(99, 99, 99)'})
    const borderRedMotion = useSpring({borderColor: props.state.isOver? '#e5493a' : '#353535' })
  return(
    <div className={classes.icon} >
        <animated.div style={borderRedMotion} className={classes.img} >
            <img className={classes.svg} src={props.state.img} alt='icon list'/> 
            <animated.img style={propsMotion} className={classes.svg} src={props.state.imgRed} alt='icon list'/> 
        </animated.div>

        <animated.h1 style={colorRedMotion} className={classes.h1}>Clean Design</animated.h1>
       
        <animated.p style={colorWhiteMotion} className={classes.p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam.</animated.p>
    </div>
    )
}

export default AdvantagesItem