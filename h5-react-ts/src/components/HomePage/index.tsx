import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import AboutPage from '../AboutPage';
import ShopPage from '../ShopPage';
import FormPage from '../FormPage';
import { Route, Routes } from 'react-router';

const { Header, Content, Footer } = Layout;

const navList = [
  {
    key: 0,
    label: '页面1',
  },
  {
    key: 1,
    label: '页面2',
  },
  {
    key: 2,
    label: '页面3',
  },
];

function HomePage() {
  const [navActive, setNavActive] = useState('1');

  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={[navActive]}
          onSelect={(res) => {
            console.log(res, 'pp');
            setNavActive(res.key);
          }}
          items={navList.map((item, index) => {
            return {
              key: item.key,
              label: item.label,
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {navActive === '0' && (
          <div className='site-layout-content'>
            <AboutPage />
          </div>
        )}
        {navActive === '1' && (
          <div className='site-layout-content'>
            <ShopPage />
          </div>
        )}
        {navActive === '2' && (
          <div className='site-layout-content'>
            <FormPage />
          </div>
        )}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Jing Da
      </Footer>
    </Layout>
  );
}

export default HomePage;
