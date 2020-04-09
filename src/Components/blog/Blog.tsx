import React from 'react'
import classes from './blog.module.css'
import {OrderedMap} from 'immutable'
import {blogData} from './blogData'
import BlogItem from './BlogItem'

const Blog = ()=> {

  const data: OrderedMap<string, string | number | {
    id: string;
    date: string;
    autor: string;
    title: string;
    text: string;
}[]>[] = blogData.map(item=> OrderedMap(item))
 
 const revesData = data.reverse()
  
    return(
<section className={classes.blog}>

<BlogItem data={revesData[0]} classblog={`${classes.blog__item1} ${classes.blog__item}`} />

    <div className={`${classes.blog__item2} ${classes.blog__item}`} >
       <p className={classes.blog__title}>Latest Blog Posts</p>
       <p className={classes.blog__text2}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum nobis videntur parum.</p>
    </div>

<BlogItem data={revesData[1]} classblog={`${classes.blog__item3} ${classes.blog__item}`} />

<BlogItem data={revesData[2]} classblog={`${classes.blog__item4} ${classes.blog__item}`} />

<BlogItem data={revesData[3]} classblog={`${classes.blog__item5} ${classes.blog__item}`} />
    
</section>
    )
}
export default Blog