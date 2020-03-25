import React from 'react'
import { Itodo } from './interfases';

type TodoListProps = {
todos: Itodo[],
onTogle(id: number): void,
onRemove: (id: number)=> void
}

export const TodoList: React.FC<TodoListProps> = (props) =>{
    const removeHandler = (ev: React.MouseEvent, id: number) => {
        ev.preventDefault()
        props.onRemove(id)
    }
    if(props.todos.length === 0){   
        return( <p className='senter' >Дел пока нет</p> )
    }
   return <ul>
   { props.todos.map(item=>{
       const classes = ['todo']
       if(item.complited){ classes.push('complited') }
        return(
                <li className={classes.join(' ')} key={item.id} >
                    <label>
                        <input type='checkbox' checked={item.complited}
                            onChange={props.onTogle.bind(null, item.id)} />

                        <span>{item.title}</span>

                        <i className='material-icons red-text'
                            onClick={(ev)=>removeHandler(ev, item.id)} >delete</i>
                    </label>
                </li>
        )
    })}
    </ul>
}