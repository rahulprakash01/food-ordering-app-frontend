import hero from '../assets/plate in red theme.jpeg';

const Hero = () => {
    return (
      <div>
        <img src={hero} className="w-full max-h-[600px] object-cover" />
      </div>
    );
  };
// import SimpleImageSlider from "react-simple-image-slider";

// const images = [
//   { url: hero },
//   { url: "images/2.jpg" },
//   { url: "images/3.jpg" },
//   { url: "images/4.jpg" },
//   { url: "images/5.jpg" },
//   { url: "images/6.jpg" },
//   { url: "images/7.jpg" },
// ];

// const Hero = () => {
//   return (
//     <div className="w-full max-h-[600px] object-cover">
//       <div className="slider-container">
//         <SimpleImageSlider 
//           width={'100%'}
//           height={600}
//           images={images}
          
//         showBullets={true}
//           showNavs={true}
//           slideDuration={0.5}
//           autoPlay={true}
//           autoPlayDelay={1}
//         />
//       </div>
//     </div>
//   );
// }
export default Hero;
