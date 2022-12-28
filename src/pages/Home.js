import React from 'react';
import HeaderLogo from '@components/views/header-logo';
import Table from '@components/views/home/table';
import Cart from '@components/views/cart';

function Home() {
  return (
    <div className="home">
      <HeaderLogo />
      <div className="container">
        <Table />
      </div>
      <Cart />
    </div>
  );
}

export default Home;
