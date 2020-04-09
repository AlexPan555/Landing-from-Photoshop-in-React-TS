import React, {useState} from 'react'
import classes from './skills.module.css'
import {useSpring, animated, config} from 'react-spring'

interface IProps {
    scroll: boolean
    name: string
    persent: string
}

const SkillsElement = (props: IProps) => {
    const [state, setState] = useState({
       style: `${classes.skills__tooltip} ${classes.skills__opacity}`,
       shange : true })
    const progressMotion = useSpring(
        {config: config.molasses, width: props.scroll? '1%' : props.persent}
        )
    const tooltipMotiom = useSpring({ opacity: state.shange? 0 : 1 })
  
 if(!props.scroll && state.shange ){
     
     setTimeout(() => {
setState({...state, style: `${classes.skills__tooltip}`, shange: false})
     }, 3000)
 } 
 if(props.scroll && !state.shange) {
    setState({
        style: `${classes.skills__tooltip} ${classes.skills__opacity}`,
        shange : true
    })
 }
    return(
        <div className={classes.skills__progress} >
            <p className={classes.skills__name} >{props.name}</p>
            <div className={classes.progressElement}>
                <animated.div style={progressMotion} className={classes.progressLine} >
    <animated.div style={tooltipMotiom} className={state.style} >{props.persent}</animated.div>
                </animated.div>
            </div>
        </div>
    )
}
export default SkillsElement