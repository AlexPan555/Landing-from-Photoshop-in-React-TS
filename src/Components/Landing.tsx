import React from 'react'
import Banner from './banner/Banner'
import Advantages from './advantages/Advantages'
import Works from './works/Works'
import Responsive from './Responsive/Responsive'
import Footer from './footer/Footer'
import Skills from './skills/Skills'
import Blog from './blog/Blog'
import Clients from './clients/Clients'
import Contacts from './contasts/Contacts'



const Landing: React.FC = () => {
    return(
        <div>
            <Banner />
            <Advantages />
            <Works />
            <Responsive />
            <Skills />
            <Blog />
            <Clients />
            <Contacts />
            <Footer />

        </div>
        
    )
}
export default Landing