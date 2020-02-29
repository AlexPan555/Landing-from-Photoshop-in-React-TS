import React, { useReducer} from 'react'
import classes from './Advantages.module.css'
import {NavLink} from 'react-router-dom'
import list from '../../img/icons/list.svg'
import list_red from '../../img/icons/list _red.svg'
import branding from '../../img/icons/branding.svg'
import branding_red from '../../img/icons/branding_red.svg'
import responsive from '../../img/icons/responsive.svg'
import responsive_red from '../../img/icons/responsive_red.svg'
import developem from '../../img/icons/developm.svg'
import developmen_red from '../../img/icons/developm_red.svg'
import AdvantagesItem from './AdvantagesItem'

const Advantages: React.FC = () =>{
 
 const initialState: object = {
     listState: {
        img: list,
        imgRed: list_red,
        isOver: false,
        h1: 'Clean Design',
        p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam.'
     },
     brandingState: {
        img: branding,
        imgRed: branding_red,
        isOver: false,
        h1: 'Branding',
        p: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse.'
     },
     responsiveState: {
        img: responsive,
        imgRed: responsive_red,
        isOver: false,
        h1: 'Responsive',
        p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam.'
     },
     developmenState: {
        img: developem,
        imgRed: developmen_red,
        isOver: false,
        h1: 'Clean Design',
        p: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse.'
     }
 }
 function reducer(state: any, action: any){
     switch(action.type) {
         case 'hoverList' :
             state.listState.isOver = true
                return {...state  }
        case 'outList' : 
            state.listState.isOver = false
                return {...state }

        case 'hoverBranding':
            state.brandingState.isOver = true
                return {...state}
        case 'outBranding' :
            state.brandingState.isOver = false
                return {...state }

        case 'hoverResponsive':
            state.responsiveState.isOver = true
                return {...state}
        case 'outResponsive' :
            state.responsiveState.isOver = false
                return {...state }

        case 'hoverDevelopmen':
            state.developmenState.isOver = true
                return {...state}
        case 'outDevelopmen' :
            state.developmenState.isOver = false
                return {...state }

        default:  return {...state};
     }
 }

 const [state, dispatch] = useReducer(reducer, initialState);  
console.log('state', state)
    const styleDiv = `${classes.advantages} wrap`
   

    return(
        <section className={styleDiv}>
<NavLink to='/' className={classes.item} onMouseOver={()=>dispatch({type: 'hoverList'})} 
  onMouseOut={()=>dispatch({type: 'outList'})} >
    <AdvantagesItem state={state.listState} />
</NavLink>

<NavLink to='/' className={classes.item} onMouseOver={()=>dispatch({type: 'hoverBranding'})} 
  onMouseOut={()=>dispatch({type: 'outBranding'})}>
    <AdvantagesItem state={state.brandingState} />
</NavLink>

<NavLink to='/' className={classes.item} onMouseOver={()=>dispatch({type: 'hoverResponsive'})} 
  onMouseOut={()=>dispatch({type: 'outResponsive'})}>
    <AdvantagesItem state={state.responsiveState} />
</NavLink>

<NavLink to='/' className={classes.item} onMouseOver={()=>dispatch({type: 'hoverDevelopmen'})} 
  onMouseOut={()=>dispatch({type: 'outDevelopmen'})}>
    <AdvantagesItem state={state.developmenState} />
</NavLink>
        </section>
    )
}
export default Advantages