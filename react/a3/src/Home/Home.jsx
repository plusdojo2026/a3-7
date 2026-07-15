import { useEffect, useState } from "react";
import MissionComponent from "../Components/MissionComponent"
import PlantComponent from "../Components/PlantComponent";

const Home = () => {
    let [nickname, setNickname] = useState("");

    useEffect(() => {
        fetch('/user')
        .then(response => response.json())
        .then((data) => setNickname(data.nickname));
    }, []);

    let message = (name) => {
        setNickname(name);
    }

    return(
        <div>
            <p>おはようございます。{nickname}さん。</p>
            <MissionComponent></MissionComponent>
            <PlantComponent></PlantComponent>
        </div>
    )
}
export default Home;