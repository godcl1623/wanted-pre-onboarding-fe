import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Main from './pages/Main';
import Login from './pages/Login';
import Gnb from './components/Gnb/Gnb';
import Feeds from './components/Feeds/Feeds';

function App() {
  const userInfo = useRef({ id: '', nickname: '' });

  const [loginStat, setLoginStat] = useState(false);
  const [feedsData, setFeedsData] = useState();

  const navigate = useNavigate();

  const loginComp = <Login signedUser={userInfo} setLoginStat={setLoginStat} />;
  const feedsComp = feedsData ? (
    feedsData.map((data, idx) => (
      <Feeds key={idx} signedUser={userInfo} feedData={data} />
    ))
  ) : (
    <Feeds signedUser={userInfo} />
  );

  useEffect(() => {
    if (loginStat) {
      axios
        .get('/data/feedsdb.json')
        .then((res) => setFeedsData(Object.values(res.data)))
        .then(() => navigate('/main'))
        .catch((err) => new Error(err));
    } else {
      navigate('/');
    }
  }, [loginStat]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main child={loginComp} />} />
        <Route
          path="/main"
          element={
            <>
              <Gnb setLoginStat={setLoginStat} />
              <Main child={feedsComp} loginStat={loginStat} />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
