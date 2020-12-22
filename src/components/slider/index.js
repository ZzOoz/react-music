// import React, { useState, useEffect } from "react";
// import { SliderContainer } from "./style";
// import 'swiper/swiper-bundle.css'
// import Swiper from "swiper";

// function Slider(props) {
//   const [sliderSwiper, setSliderSwiper] = useState(null);
//   const { bannerList } = props;
//   console.log(bannerList,'bannerList')
//   // 当bannerList和sliderSwiper发生变化的时候才会触发
//   useEffect(() => {
//     // bannerList的长度和不存在sliderSwiper的时候
//     if (bannerList.length && !sliderSwiper) {
//       let newSlider = new Swiper(".slider-container", {
//         loop: true,
//         autoplay: {
//           delay: 3000,
//           disableOnInteraction: false,
//         },
//         pagination: { el: ".swiper-pagination" },
//       });
//       // useState里面的set方法注入newSlider
//       setSliderSwiper(newSlider);
//     }
//   }, [bannerList.length, sliderSwiper]);

//   return (
//     <div>
//         {/* div样式 */}
//       <SliderContainer>
//         <div className="slider-container">
//           <div className="slider-wraper">
//             {bannerList.map((banner) => {
//               return (
//                 <div className="slider-slide">
//                   <div className="slider-nav">
//                     <img
//                       src={banner.imageUrl}
//                       width="100%"
//                       height="100%"
//                       alt="推荐"
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </SliderContainer>
//     </div>
//   );
// }

// export default React.memo(Slider);


//components/slider/index.js
import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style';
import 'swiper/swiper-bundle.css'
import Swiper from "swiper";

function Slider (props) {
  const [sliderSwiper, setSliderSwiper] = useState (null);
  const { bannerList } = props;

  useEffect (() => {
    if (bannerList.length && !sliderSwiper){
        let newSliderSwiper = new Swiper(".slider-container", {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {el:'.swiper-pagination'},
        });
        setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);
  
  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map (slider => {
              return (
                <div className="swiper-slide" key={slider.imageUrl}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div> 
    </SliderContainer>
  );
}

export default React.memo(Slider);