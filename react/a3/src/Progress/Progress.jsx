import axios from "axios";
import { useState } from "react";
import "./Progress.css";
import HeaderComponent from "../Components/HeaderComponent";
import FooterComponent from "../Components/FooterComponent";

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
            <HeaderComponent />

            <div className="cal">
                <p className="cal-text">{ formatted } の記録</p>
            </div>
        
            <div className="effort-box">
                <div>
                    <p className="today-effort">🍃今日頑張ったこと</p>
                    <textarea className="eff-text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <div className="feeling-box">
                    <p className="today-feeling">💗今日の気分</p>

                    <div className="feel-box">
                    {feelings.map((emoji) => (
                        <label key={emoji} className="feel-item">
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
                </div>
                
            </div>

            <div>
                <div className="happy-box">
                    <p className="get-happy">💡見つけた癒し・幸せ</p>
                    <textarea className="hap-text"
                        value={healing}
                        onChange={(e) => setHealing(e.target.value)}
                    />
                </div>
            </div>
            
            <div className="btns-box">
                <div className="btns">
                    <button onClick={handleReset}>
                        リセット
                    </button>
                </div>
                <div className="btns">
                    <button onClick={handleSubmit}>
                        報告
                    </button>
                </div>
            </div>
            
            <FooterComponent />
        </div>

    );
};

export default Progress;
