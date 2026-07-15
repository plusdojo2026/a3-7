import React, { useEffect, useState } from "react"
import axios from 'axios';


let MissionComponent = () => {

    const [checkedValues, setCheckedValues] = useState([]);
    let [missions, setMissions] = useState([{id: '', value: '', label: ''}]);

    let clearMission = () => {
        axios.put('/records/add/', checkedValues)
        .then(response => {
            setCheckedValues([]);
        });
    }

    const handleCheckBoxChange = (e) => {
        const { value, checked} = e.target;

        if(checked) {
            setCheckedValues([...checkedValues, value]);
        }
        else {
            setCheckedValues(checkedValues.filter((item) => item !== value));
        }
    };

    useEffect(() => {
        fetch('/api/Mission/')
            .then(response => response.json())
            .then(json => {
                const data = json.map(item => ({
                    id: item.id,
                    value: item.mission,
                    label: item.mission
                }));
                setMissions(json)
            });
    },[]);

   

    return (
        <div>
            <h1>🌱今日のおすすめ</h1>
            {missions.map((mission) => (
                <label key={mission.id}>
                <input type="checkbox" value={mission.value} checked={checkedValues.includes(mission.value)} onChange={handleCheckBoxChange}>
                </input>
                {mission.label}
                </label>
            ))}
            <button onClick={clearMission}>達成</button>
        </div>
    );
}

export default MissionComponent;