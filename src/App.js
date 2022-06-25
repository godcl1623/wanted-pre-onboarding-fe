import React from 'react';
import Main from './components/Global/Main';
import Login from './components/Login/Login';
import Gnb from './components/Gnb/Gnb';
import Feeds from './components/Feeds/Feeds';

function App() {
  // return <Main child={<Login />} />;
  return (
    <>
      <Gnb />
      <Main child={<Login />} />
    </>
  );
}

export default App;
