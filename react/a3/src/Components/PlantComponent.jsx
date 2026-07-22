import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import { useEffect, useState } from 'react'

let PlantComponent = () => {
    let[tree, setTree] = useState(reactLogo);
    let[flower, setFlower] = useState(viteLogo);

    useEffect(() => {
        fetch("/api/plant")
        .then(response => response.json())
        .then(json => {
            let count = json;
            console.log(json);
            console.log(count);

            if(count>=30){
                setTree(heroImg);
                setFlower(heroImg);
            }
            else if(count>=20){
                setTree(reactLogo);
                setFlower(viteLogo);
            }
            else if(count>=10){
                setTree(heroImg);
                setFlower(heroImg);
            }
            else {
                setTree(reactLogo);
                setFlower(viteLogo);
            }
        });
    }, []);

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