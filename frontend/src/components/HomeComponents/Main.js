import React, { useState, useEffect } from 'react';
// import bgImage from '../../assets/img/home_bg.jpg'
import bgVideo from '../../assets/video/piano.mp4';

const Main = ({ lan }) => {
  const initialBool = JSON.parse(localStorage.getItem('lang')) || false;
  let [viet, setViet] = useState(initialBool);

  useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(viet));
    lan(viet);
  }, [viet, lan]);

  const onToggle = () => {
    setViet(!viet);
  };

  return (
    <div className='main'>
      <video src={bgVideo} muted loop autoPlay></video>
      <div className='overlay'></div>

      <div
        className='home-content '
        // style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='intro container  text-light'>
          <h1 className='title text-light'>{viet ? 'CHÀO MỪNG' : 'WELCOME'}</h1>
          <h2 className='sub-title mb-4 text-light'>
            <span className='truongTitle'>Truong Nhac</span> - Doremi Music
            Lessons
          </h2>

          <p>
            {viet
              ? `Giảng dạy nhiều nhạc cụ của như Piano, Guitar, Trống, Violin,Viola, Cello và Bass.`
              : ` We offer music lessons for Piano, Guitar, Drums, Violin, Viola, Cello
          and Bass.`}
          </p>
          {viet ? (
            <button
              onClick={onToggle}
              className='btn btn-outline-dark  text-light rounded-1'
            >
              English
            </button>
          ) : (
            <button
              onClick={onToggle}
              className='btn btn-outline-dark text-light rounded-0 mr-2'
            >
              Tiếng Việt{' '}
            </button>
          )}
        </div>
        <div className='socialMain'>
          <a href='https://www.facebook.com/doremimusiclesson/?ref=page_internal'>
            <i className='fab fa-facebook-f fa-3x ' />
          </a>
          <a href='https://www.youtube.com/channel/UCqrVTX-uBHAf9WYyHpxs3JA'>
            <i className='fab fa-youtube fa-3x ' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
