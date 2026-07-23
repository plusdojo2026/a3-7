import { useState } from 'react';
import styles from "./GalleryComponent.module.css";

const Gallery =() => {

    const [image, setImage] = useState(null);

    const handleUpload = async () => {  //async=待つ処理
        //Spring Bootへ送信
    }

    return (
        <section>
            <h3>-ベストショット-</h3>
            
            <input 
                type="file"
                accept="image/*"
                onChange={(e) => setaImage(e.target.files[0])}
            />

            <div className={styles["up-btn"]}>
                <button onClick={handleUpload}>追加</button>
            </div>

            <div>
                (画像表示場所)
                {image && (
                    <img
                    src={URL.createObjectURL(image)}
                    alt="選択した画像"
                    width="200"
                   />
                )}
            </div>
        </section>
    );
};

export default Gallery;