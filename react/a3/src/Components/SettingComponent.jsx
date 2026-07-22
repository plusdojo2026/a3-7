import styles from "./SettingComponent.module.css";


const Setting = ({ nickname, setNickname, icon, setIcon}) => {

    const icons = ["🦍", "🦖", "🐬", "🐩", "🐈", "🐇"];

    const handleComplete = async () => {

        if (nickname.trim() === "" || icon === "") {
            alert("ニックネームの入力、またはアイコンの選択をしてください");
            return;
        }

        const data = {
            nickname: nickname,
            icon: icon
        };

        try {
            await axios.post("http://localhost:8080/api/mypage", data

            );

        alert("登録しました！");

        } catch(error) {
            console.error(error);
            alert("登録に失敗しました");
        }
    };

    return (
        <div>
            
            <section>
                <h3>＜プロフィール＞</h3>

                <div className="nickname">
                    <p>ニックネーム</p>
                    <input type="text" 
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </div>
                    
                <div className="icon-box">
                    <p>アイコン選択</p>

                    <div className={styles["icon-list"]}>
                        {icons.map((picture) => (
                                <label key={picture} className={styles["icon-item"]}>
                                    <span className={styles["icon-picture"]}>{picture}</span>

                                        <input
                                        type="radio"
                                        name="icon"
                                        value={picture}
                                        checked={icon === picture}
                                        onChange={ (e) => setIcon(e.target.value)}
                                    />
                                    
                                </label>
                    ))}
                    </div>
                </div>

                <br />

                <button onClick={handleComplete}>
                    完了
                </button>

                </section>
            
        </div>

    );
};

export default Setting;