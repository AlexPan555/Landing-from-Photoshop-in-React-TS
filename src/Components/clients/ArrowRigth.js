import React, {useState} from 'react'
import classes from './clients.module.css'
import rigth from '../../img/icons/Left.png'
import rigttWhite from '../../img/icons/Left_white.png'

 const ArrowRigth = () => {
     const [state, setState] = useState(false)
     
    return(
        <div className= {`${classes.arrowWrap} ${classes.arrow__rigth}`}
        onMouseOver={()=>setState(true)}
        onMouseOut={()=>setState(false)} >
 <img src={ state? rigttWhite : rigth} alt='img Rigth' /> 
        </div>
    )
}

export default ArrowRigth