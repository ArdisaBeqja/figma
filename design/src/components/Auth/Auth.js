
import * as React from "react";
import  '../../style/Kosherja.css';
import Bg from '../../images/Bg.png';

import Login from './login';
function Auth() {
  return (
    <>
  
      <div className="div">
        <div className="div-2">
          <div className="column">
            <div
              className="div-3"
              style={{
                backgroundImage: `url(${Bg})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
                <div className="div33">
              <div className="div-4">Kosherja</div>
              <div className="div-5">
                Where Your Academic Journey Feels Like Home.
              </div>
              <div className="div-6">Read More</div>
              <div className="div-7">
                <div className="div-8" />
              </div>
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="div-9">
              <div className="div-10">Hello Again!</div>
              <div className="div-11">Welcome Back</div>

              <div className="form">
               <Login/>
              </div> 
          
               
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Auth;