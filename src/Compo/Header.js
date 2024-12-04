import React from 'react'
import Phone from './Phone.jpg';
import Email from './Email.jpg';
import Clock from './Clock.jpg';
import Facebook from './Facebook.jpg';
import Twitter from './Twitter.jpg';
import Instagram from './Instagram.jpg';
import Linkdin from './Linkdin.jpg';
import Logo from './Logo.jpg';
import Bag from './Bag.jpg';
import Search from './Search.jpg';
import Dropdownlogo from './Dropdownlogo.jpg';
import { Link } from 'react-router-dom';

import './Mix.css';

export default function Header() {
  return (
    <div>
     <div className='firstline'>   
     <div className='left'>   
      <div className='phone'>
        <div> <img src={Phone} className='phoneim' alt='phoneimg'/></div>
        <div className='phone-details'><a href='tel:01321545646'>+(123) 1234-567-8901</a></div>
      </div>
      <div className='phone'>
        <div> <img src={Email} className='phoneim' alt='emailimg'/></div>
        <div className='phone-details'><a href='mailto:test@gmail.com'> hello@hewx.com</a></div>
      </div>
      <div className='phone'>
        <div> <img src={Clock} className='phoneim' alt='emailimg'/></div>
        <div className='phone-details'>Mon-Sat 8:00 - 17:30,Sunday - CLOSED </div>
      </div>
    </div> 
    <div className='right'>
        <img src={Facebook} className='media' alt='media'/>
        <img src={Twitter} className='media' alt='media'/>
        <img src={Instagram} className='media' alt='media'/>
        <img src={Linkdin} className='media' alt='media'/>
    </div>
    </div>
    <div className='secondline'>
      <div className='seconline-left'>
        <div className='headlineimg'><img src={Logo} className='Logoimg' alt='media'/></div>
        <div className='headline'>
          <div className='head'><Link className='head' to='/Home'>HOME</Link></div>
          <div className='head'><Link className='head' to='/Pages'>PAGES</Link></div>
          <div className='head'><Link className='head' to='/Services'>SERVICES</Link></div>
          <div className='head'><Link className='head' to='/Portfolio'>PORTFOLIO</Link></div>
          <div className='head'><Link className='head' to='/Blog'>BLOG</Link></div>
          <div className='head'><Link className='head' to='/Contects'>CONTECTS</Link></div>
        </div>
      </div>
      <div className='secondline-right'>
        <div className='i_con'><img src={Bag} className='barlogo' alt='media'/></div>
        <div className='i_con'><img src={Search} className='barlogo' alt='media'/></div>
        <div className='i_con'><img src={Dropdownlogo} className='barlogo' alt='media'/></div>
      </div>
    </div>
    </div>
  )
}
