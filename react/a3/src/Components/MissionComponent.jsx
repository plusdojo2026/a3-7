import React, { useEffect, useState } from "react"

let MissionComponent = () => {

    const [checkedValues, setCheckedValues] = useState([]);
    let [missions, setMissions] = useState([]);

    let clearMission = () => {
        axios.put('/records/add/', checkedValues).then(response => {
            refreshMissionList();
            setCheckedValues([]);
        })
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
        refreshMissionList();
    }, []);

    let refreshMissionList = () => {
        fetch('/api/book/')
            .then(response => response.json())
            .then(json => setMissions(json));
    }

    let MISSION = [
        {id: 1, value:"夜空を見上げる", label:"夜空を見上げる"}
    ];

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