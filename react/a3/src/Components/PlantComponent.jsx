import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import plant1 from '../assets/plant1.png'
import plant2 from '../assets/plant2.png'
import plant3 from '../assets/plant3.png'
import plant4 from '../assets/plant4.png'
import plant5 from '../assets/plant5.png'
import plant6 from '../assets/plant6.png'
import plant7 from '../assets/plant7.png'

import styles from "./PlantComponent.module.css";
import { useEffect, useState } from 'react'

let PlantComponent = () => {
    let[plant, setPlant] = useState(plant1);

    useEffect(() => {
        fetch("/api/plant")
        .then(response => response.json())
        .then(json => {
            let count = json;
            console.log(count);
            //テスト用
            count = 28;
            if(count>=28){
                setPlant(plant7);
            }
            else if(count>=22){
                setPlant(plant6);
            }
            else if(count>=16){
                setPlant(plant5);
            }
            else if(count>=10){
                setPlant(plant4);
            }
            else if(count>=5){
                setPlant(plant3);
            }
            else if(count>=2){
                setPlant(plant2);
            }
            else{
                setPlant(plant1);
            }
        });
    }, []);

    return(
        <div>
            <img src = {plant} className={styles.img}></img>
        </div>
    )
}
export default PlantComponent;