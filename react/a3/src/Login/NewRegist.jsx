import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewRegist = () => {
    let [user, setUser] = useState({mailAddress: '', password:''});
    let [checkPass, setCheckPass] = useState({check_pass: ''});
    const navigate = useNavigate();

    let inputUser = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    }

    let inputCheck = (e) => {
        setCheckPass({...checkPass, [e.target.name]:e.target.value});
    }

    let clickRegist = () => {
        const mailPatern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!mailPatern.test(user.mailAddress)){
            alert("ログインIDにはメールアドレスを入力してください");
        }
        else if(user.password.length < 4) {
            alert("パスワードは4文字以上でお願いします");
        }
        else if(user.password != checkPass.check_pass) {
            alert("パスワードが間違っています");
            
        }
        else{
            axios.post('/api/newRegist', user).then(response => {
                //console.log(response.data);
                //console.log(typeof response.data);
                if(response.data=="success"){
                    alert("登録成功");
                    navigate("/");
                }
                else if(response.data=="unsuccessful"){
                    alert("このメールアドレスはすでに登録されています");
                }
            })
        }
    }

    return(
        <div>
            ログインID<br></br>
            <input type="text" name="mailAddress" value={user.mailAddress} onChange={inputUser}></input>
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