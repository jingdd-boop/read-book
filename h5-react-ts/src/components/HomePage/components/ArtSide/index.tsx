import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './index.css';

interface IArtSideProps {
  artSideList: ISideListItem[];
}

interface ISideListItem {
  picture: string;
}

const ArtSide: React.FC<IArtSideProps> = (props) => {
  const { artSideList } = props;
  return (
    <div className='sideWrap'>
      <div className='sideCard'>
        <div className='sideCardHeader'>
          <div className='sideCardHeaderTitle'>晚上好</div>
          <Button>去签到</Button>
        </div>
        <div className='sideCardTag'>点亮你在社区的每一天</div>
      </div>
      {artSideList?.length > 0 &&
        artSideList?.map((sideItem: ISideListItem, sideIndex: number) => {
          return (
            <div className='sidePic' key={sideIndex}>
              <img src={sideItem?.picture} alt='' />
            </div>
          );
        })}
    </div>
  );
};
export default ArtSide;
