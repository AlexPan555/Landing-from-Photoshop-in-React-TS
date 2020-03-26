import React from 'react'
import { OrderedMap} from 'immutable'
import classes from './works.module.css'
 import  {workData} from './WorksData'
import WorksItem from './WorkItem'

const Works: React.FC = () => {
    const sectionStyle = `${classes.work__wrapp} conteiner`
    const dataMap = workData.map(item => OrderedMap(item))
    return(
        <section className={sectionStyle}>
           <ul className={classes.work__ul}>
              { dataMap.map(item => {
                 return <WorksItem data={item}/>
              }) }
           </ul>
        </section>
    )
}
export default Works