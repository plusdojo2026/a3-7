import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import line from "../assets/line.png";
import leaf from "../assets/leaf.png";
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const Login = () => {
    let [user, setUser] = useState({ mailAddress: '', password: '' });
    const navigate = useNavigate();

    let inputUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    let clickLogin = () => {
        console.log(user);
        axios.post('/api/login', user)
            .then(() => {
                console.log("success");
                navigate("/Home");
            })
            .catch((err) => {
                console.log("error", err);
                alert("メールアドレスまたはパスワードが違います");
            });
    }

    let reset = () => {
        setUser({ mailAddress: '', password: '' });
    }

    return (
            <div className='login-container'>
            <div className='login-box'>
                <h1>きょうのいっぽ</h1>
                <img src={line} alt="ライン" className='title-line' />

                {/* ログインID<br></br> */}
                <div className='input-box'>
                    <FaEnvelope className='input-icon'/>
                <input type="email" name="mailAddress" value={user.mailAddress} onChange={inputUser} placeholder='メールアドレス'></input>
                </div>
                
                {/* パスワード */}
                <div className='input-box'>
                    <FaLock className='input-icon'></FaLock>
                <input type="password" name="password" value={user.password} onChange={inputUser} placeholder='パスワード'></input>
                </div>
                <div className='button-group'>
                    <button onClick={reset} className='reset-btn'>リセット</button>
                    <button onClick={clickLogin} className='login-btn'>ログイン</button>
                </div>
                <div className="leaf-icon">
                    <img src={leaf} alt="葉っぱ" />
                </div>
                <p className='register'>
                    アカウントをお持ちでない方<br></br>新規登録は<a href='/NewRegist' className="register-link">こちら</a>
                </p>
            </div>
            </div>
    );
}

export default Login