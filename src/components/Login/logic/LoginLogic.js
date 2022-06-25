import crypto from 'crypto-js';
import axios from 'axios';

export const decryptLSVal = () => {
  const savedKey = localStorage.key(0);
  let result = null;
  if (savedKey) {
    const savedUserInfo = localStorage.getItem(savedKey);
    const bytes = crypto.AES.decrypt(savedUserInfo, process.env.REACT_APP_SECRET || 'demo key');
    result = bytes.toString(crypto.enc.Utf8);
  }
  return result;
}

const getAuthDb = async () => {
  return await axios.get(process.env.REACT_APP_AUTH_SERVER || '/data/userinfodemo.json');
}

const getAuthRes = (db, ipt) => {
  const authRes = Object.values(db)
    .find(userInfo => userInfo.id === ipt.id && userInfo.pwd === ipt.pwd);
  let result = '';
  if (authRes != null) {
    result = { id: authRes.id, nickname: authRes.nickname };
  } else {
    result = false;
  }
  return result;
}

export const signinUser = (ipt, props) => {
  const { signedUser, loginStat } = props;
  getAuthDb()
    .then(res => {
      const result = getAuthRes(res.data, ipt);
      if (result) {
        signedUser.current.id = result.id;
        signedUser.current.nickname = result.nickname;
        loginStat(true);
      } else {
        alert('사용자 정보가 일치하지 않습니다');
      }
    })
}

const checkAuthExists = () => {
  return Object.keys(localStorage).find(key => key === 'auth');
}

export const saveToLS = userInfo => {
  if (localStorage.key(0) == null || checkAuthExists != null) {
    const cipheredTxt = crypto.AES.encrypt(JSON.stringify(userInfo), process.env.REACT_APP_SECRET || 'demo key').toString();
    localStorage.setItem('auth', cipheredTxt);
  }
}

export const extractUserInfo = event => {
  const id = event.target[0].value;
  const pwd = event.target[1].value;
  return {
    id,
    pwd
  };
}