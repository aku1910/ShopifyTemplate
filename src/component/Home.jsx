import React from 'react'
import ImageSlider from "..//ImageSlider"
import Multislider from "..//multislider/Multislider"
import Cards from "..//cards/Cards"
import Products from "..//Products"
import Section5 from "..//Section5"
import Section6 from "..//Section6"
import Section7 from "..//section7"
import Section8 from "..//section8"
import Section9 from "..//Section9"

const SliderData = [
  {
    image: 'https://fone-store-demo.myshopify.com/cdn/shop/files/s1.jpg?v=1660640243',
  },
  {
    image: 'https://fone-store-demo.myshopify.com/cdn/shop/files/s2.jpg?v=1660640292',
  },
];
const Home = () => {
  return (
   <>
      <ImageSlider slides={SliderData} /> 
            <Multislider/>
            <Cards />
            <Products/>
            <Section5/>
            <Section6 />
            <Section7/>
            <Section8/>
            <Section9/>
   </>
  )
}

export default Home