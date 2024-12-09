import React from 'react'
import './Createuser.css';

export default function Createuser() {
  return (
    <>
      <div className='Createuser'>
            <div className='Createuserimg'>
                <div className='Active'>
                    <span>Active</span>
                </div>
                <div className='Userimg'>
                    <input type='file' id='file-input'/>
                </div>
                <div className='Imgtype'>
                    Allowed*.jpeg,*.jpg,*.png,*.gif max size of 3.1 MB
                </div>
                <div className='Profiletype'>
                    <div className='Data'>
                        Public Profile
                    </div>
                    <div className='Option'>
                        
                    </div>
                </div>
            </div>
            <div className='Userdetails'>

            </div>
      </div>
    </>
  )
}
