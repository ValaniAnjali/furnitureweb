import React from 'react'
import Hero from '../components/Hero'
import Homedata from '../components/Homedata'
import MoreImg from '../components/MoreImg'
const Home = () => {
  return (
  <>
  <Hero 
        cName="hero"
        heroImg="https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=is&k=20&c=BmDGWYV_uaYxEk6SWui3A7_MW2kJvxe9qDAcRMTHMJk="
        title="AV's Furniture"
        text="Choose your Favourite Furniture from here."
        buttonText="Explore"
        url="/"
        btnClass="show"
        />
      <Homedata/>
      <div>
      <h1>Our Some of Awesome products are here..</h1>
      <MoreImg/>
            </div>
  </>
  )
}

export default Home
