import React from 'react'
import image from '../Images/image.jpeg'
import icon from '../Images/icon.png'


function Header() {
    return (
        <header>
            <img src = {icon} alt = 'icon' className='share'/>


            <div className='image'>
                <img src= {image} id='profile_img' alt='Profile pic' />
                

            </div>
           
            <h2 id = 'slack'> Van-Excel Acheampong</h2>
        </header>
        
        
      
    );
  }
  
  export default Header;
  