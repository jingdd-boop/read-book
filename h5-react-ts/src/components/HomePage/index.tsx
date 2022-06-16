import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import ArtCart from './components/ArtCart';
import ArtSide from './components/ArtSide';
import './index.css';
import { Route, Router, Routes } from 'react-router';
import { getArtList } from '../../api/artList';
import { getSideList } from '../../api/sideList';

interface IArtListItem {
  item_info: IArtListItemInfo;
  item_type: number;
}

interface IArtListItemInfo {
  advert_id: string;
  advert_type: number;
  author_id: number;
  author_name: string;
  avatar: string;
  brief: string;
  comment_count: number;
  ctime: string;
  digg_count: number;
  discount_rate: number;
  end_time: string;
  id: number;
  item_id: string;
  item_type: number;
  item_user_info: {};
  layout: number;
  mtime: string;
  picture: string;
  platform: number;
  position: number;
  sale_count: number;
  sale_price: number;
  start_time: string;
  station_type: number;
  status: number;
  title: string;
  topic: string;
  topic_id: string;
  url: string;
  user_id: string;
  article_id: string;
  article_info: IArticleInfo;
  author_interact: null;
  author_user_info: IItemUserInfo;
  category: {};
  extra: {};
  org: {};
  tags: [];
}
interface IItemUserInfo {
  company: string;
  description: string;
  user_name: string;
}

interface IArticleInfo {
  brief_content: string;
  title: string;
  cover_image: string;
}

interface IArtSideProps {
  artSideList: ISideListItem[];
}

interface ISideListItem {
  picture: string;
}

const { Header, Content, Footer } = Layout;

const navList = [
  {
    key: -1,
    label: '稀土掘金',
  },
  {
    key: 0,
    label: '首页',
  },
  {
    key: 1,
    label: '沸点',
  },
  {
    key: 2,
    label: '课程',
  },
  {
    key: 3,
    label: '直播',
  },
  {
    key: 4,
    label: '活动',
  },
  {
    key: 5,
    label: '开放社区',
  },
  {
    key: 6,
    label: '商城',
  },
  {
    key: 7,
    label: 'app',
  },
  {
    key: 8,
    label: '插件',
  },
  {
    key: 9,
    label: '开发者大会',
  },
];

function HomePage() {
  const [navActive, setNavActive] = useState('0');

  const [artList, setArtList] = useState([] as IArtListItem[]);
  const [artSideList, setSideList] = useState([] as ISideListItem[]);
  const getArtListFn = async () => {
    const res = await getArtList();
    setArtList(res?.data?.data);
  };
  const getSideListFn = async () => {
    const res = await getSideList();
    setSideList(res?.data?.data);
  };
  useEffect(() => {
    getArtListFn();
    getSideListFn();
  }, []);

  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu
          mode='horizontal'
          defaultSelectedKeys={[navActive]}
          onSelect={(res) => {
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
      <Content>
        <div className='homeContent'>
          <div className='homeContentCenter'>
            <ArtCart artList={artList}></ArtCart>
          </div>
          <div className='homeContentRight'>
            <ArtSide artSideList={artSideList}></ArtSide>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default HomePage;
