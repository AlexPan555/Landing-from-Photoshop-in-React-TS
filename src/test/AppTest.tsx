import React, {useState, useEffect} from 'react'
import {useSpring, animated} from 'react-spring'
import NavbarTest from './NavbarTest'
import TodoForm from './TodoForm'
import { TodoList } from './TodoList'
import { Itodo } from './interfases';

 declare var confirm: (question: string)=> boolean

const AppTest: React.FC = () => {
   const [todos, setTodos] = useState<Itodo[]>([])
   useEffect(()=>{
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') 
      setTodos(saved)
   }, [])
   useEffect(()=>{
localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos])
const addHandler = (title: string) =>{
   const newTodo: Itodo = {
         title,
         id: Date.now(),
         complited: false
      }
      setTodos((prev)=> [newTodo, ...prev])
   }

const togleHandler = (id: number)=>{
   setTodos(prev=> prev.map(item=>{
   if(item.id === id){
      item.complited = !item.complited
      }
   return item
    }))
   }

const removeHandler = (id: number)=>{
   const shuldRemove = confirm('Вы уверены, что хотите удалить элемент?')
   if(shuldRemove){
      setTodos(prev => prev.filter(item=>(item.id !== id)))
   }
   }
   const animatePprops = useSpring({opacity: 1, from: {opacity: 0}})
 return(
   <animated.div style={animatePprops} className='bg'>
         <NavbarTest />
      <div className="container mt2" >
         <TodoForm onAdd={addHandler} />
         <TodoList todos={todos}
             onRemove={removeHandler}
             onTogle={togleHandler} />
      </div>
   </animated.div>
 )
}

export default AppTest

