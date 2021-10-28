import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className='widgets__article'>
        <div className='widgets__articleLeft'>
          <FiberManualRecordIcon />
        </div>
        <div className='widgets__articleRight'>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('Papa React is Back', 'Top news - 10000 readers!')}
      {newsArticle('Coravirus: PT Updates', 'Top news - 978r readers!')}
      {newsArticle('Tesla hits new hights', 'Cars & Auto - 300 readers!')}
      {newsArticle('Bitcoin breaks $100K', 'Crypto - 80000 readers!')}
      {newsArticle('Is Redux too good?', 'Code - 318 readers!')}
      {newsArticle('Vampires are back!', 'Myths & Gosip - 83267 readers!')}
    </div>
  );
}

export default Widgets;
