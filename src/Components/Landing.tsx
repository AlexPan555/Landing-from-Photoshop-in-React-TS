import React from 'react'
import Banner from './banner/Banner'
import Advantages from './advantages/Advantages'
import Works from './works/Works'



const Landing: React.FC = () => {
    return(
        <div>
            <Banner />
            <Advantages />
            <Works />
        </div>
        
    )
}
export default Landing