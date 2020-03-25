import React from 'react'

const AppTest: React.FC = () =>{
    return(
        <nav className='mb2'>
        <div className="nav-wrapper purple darken-2 p1">
          <a href="/" className="brand-logo">React + TS</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Список дел</a></li>
            <li><a href="/">О нас</a></li>
            
          </ul>
        </div>
      </nav>
           
    )
}

export default AppTest