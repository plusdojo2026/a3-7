// import {useState, useEffect} from 'react';
import './HeaderComponent.css';
//import axios from 'axios';
import logout from "../assets/logout.png";
import { NavLink, useNavigate } from 'react-router-dom';


const HeaderComponent = () => {

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
            <p>🌱きょうのいっぽ</p>
            <NavLink to="/" className="logout-icon" onClick={handleLogout}>
                <img src={logout} alt="ログアウト" />
            </NavLink>
        </header>
    )
}
export default HeaderComponent;