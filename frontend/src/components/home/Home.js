import React from 'react';
import './Home.css';
import image from './homepage-image.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


function Home() {
  const auth = localStorage.getItem("isAuthenticated")
  const admin = localStorage.getItem("admin")

  
  console.log("isAuthenticated "+auth)
  console.log("admin "+admin)

  return (
  <div>
      <div className="home_container">
        <div id="home" className="">
          <h1 id="welcome">Welcome to Deliveroo</h1>
          <p id="welcome_subtext">Your smart choice parcel delivery service.
          Sign up to gain access to a quick and efficient delivery for your  personal use or business products</p>
          { (auth && admin) ? 
           <>
            <Link to="/orderlist"><button id="btn">Get Started</button></Link>
           </>
           :
           <>

            { auth && !admin ?  <>
              <Link to="/order"><button id="btn">Get Started</button></Link>
            </> :
            <>
             <Link to="/login"><button id="btn">Get Started</button></Link>
            </>

            }
                    
           </>

          }
          { !auth && (
             <>
             <Link to="/login"><button id="btn">Get Started</button></Link>
            </>
          )
          }
          
  
        </div>
        <div className="">
          <img id="img" src={image} alt="Deliveroo" />
        </div>
      </div>

      <div className='secondary_container'>
          <div className='block block_one'>
            <p className='block_text'>Fast</p>
          </div>
          <div className='block block_two'>

            <p className='block_text'>Reliable</p>
          </div>
          <div className='block block_three'>
            <p className='block_text'>Honest</p>
          </div>
          <div className='block block_four'>
          <p className='block_text'>Afforable</p>
          </div>
      </div>

  </div>
  );
}

export default Home;
