import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import line from "../assets/line.png";

const Login = () => {
    let [user, setUser] = useState({mailAddress: '', password:''});
    const navigate = useNavigate();

    let inputUser = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
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
        setUser({mailAddress: '', password:''});
    }

    return(
        <div className='login-container'>

            <div className='login-box'>
            <h1>きょうのいっぽ</h1>
            <img src={line} alt="ライン" className='title-line' />
            
            {/* ログインID<br></br> */}
            <input type="email" name="mailAddress" value={user.mailAddress} onChange={inputUser} placeholder='メールアドレス'></input>
            <br></br>
            {/* パスワード */}
            <input type="password" name="password" value={user.password} onChange={inputUser} placeholder='パスワード'></input>
            <br></br>
            <div className='button-group'>
            <button onClick={reset} className='reset-btn'>リセット</button>
            <button onClick={clickLogin} className='login-btn'>ログイン</button>
            </div>
            <p className='register'>
                アカウントをお持ちでない方
            </p>
            新規登録は<a href='/NewRegist' className="register-link">こちら</a>
            </div>
        </div>
    );
}

export default Login