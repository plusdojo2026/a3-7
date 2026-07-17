// import {useState, useEffect} from 'react';
import './HeaderComponent.css'
//import axios from 'axios';
import logout from "../assets/logout.png";
import { NavLink } from 'react-router-dom';


const HeaderComponent = () => {
    return (
        <header className="header">
            <p>🌱きょうのいっぽ</p>
            <NavLink to="/" className="logout-icon">
                <img src={logout} alt="ログアウト" />
            </NavLink>
        </header>
    )
}
export default HeaderComponent;