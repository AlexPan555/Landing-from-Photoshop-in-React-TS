import React from 'react'
import classes from './works.module.css'
import {OrderedMap} from 'immutable'


interface IProps {
   data: OrderedMap<string, React.ReactText>
  }
const WorksItem: React.FC<IProps> = (props) => {
    const liStyle:any = props.data.get('className')
     const img = props.data.get('img')
     console.log(img);
  return(
     <li className={liStyle } 
     style={{background: `url(${img}) no-repeat`, backgroundSize: 'cover'}}>
        <p className={classes.work__title} >{props.data.get('title')}</p>
         <p className={classes.text}>{props.data.get('text')}</p>
     </li>
    )
}
export default WorksItem