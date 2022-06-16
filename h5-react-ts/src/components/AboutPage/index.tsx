import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import { getSentencesList } from '../../api/sentences';
import { getVideoList } from '../../api/videoList';

function AboutPage() {
  const [deviceData, setdev] = useState();
  useEffect(() => {
    getSentencesList();
    getVideoList();
  }, []);
  return <div className='App'></div>;
}

export default AboutPage;
