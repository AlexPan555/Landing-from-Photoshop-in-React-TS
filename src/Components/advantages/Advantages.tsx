import React, { useReducer} from 'react'
import classes from './Advantages.module.css'
import {NavLink} from 'react-router-dom'
import { OrderedMap} from 'immutable'
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
 
 const initialState = OrderedMap ({
     listState: OrderedMap({
        img: list,
        imgRed: list_red,
        isOver: false,
        h1: 'Clean Design',
        p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam.'
     }),
     brandingState: OrderedMap({
        img: branding,
        imgRed: branding_red,
        isOver: false,
        h1: 'Branding',
        p: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse.'
     }),
     responsiveState: OrderedMap({
        img: responsive,
        imgRed: responsive_red,
        isOver: false,
        h1: 'Responsive',
        p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam.'
     }),
     developmenState: OrderedMap({
        img: developem,
        imgRed: developmen_red,
        isOver: false,
        h1: 'Clean Design',
        p: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse.'
     })
 })
 function reducer(state: any, action: any){
     switch(action.type) {
         case 'hoverList' :
            return state.setIn(['listState', 'isOver'], true )
        case 'outList' : 
            return state.setIn(['listState', 'isOver'], false )
               
        case 'hoverBranding':
           return state.setIn(['brandingState', 'isOver'], true )
        case 'outBranding' :
            return state.setIn(['brandingState', 'isOver'], false )

        case 'hoverResponsive':
            return state.setIn(['responsiveState', 'isOver'], true )
        case 'outResponsive' :
            return state.setIn(['responsiveState', 'isOver'], false )

        case 'hoverDevelopmen':
            return state.setIn(['developmenState', 'isOver'], true )
        case 'outDevelopmen' :
            return state.setIn(['developmenState', 'isOver'], false )

        default:  return {...state};
     }
 }
 const [state, dispatch] = useReducer(reducer, initialState);  
    const styleDiv = `${classes.advantages} wrap`

    return(
        <section className={styleDiv}>
<NavLink to='/' className={classes.item} onMouseOver={()=>dispatch({type: 'hoverList'})} 
  onMouseOut={()=>dispatch({type: 'outList'})} >
    <AdvantagesItem state={state.get('listState')} />
</NavLink>

<NavLink to='/' className={classes.item} onMouseOver={()=>dispatch({type: 'hoverBranding'})} 
  onMouseOut={()=>dispatch({type: 'outBranding'})}>
    <AdvantagesItem state={state.get('brandingState')} />
</NavLink>

<NavLink to='/' className={classes.item} onMouseOver={()=>dispatch({type: 'hoverResponsive'})} 
  onMouseOut={()=>dispatch({type: 'outResponsive'})}>
    <AdvantagesItem state={state.get('responsiveState')} />
</NavLink>

<NavLink to='/' className={classes.item} onMouseOver={()=>dispatch({type: 'hoverDevelopmen'})} 
  onMouseOut={()=>dispatch({type: 'outDevelopmen'})}>
    <AdvantagesItem state={state.get('developmenState')} />
</NavLink>
        </section>
    )
}
export default Advantages