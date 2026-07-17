import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let [user, setUser] = useState({mailAddress: '', password:''});
    const navigate = useNavigate();

    let inputUser = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    let clickLogin = () => {
        console.log(user);
        axios.post('/api/login', user)
        .then(() => {
            console.log("success");
            navigate("/home");
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
        <div>
            ログインID<br></br>
            <input type="text" name="mailAddress" value={user.mail_address} onChange={inputUser}></input>
            <br></br>
            パスワード
            <br></br>
            <input type="password" name="password" value={user.password} onChange={inputUser}></input>
            <br></br>
            <button onClick={clickLogin}>ログイン</button>
            <button onClick={reset}>リセット</button>
            <br></br>
            <a href='/NewRegist'>新規登録</a>
        </div>
    );
}

export default Login