import crypto from 'crypto-js';
import axios from 'axios';

// localStorage 데이터 불러오기
export const decryptLSVal = () => {
  const savedKey = localStorage.key(0);
  let result = null;
  if (savedKey) {
    const savedUserInfo = localStorage.getItem(savedKey);
    const bytes = crypto.AES.decrypt(
      savedUserInfo,
      process.env.REACT_APP_SECRET || 'demo key'
    );
    result = bytes.toString(crypto.enc.Utf8);
  }
  return result;
};

// DB 불러오기
const getAuthDb = async () => {
  return await axios.get(
    process.env.REACT_APP_AUTH_SERVER || '/data/userinfodemo.json'
  );
};

// DB, 입력 정보 일치 확인
const getAuthRes = (db, ipt) => {
  const authRes = Object.values(db).find(
    (userInfo) => userInfo.id === ipt.id && userInfo.pwd === ipt.pwd
  );
  let result = false;
  if (authRes != null) {
    result = { id: authRes.id, nickname: authRes.nickname };
  }
  return result;
};

// 로그인
export const signinUser = (ipt, props) => {
  const { signedUser, setLoginStat } = props;
  getAuthDb()
    .then((res) => {
      const result = getAuthRes(res.data, ipt);
      if (result) {
        signedUser.current.id = result.id;
        signedUser.current.nickname = result.nickname;
        setLoginStat(true);
      } else {
        alert('사용자 정보가 일치하지 않습니다');
      }
    })
    .catch((err) => new Error(err));
};

// localStorage 데이터 존재여부 확인
const checkAuthExists = () => {
  return Object.keys(localStorage).find((key) => key === 'auth');
};

// localStorage에 데이터 저장
export const saveToLS = (userInfo) => {
  if (localStorage.key(0) == null || checkAuthExists != null) {
    const cipheredTxt = crypto.AES.encrypt(
      JSON.stringify(userInfo),
      process.env.REACT_APP_SECRET || 'demo key'
    ).toString();
    localStorage.setItem('auth', cipheredTxt);
  }
};

// 사용자 정보 추출
export const extractUserInfo = (event) => {
  const id = event.target[0].value;
  const pwd = event.target[1].value;
  return {
    id,
    pwd,
  };
};

const emailRule = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const pwdRule =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[a-zA-Z0-9$@$!%*?&]{8,}/;

export const validateInputVal = (target, txt) => {
  let result = false;
  if (target === 'user_id') {
    result = emailRule.test(txt);
  } else if (target === 'password') {
    result = pwdRule.test(txt);
  }
  return result;
};
