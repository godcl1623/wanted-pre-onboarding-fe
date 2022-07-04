import React from 'react';
import { Link } from 'react-router-dom';
import { DownCnt } from '../style/LoginStyled';

const AppDown = () => {
  return (
    <DownCnt id="container-app-download">
      <p>앱을 다운로드하세요.</p>
      <section id="container-store-logo">
        <Link to="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
          <img src="/assets/iosdown.png" alt="AppStore Download" />
        </Link>
        <Link to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D6BD5DA95-C684-4FA9-A602-C5BB5EC42CD2%26utm_content%3Dlo%26utm_medium%3Dbadge">
          <img src="/assets/anddown.png" alt="GooglePlay Download" />
        </Link>
      </section>
    </DownCnt>
  );
};

export default AppDown;
