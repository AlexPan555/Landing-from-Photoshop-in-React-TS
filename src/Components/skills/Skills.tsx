import React from 'react'
import classes from './skills.module.css'
import Button from '../../UI/Button'
import SkillsRigtCol from './SkilsRigthCol'

const Skills = () => {
    
    const buttonProps = {
      text: 'Our Services',
      backgroundColor: '#252525',
      border: '1px solid transparent',
      width: '170px',
      height: '54px',
      marginLeft: 0,
      fontSize: '14px',
      fontFamily: "Raleway",
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      '&:focus': {
        borderColor: 'white',
        backgroundColor: '#252525'
      },
      '&:hover': {
        backgroundColor: '#474545'
      },
    }

    return(
     <section className= {classes.skills}  >
        <main className={classes.skills__wrap} >

            <div className={classes.skills__leftCol}>
                <p className={classes.skills__leftTitle} >Our Skills</p>
                <p className={classes.skills__leftText} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.</p>
              <Button buttonProps={buttonProps} handleClick={()=>{}} />
            </div>
            
          <SkillsRigtCol />

        </main>
     </section>
    )
}
export default Skills