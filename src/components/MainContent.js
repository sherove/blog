import React from 'react';
import './MainContent.css';
import weddingPhoto from '../assets/수에비뉴5.jpg'; // Replace with the path to your image

const MainContent = () => (
    <main>
    <div className="photo-container">
      <img src={weddingPhoto} alt="Wedding" />
      <p>2024. 12. 12. SAT PM 1:00</p>
      <p>용산웨딩홀</p>
    </div>
    <div className="invitation-text-wrapper">
      <div className="invitation-text">
        <p>저희 두 사람,</p>
        <p>신선한 바람에 사랑이 들어오는 계절의 숲 가로에</p>
        <p>소중한 분들을 모시고</p>
        <p>사랑의 결실을 이루려 합니다.</p>
        <p>따뜻한 마음으로 축복해 주시면</p>
        <p>더 없는 큰 기쁨으로 간직하겠습니다.</p>
        <br />
      </div>
    </div>
  </main>
);

export default MainContent;
