import { useEffect, useState } from "react";
import './Apod.css'; 

const API_URL_1 = 'https://api.nasa.gov/planetary/apod?api_key=h17Tn9Id0N9XCHW7wXdkv5iRpE6bzOvdtpbYVfKT';
const IMG_URL = 'https://apod.nasa.gov/apod/image/2306/NGC-6872-LRGB-rev-5-crop-CDK-1000-22-May-2023.jpg';

const Apod = () => {
    const [apod, setApod] = useState([]);

    const fetchData = () => {
        fetch(API_URL_1)
        .then(res => res.json())
        .then(data => setApod(data.image))
        .catch(err => console.error(err)); 
    } 

    useEffect(() => {
        fetchData(); 
    }, []); 

    return (
            <div className="apod--img">

                <img src={IMG_URL} alt="API image"/>

            </div>
        
    )
}

export default Apod;