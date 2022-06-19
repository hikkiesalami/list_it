import React from 'react'
import I1 from './images/I1.png'
import save from './images/save.png'
import contact from './images/contact.png'
import map from './images/map.png'
import photos from './images/photos.png'
import product from './images/product.png'
import save2 from './images/save2.png'
import Star from './images/Star.png'
import verified from './images/verified.png'
import phone from './images/phone.png'
import email from './images/email.png'
import ig from './images/ig.png'
import { useState } from 'react';
import Similar from './Similar/Similar';
import Reviews from './Reviews';
function Home() {
  const [isvisited,setisvisited] = useState(false)
  const [review,setreview] = useState(true)
  const [similar,setsimilar] = useState(false)
  const reviewstyle={
    backgroundColor : `${review === true ? '#333': null}`
  }
  const silimarstyle ={
    backgroundColor : `${similar === true && '#333'}`
  }
  return (
    <><nav className="navbar">
      <li className='home'><a href='/'>Home</a></li>
      <li className='home'><a href='/'>Explore</a></li>
      <li><a href='/'>About</a></li>
      <li><a href='/'>Pages</a></li>
      <li><a href='/'>Contact Us</a></li>
      <button className='sign '><a href='/'>Sign In</a></button>
    </nav>
    <div>
        <h1>The Masala Restaurant</h1>
    </div>
    <section>
      <img className='masala' src={I1} alt="" />
      <div className='hikkie'>
        <p className='description'>Description of the business and services they render z goes here, and may be as long as this, or even longer...</p>
        <p className='find'>You can find us at</p>
        <p className='plot'>Plot 25 Wase close, Tudun Wada. Jos, Plateau State.</p>
        <div className="button">
          <a className='btn' href='/'><img className='save' src={save} alt="" />Save</a>
        </div>
      </div>
      </section><br /><br />
      <section>
        <div className='verified'>
          <p className='both'> 4.5<img className='star' src={Star} alt='' />  (10)  <img className='star' src={verified} alt='' /><b className='veri'>Verified</b></p>
        </div>
        <div className="icons">
          <li className='imgs'><a href='/'><img className='contact' src={contact} alt="" /><p>Contacts</p></a></li>
          <li className='imgs'><a href="/"><img className='map' src={map} alt="" /><p>Map</p></a></li>
          <li className='imgs'><a href="/"><img className='photos' src={photos} alt="" /><p>Photos</p></a></li>
          <li className='imgs'><a href="/"><img className='product' src={product} alt="" /><p>Product</p></a></li>
          <li className='imgs'><a href="/"><img className='save2' src={save2} alt="" /><p>Save</p></a></li>
        </div>
      </section><br /><br />
      <section>
        <div className="review">
          <li style={{
            background: `${ review === true  ? '#111': "#FFF"}`
          }}  onClick={()=>{
           setisvisited((a)=> false)
           setreview(true)
           setsimilar(false)
          
          }} >Reviews</li>  
          <li style={{
            background: `${ similar === true  ? '#111': "#FFF"}`
          }} onClick={()=>{
           setisvisited((a)=> true)
          setreview(false)
          setsimilar(true)
          }} >Similar</li>
        </div>
        <div>
          {
            isvisited === true && <Similar/>
          }
          {
            isvisited === false && < Reviews/>
          }
        </div>
        <form action="GET">
          <b>Phone Number</b> <img id='num1' className='form' src={phone} alt="" /><input id='num' type="phone" /><br /><br /><br />
          <b>Email</b><img id='mail' className='form' src={email} alt="" />< input id='num' type="email" /><br /><br /><br />
          <b>Facebook</b><img id='book' className='form' src="" alt="" /><input id='num' type="text" /><br /><br /><br />
          <b>Instagram</b><img id='ig' className='form' src={ig} alt="" /><input id='num' type="text" />
        </form>
      </section>
      
      </>
          );
        }
        
        export default Home;