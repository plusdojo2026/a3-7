import { useEffect, useState } from "react";
import MissionComponent from "../Components/MissionComponent"
import PlantComponent from "../Components/PlantComponent";

const Home = () => {
    let [nickname, setNickname] = useState("");

    useEffect(() => {
        fetch('/api/home')
        .then(response => response.json())
        .then((json) => setNickname(json.nickname));
    }, []);

    return(
        <div>
            <p>おはようございます。{nickname}さん。</p>
            <MissionComponent></MissionComponent>
            <PlantComponent></PlantComponent>
        </div>
    )
}
export default Home;