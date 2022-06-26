import React, { useState, useRef, useEffect } from 'react';
import Main from './components/Global/Main';
import Login from './components/Login/Login';
import Gnb from './components/Gnb/Gnb';
import Feeds from './components/Feeds/Feeds';

function App() {
  const userInfo = useRef({ id: '', nickname: '' });
  const [loginStat, setLoginStat] = useState(false);
  const [currentComp, setCurrentComp] = useState(<Login signedUser={userInfo} setLoginStat={setLoginStat} />);
  useEffect(() => {
    if (loginStat) {
      setCurrentComp(<Feeds signedUser={userInfo} />);
    } else {
      setCurrentComp(<Login signedUser={userInfo} setLoginStat={setLoginStat} />);
    }
  }, [loginStat]);
  return (
    <>
      { loginStat ? <Gnb setLoginStat={setLoginStat} /> : '' }
      <Main child={currentComp} />
    </>
  );
}

export default App;
