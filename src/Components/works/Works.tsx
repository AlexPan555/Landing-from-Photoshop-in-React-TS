import React from 'react'
import { OrderedMap} from 'immutable'
import classes from './works.module.css'
import  {workData} from './WorksData'
import WorksItem from './WorkItem'

const Works: React.FC = () => {
    const sectionStyle = `${classes.work__wrapp} conteiner`

   const liStyle1 = `${classes.work__item__three} ${classes.work__bg1} `
   const liStyle2 = `${classes.work__item__six} ${classes.work__bg2} ${classes.work__li}`
   const liStyle3 = `${classes.work__item__three} ${classes.work__bg3} ${classes.work__li}`
   const liStyle4 = `${classes.work__item__three} ${classes.work__bg4} ${classes.work__li}`
   const liStyle5 = `${classes.work__item__five} ${classes.work__bg5} ${classes.work__li}`
   const liStyle6 = `${classes.work__item__foure} ${classes.work__bg6} ${classes.work__li}`

    const dataMap = workData.map(item => OrderedMap(item))
    return(
        <section className={sectionStyle}>
           <ul className={classes.work__ul}>
             <li className= {liStyle1} >
                <p className={classes.work__title1}>
{dataMap[0].get('title')}
                </p>
                <p className={classes.work__text1}>
{dataMap[0].get('text')}
                </p>
             </li>

             <li className= {liStyle2} >
               <WorksItem data={dataMap[1]}/>            
             </li>

             <li className= {liStyle3} >
                <WorksItem data={dataMap[2]}/>
             </li>
             <li className= {liStyle4} >
                <WorksItem data={dataMap[3]}/>
             </li>
             <li className= {liStyle5} >
               <WorksItem data={dataMap[4]}/>
             </li>
             <li className= {liStyle6} >
               <WorksItem data={dataMap[5]}/>
             </li>
           </ul>
        </section>
    )
}
export default Works