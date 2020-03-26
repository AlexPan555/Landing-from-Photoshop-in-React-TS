import React from 'react'
import {useSpring, animated} from 'react-spring'
import classes from './Advantages.module.css'
import { OrderedMap} from 'immutable'

interface IProps {
  state: any
}

const AdvantagesItem: React.FC<IProps>  = (props) => {

    const state = props.state
    const propsMotion = useSpring({opacity: state.get('isOver') ? 1 : 0 })
    const colorRedMotion = useSpring({color: state.get('isOver') ? '#e5493a'  : 'rgb(99, 99, 99)'})
    const colorWhiteMotion = useSpring({color: state.get('isOver') ? 'white'  : 'rgb(99, 99, 99)'})
    const borderRedMotion = useSpring({borderColor: state.get('isOver') ? '#e5493a' : '#353535' })
 console.log(props.state.get('img'));
 
    return(
    <div className={classes.icon} >
        <animated.div style={borderRedMotion} className={classes.img} >
            <img className={classes.svg} src={props.state.get('img')} alt='icon list'/> 
            <animated.img style={propsMotion} className={classes.svg} src={props.state.get('imgRed')} alt='icon list'/> 
        </animated.div>

  <animated.h1 style={colorRedMotion} className={classes.h1}>{props.state.get('h1')}</animated.h1>
       
  <animated.p style={colorWhiteMotion} className={classes.p}>{props.state.get('p')}</animated.p>
    </div>
    )
}

export default AdvantagesItem