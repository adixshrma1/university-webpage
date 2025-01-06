import React, { useRef } from "react";
import nextIcon from "../assets/next-icon.png";
import prevIcon from "../assets/back-icon.png";
import User1 from "../assets/user-1.png";
import User2 from "../assets/user-2.png";
import User3 from "../assets/user-3.png";
import User4 from "../assets/user-4.png";

  const btnClass = "absolute w-12 p-3 bg-[#212ea0] rounded-full cursor-pointer top-1/2 -translate-y-1/2";
  const slide = "text-[#676767] p-10 shadow-md rounded-lg"
  const img = "w-16 rounded-full border-4 border-[#212ea0] mr-2";
  const userInfo = "flex items-center mb-3"
  const userH1 = "text-[#212ea0] font-semibold" 

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const moveBackward =()=>{
    if(tx < 0){
      tx += 25;
      slider.current.style.transform = `translateX(${tx}%)`
    }
  }
  const moveForward =()=>{
    if(tx > -50){
      tx -= 25;
      slider.current.style.transform = `translateX(${tx}%)`
    }
  }
  return (
    <div className="testimonials w-[80%] my-20 px-20 mx-auto relative">
      <img src={prevIcon} className={`${btnClass} left-0 `} onClick={moveBackward}/>
      <img src={nextIcon} className={`${btnClass} right-0 `} onClick={moveForward}/>
      <div className="overflow-hidden">
        <ul ref={slider} className={`flex w-[200%] transition-all duration-500`}>
          <li className="p-5">
            <div className={slide}>
                <div className={userInfo}>
                    <img className={img} src={User1}/>
                    <div>
                        <h1 className={userH1}>Wiliam Jackson</h1>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Choosing to pursue my degree at Edusity Lorem ipsum dolor 
                    sit amet consectetur adipisicing elit. Fugiat ducimus, 
                    tenetur natus, totam, amet quam qui explicabo necessitatibus 
                    deleniti dolorum veniam nulla! Maiores ipsa, distinctio 
                    reiciendis maxime voluptate natus alias!</p>
            </div>
          </li>
          <li className="p-5">
            <div className={slide}>
                <div className={userInfo}>
                    <img className={img} src={User2}/>
                    <div>
                        <h1 className={userH1}>Subash Kumar</h1>
                        <span>Edusity, UK</span>
                    </div>
                </div>
                <p>Choosing to pursue my degree at Edusity Lorem ipsum dolor 
                    sit amet consectetur adipisicing elit. Fugiat ducimus, 
                    tenetur natus, totam, amet quam qui explicabo necessitatibus 
                    deleniti dolorum veniam nulla! Maiores ipsa, distinctio 
                    reiciendis maxime voluptate natus alias!</p>
            </div>
          </li>
          <li className="p-5">
            <div className={slide}>
                <div className={userInfo}>
                    <img className={img} src={User3}/>
                    <div>
                        <h1 className={userH1}>Julie Watson</h1>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Choosing to pursue my degree at Edusity Lorem ipsum dolor 
                    sit amet consectetur adipisicing elit. Fugiat ducimus, 
                    tenetur natus, totam, amet quam qui explicabo necessitatibus 
                    deleniti dolorum veniam nulla! Maiores ipsa, distinctio 
                    reiciendis maxime voluptate natus alias!</p>
            </div>
          </li>
          <li className="p-5">
            <div className={slide}>
                <div className={userInfo}>
                    <img className={img} src={User4}/>
                    <div>
                        <h1 className={userH1}>David Warner</h1>
                        <span>Edusity, AUS</span>
                    </div>
                </div>
                <p>Choosing to pursue my degree at Edusity Lorem ipsum dolor 
                    sit amet consectetur adipisicing elit. Fugiat ducimus, 
                    tenetur natus, totam, amet quam qui explicabo necessitatibus 
                    deleniti dolorum veniam nulla! Maiores ipsa, distinctio 
                    reiciendis maxime voluptate natus alias!</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
