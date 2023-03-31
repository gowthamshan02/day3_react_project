import React from 'react'
import "../Components/about.css"
import pic from "../assets/BlankFarawayKingsnake-size_restricted.gif"
import pic2 from '../images/beans.jpg'

import pic3 from '../images/coffee1.png'
export default function About() {
  return (
   <section id='about'>
    <div className='aboutdiv'>
    <div className='about-div'>
       <div className='top'>
       <h1>About Dinesh's Brews</h1>
        <i>Host coffee tasting events where customers can sample different types of coffee beans and learn about their unique flavors and origins.<br/>Offer a "coffee of the month" subscription service, where customers can sign up to receive a different type of coffee each month.<br/>"comfortable seating, warm lighting, and artwork or decor that reflects the local community".</i>
       </div>
       <div className='top1'>
        <img src={pic} alt=''/>
       <h1>Aroma</h1>
        <i>The smell of freshly brewed coffee can be both comforting and energizing<br/>focus on using high-quality, freshly roasted coffee beans.</i>
       </div>
       <div className='top2'>
       <img src={pic2} alt=''/>
       <h1>Bean Varieties
</h1>
        <i>"Ethiopian"<br/>"Colombian:<br/>"Brazilian"<br/>"Guatemalan"<br/>"Costa Rican"</i>
       </div>
      
 
    </div>
   <div className='bottom'>
    <img src={pic3} alt=""/>
    <div>
    <h1>Taste and See Our Delight</h1>
    <p>When selecting coffee beans for your shop, it's important to consider factors such as origin, roast level, and flavor profile. You may want to work with a coffee supplier or roaster who can help you select the right beans for your shop and provide guidance on brewing and serving techniques to bring out the best in each variety.</p>
   
    </div>
    </div> 
   </div>
   </section>
  )
}
