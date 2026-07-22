import { useState } from 'react';

const Gallery =() => {

    const [image, setImage] = useState(null);

    const handleUpload = async () => {  //async=待つ処理
        //Spring Bootへ送信
    }

    return (
        <section>
            <h4>＜ベストショット＞</h4>
            
            <input 
                type="file"
                accept="image/*"
                onChange={(e) => setaImage(e.target.files[0])}
            />

            <button onClick={handleUpload}>追加</button>

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