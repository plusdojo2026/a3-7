// import {useState, useEffect} from 'react';
import './HeaderComponent.css';
import logout from "../assets/logout.png";
import { NavLink, useNavigate } from 'react-router-dom';
import leaf from "../assets/leaf.png";
import { useEffect, useState } from 'react';
import axios from 'axios';


const HeaderComponent = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("/api/mypage")
            .then(response => setUser(response.data));
    }, []);

    // useEffect(() => {
    //     axios.get("/api/mypage")
    //         .then(res => {
    //             console.log(res.data);
    //         });
    // }, []);

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        const result = window.confirm('ログアウトしますか？');

        if (result) {
            navigate("/");
        }


    };

    return (
        <header className="header">
            <div className='header-left'>
                {user && (
                    <img src={`http://localhost:8080${user.icon.iconPath}`} alt="アイコン" className='header-icon' />
                )}
                {/* <div className="leaf">
                <img src={leaf} alt="葉っぱ" />
            </div> */}
             <div className="title-area">
                <p>きょうのいっぽ</p>
                <div className="leaf-line">
                    <span></span>
                    <img src={leaf} alt="葉っぱ" />
                    <span></span>
                </div>
            </div>
            </div>

            <NavLink to="/" className="logout-icon" onClick={handleLogout}>
                <img src={logout} alt="ログアウト" />
            </NavLink>
        </header>
    )
}
export default HeaderComponent;