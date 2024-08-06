import React from 'react'
import { Carousel } from 'react-bootstrap'
import Vogue from '../assets/div.png'
import Aya from '../assets/Aya_logo.jfif'
import DFS from '../assets/dfs_lab.jpeg'
import Stellar from '../assets/stellar-logo.png'


function PartnersCarousel() {
    const partners = [
        {
            name: 'Stellar',
            logo: Stellar,
            desc: "stellar"
        },
        {
            name: 'DFS_LAB',
            logo:  DFS,
            desc: 'DFS_LAB..'
        },
        {
            name: 'Aya',
            logo:  Aya,
            desc: 'build borderless..'
        },
        {
            name: 'Vogue',
            logo:  Vogue,
            desc: 'dev in vogue'
        },
    ]
    console.log(partners);
  return (
    <>
        <Carousel>
            {partners.map((partner, index) => (
                <Carousel.Item key={index}>
                    <img 
                    className='d-block w-100'
                    width='140'
                    height='140'
                    src={partner.logo}
                    alt={`Slide ${index}`}>
                    </img>

                    <Carousel.Caption>
                        <h3>{partner.name}</h3>
                        <p>{partner.desc}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))

            }
        </Carousel>
    </>
  )
}

export default PartnersCarousel