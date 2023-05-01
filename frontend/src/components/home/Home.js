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
    <div className="container">
      <div className="row">
        <div id="home" className="col-sm-5 col-md-8">
          <h1 id="welcome">Welcome to Deliveroo</h1>
          <p>Your smart choice parcel delivery service.
          Sign up to gain access to a quick and efficient delivery for your  personal use or business products</p>
          { (auth && admin) ? 
           <>
            <Link to="/orders"><button id="btn">Get Stated</button></Link>
           </>
           :
           <>

            { auth && !admin ?  <>
              <Link to="/orderlist"><button id="btn">Get Stated</button></Link>
            </> :
            <>
             <Link to="/login"><button id="btn">Get Stated</button></Link>
            </>

            }
                    
           </>

          }
          
          { (auth && !admin) ? 
           <>
            <Link to="/orderlist"><button id="btn">Get Stated</button></Link>
           </>
           :
           <></>

          }
        </div>
        <div className="col-sm-5 offset-sm-2 col-md-4 offset-md-0">
          <img id="img" src={image} alt="Deliveroo" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;
