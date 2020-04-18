import React, {useState} from 'react'
import {OrderedMap} from 'immutable'
import classes from './contacts.module.css'
import InutName from './ImputName'
import TextArea from './TextArea'
import Map from './Map'
import Button from '../../UI/Button'

const Contacts = () => {
    const initialState = () =>{
        return(
            OrderedMap(
        {name: OrderedMap({ 
            value: '',
            isValid: false,
            height: '60px', 
            id: 'name',
            placeholder: `     Name`,
            reg: /(^[A-Z]{1}[a-z]{1,14}.+$)|(^[А-Я]{1}[а-я]{1,14}.+$)/,
            regMsg: 'enter a valid name (example "Alex")',
        }),
        email: OrderedMap({
            value: '',
            isValid: false,
            height: '60px',
            id: 'email',
            placeholder: `     email`,
            reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            regMsg: 'enter a valid email',
        }),
        message: OrderedMap({
            values: '',
            isValid: false,
            height: '200px',
            id: 'description',
            placeholder: 'Message',
            reg: '',
            regMsg: 'Invalid',
        })
    }
        ))
    }
        
const buttonProps = {
    width: '100%',
    height: '60px',
    text: 'Send',
    backgroundColor: 'rgb(229, 73, 58)',
    border: '1px solid transparent',
    fontSize: '20px',
    fontFamily: "Raleway",
    lineHeight: 1.4,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    '&:focus': {
        borderColor: 'white',
        backgroundColor: 'rgb(229, 73, 58)'
      },
      '&:hover': {
        backgroundColor: '#cc0000'
      },
} 
const [state, setState] = useState(initialState())

const handleSubmit = () => {
   if(state.getIn(['name','isValid']) && state.getIn(['email','isValid']) && state.getIn(['message','isValid']) ){
       console.log('Form Valid', state);
       setState(initialState)
   } else {
    console.log('Form NOT Valid');
   }
}
   return(
        <section className={classes.contacts} >
            <main className={classes.contacts__wrap}>
                <h2 className={classes.contacts__title} > CONTACTS </h2>

                <div className={classes.contacts__info} >
                    <div className={classes.contacts__leftCol} >

<div className={classes.contacts__inpuWrap}>
    <InutName props={state.get('name')}  
        handleChange={ (value: string)=> setState( state.setIn(['name', 'value'], value) ) }
         setValid={()=> setState( state.setIn(['name', 'isValid'], true) )} />
</div>

<div className={classes.contacts__inpuWrap}>
    <InutName props={state.get('email')}  
       handleChange={ (value: string)=> setState( state.setIn(['email', 'value'], value) ) }
       setValid={()=> setState( state.setIn(['email', 'isValid'], true) )} />
</div>
<div className={classes.contacts__messageWrap}>
    <TextArea props={state.get('message')}
        handleChanges={ (value: string)=> setState( state.setIn(['message', 'values'], value)
                        .setIn(['message', 'isValid'], true) )}
    />
</div>
<div className={classes.contacts__buttonWrap}>
    <Button buttonProps={buttonProps} handleClick={handleSubmit} />
</div>
                    </div>

                    <div className={classes.contacts__rightCol} >
<Map isMarkerShown  />
                    </div>
                </div>
            </main>
        </section>
    )
}
export default Contacts