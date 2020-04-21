import React, {useState} from 'react'
import { Textarea } from 'react-inputs-validation';

const TextArea = ({props, handleChanges} ) => {
    const [state, setState] = useState('')
    const submitInput = () => {
      handleChanges(state)
      setState('')
    }
    return(
<Textarea
 customStyleInput={{
    backgroundColor: 'black',
    borderRadius: '10px',
    paddingLeft: '27px',
    color: 'white',
    fontSize: '20px',
    height: props.get('height'),
    fontFamily: "Raleway",
    lineHeight: 1.4,
}}
  attributesInput={{ // Optional.
    id: props.get('id'),
    name: props.get('id'),
    type: 'text',
    placeholder: props.get('placeholder'),
  }}
  value= {state}  // Optional.[String].Default: "".
  onChange={(description, e) => {
    setState(description)
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    name: 'Description', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
    required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
    
    customFunc: function(res)  { //Optional.[Func].Default: none. Custom function. Returns true or err message
      if (res.length < 2) {
           return 'Text length min 2';
         }
         submitInput(res)
         return true;
       }
  }}
/>
    )
}
export default TextArea