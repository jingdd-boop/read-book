import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import { getTestList } from '../../api/testApi';

function AboutPage() {
  useEffect(() => {
    getTestList();
  }, []);
  return (
    <div className='App'>
      <Button>AboutPage</Button>
    </div>
  );
}

export default AboutPage;
