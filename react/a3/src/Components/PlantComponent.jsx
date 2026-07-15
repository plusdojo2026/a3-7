import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import { useEffect, useState } from 'react'

let PlantComponent = () => {
    let[tree, setTree] = useState(heroImg);
    let[flower, setFlower] = useState(viteLogo);

    useEffect(() => {
        kindPlant(9);
    }, []);

    let kindPlant = (count) =>{
        if(count>30){
            setTree(heroImg);
            setFlower(heroImg);
        }
        else if(count>20){
            setTree(reactLogo);
            setFlower(viteLogo);
        }
        else if(count>10){
            setTree(heroImg);
            setFlower(heroImg);
        }
    };

    return(
        <div>
            <p>植物の状態</p>
            <img src = {tree}></img>
            <br></br>
            <img src = {flower}></img>
        </div>
    )
}
export default PlantComponent;