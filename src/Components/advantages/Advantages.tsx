import React, { useReducer, useState} from 'react'
import classes from './Advantages.module.css'
import {NavLink} from 'react-router-dom'
import { OrderedMap} from 'immutable'
import AdvantagesItem from './AdvantagesItem'
import {stateData} from './advantagesStatData'

const Advantages: React.FC = () =>{

const initialState: OrderedMap<string, OrderedMap<string, string | boolean>> =  OrderedMap(stateData).map(item=> OrderedMap(item) )
    const styleDiv: string = `${classes.advantages} wrap`
const [state, setState] = useState(initialState)
    return(
        <section className={styleDiv}>
<NavLink to='/' className={classes.item} onMouseOver={()=> setState( state.setIn(['listState', 'isOver'], true ) )} 
  onMouseOut={()=>setState(state.setIn(['listState', 'isOver'], false ))} >
    <AdvantagesItem state={state.get('listState')} />
</NavLink>

<NavLink to='/' className={classes.item} onMouseOver={()=>setState(state.setIn(['brandingState', 'isOver'], true ))} 
  onMouseOut={()=>setState(state.setIn(['brandingState', 'isOver'], false ))}>
    <AdvantagesItem state={state.get('brandingState')} />
</NavLink>

<NavLink to='/' className={classes.item} onMouseOver={()=>setState(state.setIn(['responsiveState', 'isOver'], true ))} 
  onMouseOut={()=>setState(state.setIn(['responsiveState', 'isOver'], false ))}>
    <AdvantagesItem state={state.get('responsiveState')} />
</NavLink>

<NavLink to='/' className={classes.item} onMouseOver={()=>setState(state.setIn(['developmenState', 'isOver'], true ))} 
  onMouseOut={()=>setState(state.setIn(['developmenState', 'isOver'], false ))}>
    <AdvantagesItem state={state.get('developmenState')} />
</NavLink>
        </section>
    )
}
export default Advantages