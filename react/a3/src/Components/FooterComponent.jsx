// import {useState, useEffect} from 'react';
import './FooterComponent.css'
//import axios from 'axios';
import home from "../assets/home.png";
import record from "../assets/record.png";
import input from "../assets/input.png";
import mypage from "../assets/mypage.svg";
import { NavLink } from 'react-router-dom';

const FooterComponent = () => {
    return (
            <footer className="footer">
      <NavLink to="/Home" className="nav-item">
        <img src={home} alt="ホーム" />
        <p>ホーム</p>
      </NavLink>

      <NavLink to="/Progress" className="nav-item">
        <img src={record} alt="頑張り記入" />
        <p>記録する</p>
      </NavLink>

      <NavLink to="/Memory" className="nav-item">
        <img src={input} alt="成長記録" />
        <p>振り返り</p>
      </NavLink>

      <NavLink to="/MyPage" className="nav-item">
        <img src={mypage} alt="マイページ" />
        <p>マイページ</p>
      </NavLink>
    </footer>
    )
}
export default FooterComponent;