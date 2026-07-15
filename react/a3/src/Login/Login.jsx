import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
    let [user, setUser] = useState({mail_address: '', password:''});

    let inputUser = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    let clickLogin = () => {
        axios.post('/api/Login', user)
        .then(() => {
            navigate("/home");
        })
        .catch(() => {
            alert("メールアドレスまたはパスワードが違います");
        });
    }

    let reset = () => {
        setUser({mail_address: '', password:''});
    }

    return(
        <div>
            ログインID<br></br>
            <input type="text" name="mail_address" value={user.mail_address} onChange={inputUser}></input>
            <br></br>
            パスワード
            <br></br>
            <input type="text" name="password" value={user.password} onChange={inputUser}></input>
            <br></br>
            <button onClick={clickLogin}>ログイン</button>
            <button onClick={reset}>リセット</button>
            <br></br>
            <a href='/NewRegist'>新規登録</a>
        </div>
    );
}

export default Login