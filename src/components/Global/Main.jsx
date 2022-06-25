import React from 'react';

const Main = ({ child }) => {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      { child }
    </main>
  );
}

export default Main;