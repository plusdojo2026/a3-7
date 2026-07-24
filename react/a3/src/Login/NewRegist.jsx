import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import line from "../assets/line.png";
import './NewRegist.css'
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const NewRegist = () => {
    let [user, setUser] = useState({ mailAddress: '', password: '' });
    let [checkPass, setCheckPass] = useState({ check_pass: '' });
    const navigate = useNavigate();

    let inputUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    let inputCheck = (e) => {
        setCheckPass({ ...checkPass, [e.target.name]: e.target.value });
    }

    let clickRegist = () => {
        const mailPatern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!mailPatern.test(user.mailAddress)) {
            alert("ログインIDにはメールアドレスを入力してください");
        }
        else if (user.password.length < 4) {
            alert("パスワードは4文字以上でお願いします");
        }
        else if (user.password != checkPass.check_pass) {
            alert("パスワードが間違っています");

        }
        else {
            axios.post('/api/newRegist', user).then(response => {
                //console.log(response.data);
                //console.log(typeof response.data);
                if (response.data == "success") {
                    alert("登録成功");
                    navigate("/");
                }
                else if (response.data == "unsuccessful") {
                    alert("このメールアドレスはすでに登録されています");
                }
            })
        }
    }

    return (
        <div className='register-box'>
            <h1>きょうのいっぽ</h1>
            <img src={line} alt="ライン" className='title-line' />
            <p className='register-title'>新規登録</p>
            <br></br>
            <div className='input-box'>
            <FaEnvelope className='input-icon'/>
            <input type="text" name="mailAddress" value={user.mailAddress} onChange={inputUser} placeholder='メールアドレス'></input>
            </div>
            <div className='input-box'>
            <FaLock className='input-icon'></FaLock>
            <input type="password" name="password" value={user.password} onChange={inputUser} placeholder='パスワード'></input>
            </div>
            <div className='input-box'>
            <FaLock className='input-icon'></FaLock>
            <input type='password' name="password" value={checkPass.check_pass} onChange={inputCheck} placeholder='パスワード(確認)'></input>
            </div>
            <br></br>
            <button onClick={clickRegist} className='register-btn'>登録</button>
            <br></br>
            <div className='register-comment'>
            アカウントをお持ちの方は、<a href='/' className="login-link">ログイン</a>
            </div>
        </div>
    );
}

export default NewRegist