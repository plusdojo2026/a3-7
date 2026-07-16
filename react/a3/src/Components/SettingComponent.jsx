import styles from "./SettingComponent.module.css";

const Setting = ({ nickname, setNickname, icon, setIcon}) => {

    const icons = ["🦍", "🦖", "🐬", "🐩", "🐈", "🐇"];

    const handleComplete =() => {
        console.log({
            nickname,
            icon
        });
        alert("登録しました！");
    };

    return (
        <section>
            <h4>プロフィール</h4>

            <p>ニックネーム</p>
            <input type="text" 
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            
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

           <br />

           <button onClick={handleComplete}>
            完了
           </button>

        </section>
    );
};

export default Setting;