import React from 'react'
import Navbar from '../Components/navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offer from '../Components/offer/Offer'
import OurNewCollection from '../Components/OurNewCollection/OurNewCollection'
import NewsSubscription from '../Components/Newssubscription/NewsSubscription'


const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <OurNewCollection/>
        <NewsSubscription/>
    </div>
  )
}

export default Shop