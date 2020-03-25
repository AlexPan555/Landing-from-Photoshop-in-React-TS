import React, {useState} from 'react'

interface ITodo {
    onAdd(title: string): void
}

const TodoForm: React.FC<ITodo> = (props) =>{
    const [title, setTitle] = useState<string>('')
    const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(ev.target.value)
    }
    const keiPressHandler = (ev: React.KeyboardEvent) =>{
        if(ev.key === 'Enter'){
            props.onAdd(title)
            setTitle('')
        }
    }
    return(
        <div className=' input-field mt2'>
            <input type='text' id='title'
                value={title}
                onChange={changeHandler}
                onKeyPress={keiPressHandler}
                placeholder='Введите название дела'/>
            <label htmlFor='title' className='active'>
                Введите название дела
            </label>
        </div>
    )
}
export default TodoForm