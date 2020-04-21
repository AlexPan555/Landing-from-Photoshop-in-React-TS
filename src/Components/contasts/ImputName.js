import React from "react"
import { Textbox } from 'react-inputs-validation';


const InutName = ({props, handleChange,setValid}) => {

    const submitInout = () =>  setValid()
    
    return(
        <Textbox 
        customStyleWrapper={{marginBottom: '20px'}}
        customStyleInput={{
            backgroundColor: 'black',
            borderRadius: '10px',
            color: 'white',
            fontSize: '20px',
            height: '60px',
            fontFamily: "Raleway",
            lineHeight: 1.4,
        }}
        attributesInput={{ // Optional.
          id: props.get('id'),
          name: 'description',
          type: 'text',
          placeholder: props.get('placeholder'),
        }}
        value= {props.get('value')} // Optional.[String].Default: "".
        onChange={(value, e)=> handleChange(value) } // Required.[Func].Default: () => {}. Will return the value.
        onBlur={(e) => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
        validationOption={{
          name: props.get("id"), // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
          check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
          required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
         
          reg: props.get('reg'),
          regMsg: props.get('regMsg') ,
          customFunc: function(res)  { //Optional.[Func].Default: none. Custom function. Returns true or err message
            if (res.length < 3) {
                 return 'Name length min 3';
               }
               submitInout()
               return true;
             }
        }}
        
      />
     )
}
export default InutName