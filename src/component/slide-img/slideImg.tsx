import car1 from './../../assets/car1.jpg'
import car2 from './../../assets/car2.jpg'
import car3 from './../../assets/car3.jpg'
import car4 from './../../assets/car4.jpg'
import car5 from './../../assets/car5.jpg'
import { ImageSlider } from './imageSlider'

const IMG = [car1,car2,car3,car4,car5];

export default function SlideImg()  {
    return (
    <div style={{maxWidth: "1200px", 
                width: "100%", 
                height: "500px", 
                margin: "0 auto",
                aspectRatio: "10 / 2"}}>
        <ImageSlider imageUrls={IMG} />
    </div> 
    );
}