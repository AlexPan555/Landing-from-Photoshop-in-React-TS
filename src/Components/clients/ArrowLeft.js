import React, {useState} from 'react'
import classes from './clients.module.css'
import left from '../../img/icons/Rigth.png'
import leftWhite from '../../img/icons/Rigth_white.png'

 const ArrowLeft = () => {
    const [state, setState] = useState(false)
    return(
        <div className= {`${classes.arrowWrap} ${classes.arrow__left}`} 
        onMouseOver={()=>setState(true)}
        onMouseOut={()=>setState(false)}  >
<img src={state? leftWhite : left} alt='img Left' />
        </div>
    )
}

export default ArrowLeft