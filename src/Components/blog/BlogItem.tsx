import React from 'react'
import classes from './blog.module.css'
import {OrderedMap} from 'immutable'
import {NavLink} from 'react-router-dom'
  
interface IProps {
    data: OrderedMap<string, string | number | {
        id: string;
        date: string;
        autor: string;
        title: string;
        text: string;
    }[]>
    classblog: string
}
 
const BlogItem = (props: IProps) => {
const comments: any = props.data.get('comments')

  return(
    <div className={props.classblog} style={{ 
        background: `url(${props.data.get('bgImage')}) no-repeat`, backgroundSize: 'cover' }} >
        <div className={classes.blog__dark}>
            <NavLink to='/' className={classes.blog__icon}>
                <img className={classes.blog__svg} src={`${props.data.get('svg')}`} alt="svg1"/>
            </NavLink>
                
            <div className={classes.blog__info}>
              <p className={classes.blog__title}>
                 {props.data.get('title')}
              </p>
              <p className={classes.blog__text}>
                  {props.data.get('date')}, Posted by <span className={classes.blog__span}>{props.data.get('autor')}</span> , Comments: <span className={classes.blog__span}> {comments.length}</span>
              </p>
            </div>
        </div>
               
    </div>
    )
}

export default BlogItem