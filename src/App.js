import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './components/Global/Main';
import Login from './components/Login/Login';
import Gnb from './components/Gnb/Gnb';
import Feeds from './components/Feeds/Feeds';

function App() {
  const userInfo = useRef({ id: '', nickname: '' });
  const [loginStat, setLoginStat] = useState(false);
  const navigate = useNavigate();
  const loginComp = <Login signedUser={userInfo} setLoginStat={setLoginStat} />;
  const feedsComp = <Feeds signedUser={userInfo} />;
  useEffect(() => {
    if (loginStat) {
      navigate('/main');
    } else {
      navigate('/');
    }
  }, [loginStat]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Main child={loginComp} />}
        />
        <Route
          path="/main"
          element={
            <>
              <Gnb setLoginStat={setLoginStat} />
              <Main child={feedsComp} />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;