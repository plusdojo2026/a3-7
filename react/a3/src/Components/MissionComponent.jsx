import React, { useEffect, useState } from "react"
import axios from 'axios';
import styles from "./MissionComponent.module.css";
import cloud from '../assets/cloud-1.png'


let MissionComponent = () => {

    const [checkedValues, setCheckedValues] = useState([]);
    let [missions, setMissions] = useState([{id: '', value: '', label: ''}]);
    let [date, setDate] = useState("");
    let [missionId, setMissionId] = useState([]);
    const max = 9;
    const min = 3;

    let clearMission = () => {
        let d = new Date();
        let today = d.getFullYear()+"-"+String(d.getMonth() + 1).padStart(2, "0")+"-"+String(d.getDate()).padStart(2,"0");
        const data = {date: today, mission: checkedValues.join(', ')};
        console.log(data);
        if(!data.mission){
            alert("1つ以上選択してください");
        }
        else{
            axios.post('/api/mission/mod', data);
            axios.post('/api/records/add', data)
            .then(response => {
                setCheckedValues([]);
                missionChange();
            })
        }
    }

    let randomNum = (max, min, today) => {
        const numbers = [];
        for (let i = 0; i < max; i++) {
            numbers[i] = i+1;
        }
    const result = [];
    for (let i = 0; i < min; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        result.push(numbers[randomIndex]);
        numbers.splice(randomIndex, 1); // 取り出した要素を削除
    }
    const missiones ={date: today,
        suggest1: {"id": result[0]},
        suggest2: {"id": result[1]},
        suggest3: {"id": result[2]}
    };
    
    return missiones;
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

    let missionChange = () => {
        //console.log("問題",missionId);
            axios.get('/api/mission/include')
            .then(response => {
                const json = response.data;
                const data = [];
                if(!json.suggest1Completed && json.suggest1) {
                    data.push({
                        id: 1,
                        value: json.suggest1.suggest,
                        label: json.suggest1.suggest
                    });
                }
                if(!json.suggest2Completed && json.suggest2) {
                    data.push({
                        id: 2,
                        value: json.suggest2.suggest,
                        label: json.suggest2.suggest
                    });
                }
                if(!json.suggest3Completed && json.suggest3) {
                    data.push({
                        id: 3,
                        value: json.suggest3.suggest,
                        label: json.suggest3.suggest
                    });
                }
                //console.log(data);
                setMissions(data)
            });
    }

    useEffect(() => {
            fetch('/api/mission')
            .then(response => response.json())
            .then((json) => {setDate(json.date);
                console.log(json);
        });
    },[]);

    useEffect(() => {
        if(!date){
            return;
        }
        let d = new Date();
        let today = d.getFullYear()+"-"+String(d.getMonth() + 1).padStart(2, "0")+"-"+String(d.getDate()).padStart(2,"0");
        console.log("date:"+date);
        console.log("today"+today);
        if(date !== today){
            const missiones = randomNum(max,min,today);
            console.log(missiones);
            axios.post('/api/mission/add', missiones).then(() =>{
                setMissionId(missiones);
            });
        }
    },[date]);

    useEffect(() => {
        missionChange();
    },[missionId]);

   

    return (
        <div className={styles.cloud} style={{backgroundImage: `url(${cloud})`}}>
                <p className={styles.heading}>🍀今日のおすすめ</p>
                {missions.length === 0 ? (
                    <>
                        <p className={styles.all}>今日のミッションをすべて</p>
                        <br></br>
                        <p className={styles.complete}>達成しました</p>
                    </>
                ):(
                    <>
                    {missions.map((mission) => (
                        <div key={mission.id} className={styles.mission}>
                            <label>
                            <input type="checkbox" value={mission.value} checked={checkedValues.includes(mission.value)} onChange={handleCheckBoxChange}>
                            </input>
                            {mission.label}
                            <br></br>
                            </label>
                        </div>
                ))}
                <button onClick={clearMission} className={styles.button}>達成</button>
                </>
            )}
        </div>
    );
}

export default MissionComponent;