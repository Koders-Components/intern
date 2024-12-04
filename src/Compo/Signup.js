import React from 'react'
import Logo from './Logo.jpg';
import './Mix.css';
import Rocket from'./Rocket.png';
import Google from './Google.jpg';
import Facebook from './Facebook.png';

export default function Signup() {
  return (
    <>
      <div className='container'>
        <div className='right'>
            <div className='inside-con'>
                <img className='imglogo' src={Logo} alt="Logo" />
                <h1 className='size'>Sign Up</h1>
                <div className='sadj'>
                    <l className='lt'></l>
                    <h6 className='xm'>Sign up with</h6>
                </div>
            </div>
            <div className="social-buttons">
                <div className='btnadj'>
                    <div class="sbtn">
                        <img src={Google} alt="Google" class="glogo" />
                        <span>Sign in with Google</span>
                    </div>
                </div>        
                <div className='btnadj'>
                    <div class="sbtn">
                        <img src={Facebook} alt="Google" class="glogo" />
                        <span>Sign in with Fasbook</span>
                    </div>
                </div>
            </div>
            <div className='line'>
                <l className='tl'></l>
                <h3 className='or'>Or</h3>
                <l className='tl'></l>
            </div>
            <form>
                <div className='adjj'>
                    <div className='adj'>
                        <label>Name</label>
                        <input type="text"  required />
                    </div>
                    <div className='adj'>
                        <label>Email</label>
                        <input type="email"  required />
                    </div>
                </div>
                <div className='addj'>
                    <div className='adj'>
                        <div className='aad'>
                            <label>Password</label>
                            <label><a href='#'> Forgot Password? </a></label>
                        </div>
                        <input type="password" required />
                    </div>
                </div>  
                <div className='con'>  
                    <label>
                    <input type="checkbox" required /> I agree to the <m>terms & conditions</m>
                    </label>
                </div>
                <button className='btnsub' type="submit">Sign Up for free</button>
                <div className='ald'>
                    <label>Do you already have an account?  <a href='#'>Log in</a></label>
                </div>
            </form>
          </div>
          <div className='left'>
                <img src={Rocket} alt="Logo" className='imgroc' />
          </div>
      </div>
    </>
  )
}
