import React, { useEffect } from 'react';
import './MainContent.css';
import weddingPhoto from '../assets/수에비뉴5.jpg'; // Replace with the path to your image

const MainContent = () => {
  useEffect(() => {
    createFlowers();
  }, []);

  const createFlowers = () => {
    const numOfFlowers = 30;
    for (let i = 0; i < numOfFlowers; i++) {
      const flower = document.createElement('div');
      flower.className = 'flower';
      flower.style.left = Math.random() * 100 + 'vw';
      flower.style.animationDuration = Math.random() * 3 + 2 + 's';
      document.body.appendChild(flower);

      // setTimeout(() => {
      //   flower.remove();
      // }, 5000); // 꽃이 떨어지는 시간이 지나면 삭제
    }
  };

  return (
    <main>
      <div className="photo-container">
        <div className="image-wrapper">
          <img src={weddingPhoto} alt="Wedding" className="photo-original" />
        </div>
        <div className="details">
          <p>2024. 12. 12. SAT PM 1:00</p>
          <p>용산웨딩홀</p>
        </div>
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
};

export default MainContent;
