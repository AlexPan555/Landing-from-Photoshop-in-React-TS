import svg1 from '../../img/icons/blog1.svg'
import svg3 from '../../img/icons/blog2.svg'
import svg4 from '../../img/icons/blog4.svg'
import svg5 from '../../img/icons/blog5.svg'
import img1 from '../../img/photos/blog1.png'
import img3 from '../../img/photos/blog3.png'
import img4 from '../../img/photos/blog4.png'
import img5 from '../../img/photos/blog5.png'

export const blogData = [
    {
        id: 1,
        date: '01 February 2015',
        autor: 'Admin',
        title: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
        text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
        bgImage: `${img1}`,
        svg: `${svg1}`,
        comments: [
            {
                id: 'com1',
                date: '04 February 2015',
                autor: 'Alex',
                title: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                
            },
            {
                id: 'com2',
                date: '06 February 2016',
                autor: 'Djdex',
                title: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                
            },
        ]
    },
    {
        id: 2,
        date: '02 February 2015',
        autor: 'Djdex',
        title: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium',
        bgImage: `${img5}`,
        svg: `${svg5}`,
        text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
        comments: [
            {
                id: 'com1',
                date: '04 February 2015',
                autor: 'Alex',
                title: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                
            },
            {
                id: 'com2',
                date: '06 February 2016',
                autor: 'Djdex',
                title: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                
            },
        ]
    },
    {
        id: 3,
        date: '03 February 2015',
        autor: 'Alex',
        title: 'Duis autem vel eum iriure',
        bgImage: `${img4}`,
        svg: `${svg4}`,
        text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
        comments: [
            {
                id: 'com1',
                date: '04 February 2015',
                autor: 'Alex',
                title: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                
            },
            {
                id: 'com2',
                date: '06 February 2016',
                autor: 'Djdex',
                title: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                
            },
        ]
    },
    {
        id: 4,
        date: '04 February 2015',
        autor: 'John Doe',
        title: 'Nam liber tempor cum soluta',
        text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
        bgImage: `${img3}`,
        svg: `${svg3}`,
        comments: [
            {
                id: 'com1',
                date: '04 February 2015',
                autor: 'Alex',
                title: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                
            },
            {
                id: 'com2',
                date: '06 February 2016',
                autor: 'Djdex',
                title: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                
            },
        ]
    },
    {
        id: 5,
        date: '05 February 2015',
        autor: 'Admin',
        title: `Lorem ipsum dolor sit amet,  consectetuer adipiscing elit`,
        text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
        bgImage: `${img1}`,
        svg: `${svg1}`,
        comments: [
            {
                id: 'com1',
                date: '04 February 2015',
                autor: 'Alex',
                title: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                
            },
            {
                id: 'com2',
                date: '06 February 2016',
                autor: 'Djdex',
                title: `Lorem ipsum dolor sit amet,  consecte-
                tuer adipiscing elit` ,
                text: 'Lorem ipsum dolor sit amet,  consectetuer adipiscing elit',
                
            },
        ]
    }
]