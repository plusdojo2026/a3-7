/*import Common from '../Components';*/
import Setting from '../Components/SettingComponent';
import Gallery from '../Components/GalleryComponent';
import { useState } from 'react';

const MyPage = () => {

    const [nickname, setNickname] = useState("");
    const [icon, setIcon] = useState("");

    

    return (
        <>
           
            <main>
            <h2>マイページ</h2>

            <Setting
                nickname={nickname}
                setNickname={setNickname}
                icon={icon}
                setIcon={setIcon}
            />

            <Gallery />
            </main>
        </>
    );
};

export default MyPage;