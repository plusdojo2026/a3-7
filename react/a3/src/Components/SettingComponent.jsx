import axios from "axios";
import styles from "./SettingComponent.module.css";
import cat from "../assets/cat.png";
import dog from "../assets/dog.png";
import rabbit from "../assets/rabbit.png";
import gorilla from "../assets/gorilla.png";
import dolphin from "../assets/dolphin.png";
import dinosaur from "../assets/dinosaur.png";

const Setting = ({ nickname, setNickname, icon, setIcon}) => {

    const icons = [
        { id: 1,image: cat },
        { id: 2,image: dog },
        { id: 3,image: rabbit },
        { id: 4,image: gorilla },
        { id: 5,image: dolphin },
        { id: 6, image: dinosaur }
    ];

    const handleComplete = async () => {

        if (nickname.trim() === "" || icon === "") {
            alert("ニックネームの入力、またはアイコンの選択をしてください");
            return;
        }
        
        const data = {
            nickname: nickname,
            icon: {
                id: icon
            }
        };

        console.log(data);

        try {
            await axios.post("http://localhost:8080/api/mypage", data);

        alert("登録しました！");

        } catch(error) {
            console.error(error);
            alert("登録に失敗しました");
        }
    };

    return (
        <div>
            
            <section>
                <h3>-プロフィール-</h3>

                <div className={styles["nickname"]}>
                    <p>⋆ニックネーム⋆</p>
                    <input type="text" 
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)} className={styles["nick-box"]}
                    />
                </div>
                    
                <div>
                    <p className={styles["sel-icon"]}>⋆アイコン選択⋆</p>

                    <div className={styles["icon-list"]}>
                        {icons.map((item) => (
                                <label key={item.id} className={styles["icon-item"]}>
                                    
                                    <img
                                        src={item.image}
                                        className={styles["icon-picture"]}
                                    />

                                        <input
                                        type="radio"
                                        name="icon"
                                        value={item.id}
                                        checked={icon === item.id}
                                        onChange={ (e) => setIcon(Number(e.target.value))}
                                    />
                                    
                                </label>
                    ))}
                    </div>
                </div>

                <br />
                
                <div className={styles["comp-btn"]}>
                    <button onClick={handleComplete}>
                        完了
                    </button>
                </div>

                </section>
            
        </div>

    );
};

export default Setting;