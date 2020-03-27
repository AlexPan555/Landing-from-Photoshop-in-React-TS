import React from 'react'
import classes from './works.module.css'
import {OrderedMap} from 'immutable'
import iconZoom from '../../img/icons/icon_zoom.svg'
import iconLink from '../../img/icons/iconLink.svg'


interface IProps {
   data: OrderedMap<string, React.ReactText>
  }
const WorksItem: React.FC<IProps> = (props) => {
   
  return(
   <div className={classes.workItem}>
      
      <div className={classes.work__info} >
         <p className={classes.work__title}> {props.data.get('title')} </p>
         <p className={classes.work__text}> {props.data.get('text')} </p>
      
         <div className={classes.work__btn} >
            <div className={classes.btn__zoom} >
               <img className={classes.work__icon} src={iconZoom} alt='iconZoom' />
            </div>
         
            <div className={classes.btn__link} >
               <img className={classes.work__icon} src={iconLink} alt='iconLink' />
            </div>
         </div>
      </div>
   
   </div>
    )
}
export default WorksItem