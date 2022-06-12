import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import { getVideoList } from '../../api/videoList';
import ReactPlayer from 'react-player';

interface IVideoItem {
  coverUrl: string;
  duration: string;
  id: number;
  playUrl: string;
  title: string;
  userName: string;
  userPic: string;
}

function AboutPage() {
  const [videoList, setVideoList] = useState([] as IVideoItem[]);
  const getVideoListFunction = async () => {
    const res = await getVideoList({ page: 0, size: 2 });
    console.log(res, 'ppppphh');
    // 判断请求是否成功之后，进行赋值
    const list = res?.data?.result?.list;
    // const list = res?.data?.result?.list.filter(
    //   (item: IVideoItem, index: number) => {
    //     return index === 0;
    //   }
    // );
    setVideoList(list);
  };
  useEffect(() => {
    getVideoListFunction();
  }, []);
  return (
    <div className='App'>
      <Button>AboutPage</Button>
      {videoList.length > 0 &&
        videoList.map((videoItem: IVideoItem, videoInde: number) => {
          return (
            <div key={videoInde}>
              <ReactPlayer controls url={videoItem.playUrl} playing />
            </div>
          );
        })}
    </div>
  );
}

export default AboutPage;
