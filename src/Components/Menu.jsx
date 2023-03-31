import React, { Component } from 'react'
import "../Components/Menu.css"
import SubMenu from './SubMenu';
import pic1 from "../images/coffee.png"

export default class Menu extends Component {
    state={Posts:[
      {title:"Americano",description:"A single or double shot of espresso diluted with hot water, creating a less intense flavor than a straight espresso"},
      {title:"Espresso",description:"A strong and concentrated coffee made by forcing hot water through finely ground coffee beans."},
      {title:"Cappuccino",description:"A coffee drink made with equal parts espresso, steamed milk, and milk foam, often topped with a sprinkle of cocoa powder"},
      {title:"Latte",description:" A coffee drink made with a single or double shot of espresso and steamed milk, topped with a small layer of foam."},
      {title:"Macchiato",description:"A coffee drink made with a single or double shot of espresso and a small amount of foamed milk."},
      {title:"Mocha",description:"A coffee drink made with a single or double shot of espresso, chocolate syrup or powder, steamed milk, and whipped cream."},
      {title:"Flat White",description:" A coffee drink made with a double shot of espresso and steamed milk, with a thin layer of microfoam on top."},
    ]}
  render() {
    return (
      <section id='menu'>
        <div className='innerMenu'>
        <h1>Our Signature Drink</h1>
        <div className=''>
        <SubMenu img="https://www.acouplecooks.com/wp-content/uploads/2022/01/Iced-Americano-008s.jpg" title={this.state.Posts[0].title} description={this.state.Posts[0].description} price="$100" />
        <SubMenu img="https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg" title={this.state.Posts[1].title} description={this.state.Posts[1].description} price="$70" />
        <SubMenu img="https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-cappuccino-005.jpg" title={this.state.Posts[2].title} description={this.state.Posts[2].description} price="$400" />
        <SubMenu img="https://www.jura.com/-/media/global/images/coffee-recipes/images-redesign-2020/latte_macchiato_2000x1400px.jpg?h=1400&iar=0&w=2000&hash=66C99A28EB6F67344B8355A69B6A45C7" title={this.state.Posts[3].title} description={this.state.Posts[3].description} price="$150" />
        </div>
        </div>
      </section>
    )
  }
}
