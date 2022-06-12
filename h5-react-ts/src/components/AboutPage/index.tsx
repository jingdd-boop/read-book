import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import { getSentencesList } from '../../api/sentences';
import { getVideoList } from '../../api/videoList';

function AboutPage() {
  useEffect(() => {
    getSentencesList();
    getVideoList();
  }, []);
  return (
    <div className='App'>
      <Button>AboutPage</Button>
    </div>
  );
}

export default AboutPage;
