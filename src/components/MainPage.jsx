import React from 'react';
import { Link } from 'react-router-dom';

const TestOption = ({ title, description, link, imageUrl }) => (
  <Link to={link} className="test-option">
    <img src={imageUrl} alt={title} className="test-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </Link>
);

const MainPage = () => {
  const tests = [
    {
      title: "레트로 게임 유형테스트",
      description: "당신과 닮은 레트로 게임 캐릭터는?",
      link: "/retro-test",
      imageUrl: "/images/concept/retro.png"
    },
    // 더미 데이터 추가 (나중에 실제 테스트로 교체)
    {
      title: "음악 유형테스트",
      description: "당신과 어울리는 음악 장르는?",
      link: "/music-test",
      imageUrl: "/images/concept/music.png"
    },
    {
      title: "음식 유형테스트",
      description: "당신과 어울리는 음식은?",
      link: "/food-test",
      imageUrl: "/images/concept/food.png"
    },
    // 필요하다면 더 많은 테스트 옵션 추가
  ];

  return (
    <div className="main-page">
      <div className="header">
        <h1>유형 테스트 모음집</h1>
        {/* 여기에 추가적인 이미지나 설명을 넣을 수 있습니다 */}
      </div>
      <div className="test-options">
        {tests.map((test, index) => (
          <TestOption key={index} {...test} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;