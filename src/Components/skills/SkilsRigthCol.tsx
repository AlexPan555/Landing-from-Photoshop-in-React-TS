import React from 'react'
import classes from './skills.module.css'
import SkillsElement from './SkillsElement';

interface IState {
    stateScroll?: boolean
}

class SkillsRigtCol extends React.Component<IState>{
    state ={  stateScroll: true }
componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    }
 componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}
    handleScroll=()=>{
        if(window.scrollY >= 2500 && this.state.stateScroll){
            this.setState({stateScroll: false})
        }
        if(window.scrollY < 2100 && !this.state.stateScroll){
            this.setState({stateScroll: true})
        }
    }
    render(){
        return(
            <div className={classes.skills__rigthCol} >

<SkillsElement scroll={this.state.stateScroll} name={'photoshop'} persent={'95%'}/>

<SkillsElement scroll={this.state.stateScroll} name={'WordPress'} persent={'50%'}/>

<SkillsElement scroll={this.state.stateScroll} name={'eCommerce'} persent={'72%'}/>

<SkillsElement scroll={this.state.stateScroll} name={'Photography'} persent={'36%'}/>
            
            </div>
        )
    }
}
export default SkillsRigtCol