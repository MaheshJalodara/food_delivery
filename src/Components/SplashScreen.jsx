import React, { useState, useRef } from 'react'
import Slider from 'react-slick';
import splashScreens from '../Data/splashScreens'
import "primeflex/primeflex.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SplashScreen(props) {
    const [backgroundImage, setBackgroundImage] = useState("mobile_background");
    const [btnvalue, setBtnvalue]= useState('Next');
    // const [activeSlide2, setActiveSlide2] = useState(0);
    // const ans = splashScreens.map((item) => <li>{item.id}</li>)
    let sliderRef = useRef(null);
    if(btnvalue === 0){
        setBtnvalue('Next');
    }
    if(btnvalue === 1){
        setBtnvalue('Next');
    }
    if(btnvalue === 2){
        setBtnvalue('Finish');
    }
    const next = () => {
        sliderRef.slickNext();
        // setBackgroundImage('change_background');
       
    };
   
    const settings = {
    
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        afterChange: current => setBtnvalue(current)
    };
    return (
        <div className={`${backgroundImage} relative`}>
            <div className='grid absolute splash_box'>
                <div className='col-10 col-offset-1 p-0'>
                    {/* <h3>sdfsdfs</h3> */}
                    <Slider ref={slider => {
                        sliderRef = slider;
                    }} {...settings}>
                        {splashScreens.map(screen => (
                            <div key={screen.id} className="splash-screen">
                                <h2 className="splash-text fs-32 text-center font-medium line-heigh-40">{screen.title}</h2>
                                {/* <img src={screen.image} alt={`Slide ${screen.id}`} className="splash-image" /> */}
                                <p className='detail_text fs-20 text-center '>{screen.detail}</p>
                            </div>
                        
                        ))}
                    </Slider>
                    <div style={{  marginTop: "30%" }} className='grid'>
                        <div className='col-6'>
                        <a href='/' className="no-btn " >
                            Skip
                        </a>
                        </div>
                        <div className='col-6 text-right'>
                          
                        <button className="no-btn " onClick={next}>
                            
                          {btnvalue}
                         
                            
                        </button>
                        
                        </div>
                      {/* <p>{ans}</p> */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
