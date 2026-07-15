import axios from 'axios';
import { useState } from 'react';

const NewRegist = () => {
    let [user, setUser] = useState({mail_address: '', password:''});
    let [checkPass, setCheckPass] = useState({check_pass: ''});

    let inputUser = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    let inputCheck = (e) => {
        setCheckPass({...checkPass, [e.target.name]:e.target.value})
    }

    let clickRegist = () => {
        if(user.password == checkPass.check_pass){
            axios.post('/api/NewRegist', user);
        }
        else{
            alert("パスワードが間違っています");
        }
    }

    return(
        <div>
            ログインID<br></br>
            <input type="text" name="mail_address" value={user.mail_address} onChange={inputUser}></input>
            <br></br>
            パスワード
            <br></br>
            <input type="password" name="password" value={user.password} onChange={inputUser}></input>
            <br></br>
            パスワード確認
            <br></br>
            <input type='password' name="check_pass" value={checkPass.check_pass} onChange={inputCheck}></input>
            <br></br>
            <button onClick={clickRegist}>登録</button>
            <br></br>
            <a href='/'>ログイン</a>
        </div>
    );
}

export default NewRegist