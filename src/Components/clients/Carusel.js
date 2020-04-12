import blog_1 from '../../img/icons/blog_1.png'
import blog_2 from '../../img/icons/blog_2.png'
import blog_3 from '../../img/icons/blog_3.png'
import blog_4 from '../../img/icons/blog_4.png'
import blog_5 from '../../img/icons/blog_5.png'
import React, {Component} from 'react'
import Carousel from '@brainhubeu/react-carousel';
import classes from './clients.module.css'
import '@brainhubeu/react-carousel/lib/style.css';
import ArrowLeft from './ArrowLeft'
import ArrowRigth from './ArrowRigth'

export default class Carusel extends Component{
 
  render() {
    return (
      <Carousel
        slidesPerPage={5}
        slidesPerScroll={1}
        animationSpeed={1500}
        autoPlay={3000}
        stopAutoPlayOnHover
        offset={60}
        itemWidth={200}
        infinite
      arrowLeft={<ArrowLeft />}
      arrowRight={<ArrowRigth />}
      addArrowClickHandler = {'false'}
      
      >
<div className={classes.carousel__item}>
  <img className={classes.carousel__img} src={blog_1} alt='blog_1'/>
  <div className={classes.carousel__dark} ></div>
</div>

<div className={classes.carousel__item}>
  <img className={classes.carousel__img} src={blog_2} alt='blog_2'/>
  <div className={classes.carousel__dark} ></div>
</div>

<div className={classes.carousel__item}>
  <img className={classes.carousel__img} src={blog_3} alt='blog_3'/>
  <div className={classes.carousel__dark} ></div>
</div>

<div className={classes.carousel__item}>
  <img className={classes.carousel__img} src={blog_4} alt='blog_4'/>
  <div className={classes.carousel__dark} ></div>
</div>

<div className={classes.carousel__item}>
  <img className={classes.carousel__img} src={blog_5} alt='blog_5'/>
  <div className={classes.carousel__dark} ></div>
</div>

<div className={classes.carousel__item}>
  <img className={classes.carousel__img} src={blog_1} alt='blog_1'/>
  <div className={classes.carousel__dark} ></div>
</div>

<div className={classes.carousel__item}>
  <img className={classes.carousel__img} src={blog_2} alt='blog_2'/>
  <div className={classes.carousel__dark} ></div>
</div>

<div className={classes.carousel__item}>
  <img className={classes.carousel__img} src={blog_3} alt='blog_3'/>
  <div className={classes.carousel__dark} ></div>
</div>

<div className={classes.carousel__item}>
  <img className={classes.carousel__img} src={blog_4} alt='blog_4'/>
  <div className={classes.carousel__dark} ></div>
</div>

<div className={classes.carousel__item}>
  <img className={classes.carousel__img} src={blog_5} alt='blog_5'/>
  <div className={classes.carousel__dark} ></div>
</div>

      </Carousel>
    );
  }
}

