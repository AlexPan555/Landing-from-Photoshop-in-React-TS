import React, {useState} from 'react'
import classes from './works.module.css'
import {OrderedMap} from 'immutable'
import iconZoom from '../../img/icons/icon_zoom.svg'
import iconLink from '../../img/icons/iconLink.svg'


interface IProps {
   data: OrderedMap<string, React.ReactText>
  }
const WorksItem: React.FC<IProps> = (props) => {
   const initialState: any = OrderedMap({
      stateDiv: classes.work__info,
      stateTitle: classes.work__title,
      stateText: classes.work__text,
      stateBtn: classes.work__btn
   })
   let [styleState, setState] = useState(initialState) 
    
  const handleFocus = () =>{
    
   setState(styleState
    .set('stateDiv', `${classes.work__info} ${classes.workItemFocus}` )
    .set( 'stateTitle', `${classes.work__title} ${classes.workPfocus}` ) 
    .set( 'stateText', `${classes.work__text} ${classes.workPfocus}` ) 
    .set( 'stateBtn', `${classes.work__btn} ${classes.workBtnFocus}` ) 
   )
   }
   const handleBlur = () =>{
      setState(styleState=initialState)
   }
   
  return(
   <div className={classes.workItem} >
      
      <div className={styleState.get('stateDiv')} >
         <p className={styleState.get('stateTitle')}> {props.data.get('title')} </p>
         <p className={styleState.get('stateText')}> {props.data.get('text')} </p>
      
         <div className={styleState.get('stateBtn')} >
            <button className={classes.btn__zoom} onFocus={handleFocus } onBlur={handleBlur} onMouseOver={handleBlur}>
               <img className={classes.work__icon} src={iconZoom} alt='iconZoom' />
            </button>
         
            <button className={classes.btn__link} onFocus={handleFocus } onBlur={handleBlur} onMouseOver={handleBlur}>
               <img className={classes.work__icon} src={iconLink} alt='iconLink' />
            </button>
         </div>
      </div>
   
   </div>
    )
}
export default WorksItem