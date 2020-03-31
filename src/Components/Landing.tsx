import React from 'react'
import Banner from './banner/Banner'
import Advantages from './advantages/Advantages'
import Works from './works/Works'
import Responsive from './Responsive/Responsive'



const Landing: React.FC = () => {
    return(
        <div>
            <Banner />
            <Advantages />
            <Works />
            <Responsive />
        </div>
        
    )
}
export default Landing