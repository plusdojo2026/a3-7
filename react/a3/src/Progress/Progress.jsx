import { useState } from "react";
import "./Progress.css";

const Progress = () => {

    const today = new Date();
    const formatted = today
    .toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    .split("/")
    .join("-");
    
    const [comment, setComment] = useState("");
    const [feeling, setFeeling] = useState("");
    const [healing, setHealing] = useState("");

    const handleSubmit = () => {

        if (feeling === "") {
            alert("今日の気分を選択してください");
            return;
        }

        console.log({
            comment,
            feeling,
            healing
        });

        //SpringBootへ送信する

        alert("登録しました！");
    };

    const handleReset = () => {
        setComment("");
        setFeeling("");
        setHealing("");
    };

    const feelings = ["😄", "😎", "😢", "😔", "😠"];

    return (
        <div>
            <h2>成長記録</h2>
            <div className="cal-box">
                <div  className="cal">
                <p>{ formatted }</p>
                </div>
            </div>

            <div>
                <p>今日頑張ったこと</p>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>

            <div>
                <p>今日の気分</p>
                
                {feelings.map((emoji) => (
                    <label key={emoji} style={{ marginRight: "15px" }}>
                        <input 
                        type="radio"
                        name="feeling"
                        value={emoji}
                        checked={feeling === emoji}
                        onChange={ (e) => setFeeling(e.target.value)}
                        />
                        {emoji}
                    </label>
                ))}
            </div>

            <div>
                <p>見つけた癒し・幸せ</p>
                <textarea
                    value={healing}
                    onChange={(e) => setHealing(e.target.value)}
                />
            </div>

            <button onClick={handleSubmit}>
                報告
            </button>

            <button onClick={handleReset}>
                リセット
            </button>  
        </div>
    );
};

export default Progress;