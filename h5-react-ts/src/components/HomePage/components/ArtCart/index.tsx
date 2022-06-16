import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import { getArtList } from '../../../../api/artList';
import './index.css';

interface artProps {
  artList: IArtListItem[];
}

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

const ArtCart: React.FC<artProps> = (props) => {
  const { artList } = props;
  console.log(artList, '-');
  return (
    <div className='artCart'>
      {artList?.length > 0 &&
        artList?.map((artListItem: IArtListItem, artListIndex: number) => {
          return (
            <div key={artListIndex}>
              {artListItem?.item_type === 14 && (
                <div className='artList'>
                  <div className='artListLeft'>
                    <div className='artListUserName'>
                      {artListItem?.item_info?.author_name}
                    </div>
                    <div className='artListTitle'>
                      {artListItem?.item_info?.title}
                    </div>
                    <div className='artListBrief'>
                      {artListItem?.item_info?.brief}
                    </div>
                  </div>
                  <div className='artListRight'>
                    <img src={artListItem?.item_info?.picture} alt='' />
                  </div>
                </div>
              )}
              {artListItem?.item_type === 2 && (
                <div className='artList'>
                  <div className='artListLeft'>
                    <div className='artListUserName'>
                      {artListItem?.item_info?.author_user_info?.user_name}
                    </div>
                    <div className='artListTitle'>
                      {artListItem?.item_info?.article_info?.title}
                    </div>
                    <div className='artListBrief'>
                      {artListItem?.item_info?.article_info?.brief_content}
                    </div>
                  </div>
                  <div className='artListRight'>
                    <img
                      src={artListItem?.item_info?.article_info?.cover_image}
                      alt=''
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ArtCart;
