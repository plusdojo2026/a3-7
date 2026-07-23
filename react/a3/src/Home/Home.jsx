import { useEffect, useState } from "react";
import MissionComponent from "../Components/MissionComponent"
import PlantComponent from "../Components/PlantComponent";
import "./Home.css";
import "../Components/MissionComponent.module.css";

const Home = () => {
    let [nickname, setNickname] = useState("");

    useEffect(() => {
        fetch('/api/home')
        .then(response => response.json())
        .then((json) => setNickname(json.nickname));
    }, []);

    return(
        <div className="home">
        <div>
            <p className="name">ようこそ。{nickname}さん。</p>
            <MissionComponent></MissionComponent>
            <PlantComponent></PlantComponent>
        </div>
        </div>
    )
}
export default Home;