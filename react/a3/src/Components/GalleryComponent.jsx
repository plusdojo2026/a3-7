import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./GalleryComponent.module.css";
const Gallery = () => {
    const [image, setImage] = useState(null);
    const [upimage, setUpimage] = useState([]);  
    const [visibleCount, setVisibleCount] = useState(5);//さらに表示
    // 画像一覧取得
    const fetchImages = async () => {
        try {
            const response = await axios.get("/api/gallery");
            setUpimage(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchImages();
    }, []);
    // 画像アップロード
    const handleUpload = async () => {
        if (!image) {
            alert("画像を選択してください");
            return;
        }
        const formData = new FormData();
        formData.append("image", image);
        try {
            await axios.post("/api/bestshot", formData, {
                withCredentials: true,
            });
            alert("アップロードしました！");
            fetchImages(); // アップロード後に一覧更新
        } catch (error) {
            console.error(error);
        }
    };

    //画像削除
    const handleDelete = async (id) => {
        if (!window.confirm("この画像を削除しますか？")) {
            return;
        }

        try {
            await axios.delete(`/api/gallery/${id}` ,{
                withCredentials: true,
            });
            alert("削除しました");
            fetchImages(); //削除後に一覧更新
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section>
            <h3>-ベストショット-</h3>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <div className={styles.upBtn}>
                <button onClick={handleUpload}>追加</button>
            </div>
            
            <div className={styles.gallery}>
                {upimage.slice(0, visibleCount).map((item) => (
                    <div key={item.id}>
                        <img
                            src={`http://localhost:8080/${item.image}`}
                            alt="ベストショット"
                            className={styles.image}
                        />

                        <div className={styles.deleteBtn}>    
                            <button 
                                onClick={() => handleDelete(item.id)}>
                                削 除
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
                {visibleCount < upimage.length && (
                    <div className={styles.moreBtn}>
                        <button onClick={() => setVisibleCount(visibleCount + 5)}>
                            さらに表示
                        </button>
                    </div>
                )}
        
        </section>
    );
};
export default Gallery;