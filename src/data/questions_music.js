
export const questions = [
  {
    "id": 1,
    "text": "새로운 음악을 발견했을 때, 당신은...",
    "optionA": "혼자 조용히 감상한다",
    "optionB": "친구들과 함께 들으며 이야기를 나눈다",
    "image": "/images/questions/q1.png",
    "type": "IE"
  },
  {
    "id": 2,
    "text": "좋아하는 음악을 들을 때, 당신은...",
    "optionA": "가사의 의미와 메시지에 집중한다",
    "optionB": "전체적인 멜로디와 분위기를 느낀다",
    "image": "/images/questions/q2.png",
    "type": "SN"
  },
  {
    "id": 3,
    "text": "새 앨범을 평가할 때, 당신은...",
    "optionA": "음악적 구조와 기술적 완성도를 분석한다",
    "optionB": "앨범이 주는 감동과 정서적 영향을 중요하게 여긴다",
    "image": "/images/questions/q3.png",
    "type": "TF"
  },
  {
    "id": 4,
    "text": "콘서트나 페스티벌에 갈 때, 당신은...",
    "optionA": "미리 세부 일정과 셋리스트를 확인한다",
    "optionB": "즉흥적으로 움직이며 분위기를 즐긴다",
    "image": "/images/questions/q4.png",
    "type": "JP"
  },
  {
    "id": 5,
    "text": "음악을 들을 때 선호하는 환경은?",
    "optionA": "조용한 개인 공간에서 헤드폰으로 듣기",
    "optionB": "친구들과 함께 스피커로 크게 틀어놓고 듣기",
    "image": "/images/questions/q5.png",
    "type": "IE"
  },
  {
    "id": 6,
    "text": "새로운 장르의 음악을 접할 때, 당신은...",
    "optionA": "그 장르의 역사와 특징을 먼저 공부한다",
    "optionB": "직접 들어보고 느낌으로 이해한다",
    "image": "/images/questions/q6.png",
    "type": "SN"
  },
  {
    "id": 7,
    "text": "음악 비평을 할 때, 당신은...",
    "optionA": "객관적인 기준과 논리적 분석을 중시한다",
    "optionB": "개인적인 감상과 정서적 반응을 중요하게 여긴다",
    "image": "/images/questions/q7.png",
    "type": "TF"
  },
  {
    "id": 8,
    "text": "플레이리스트를 만들 때, 당신은...",
    "optionA": "체계적으로 장르나 테마별로 정리한다",
    "optionB": "그때그때의 기분에 따라 자유롭게 구성한다",
    "image": "/images/questions/q8.png",
    "type": "JP"
  },
  {
    "id": 9,
    "text": "좋아하는 아티스트의 새 앨범이 나왔을 때, 당신은...",
    "optionA": "혼자 차분히 앨범 전체를 감상한다",
    "optionB": "SNS에 즉시 공유하고 다른 팬들과 소통한다",
    "image": "/images/questions/q9.png",
    "type": "IE"
  },
  {
    "id": 10,
    "text": "음악을 들을 때 가장 중요하게 생각하는 것은?",
    "optionA": "정확한 음정과 리듬, 기술적 완성도",
    "optionB": "음악이 전달하는 감정과 스토리",
    "image": "/images/questions/q10.png",
    "type": "SN"
  },
  {
    "id": 11,
    "text": "음악 관련 결정을 할 때(예: 콘서트 티켓 구매), 당신은...",
    "optionA": "비용 대비 가치를 따져 합리적으로 판단한다",
    "optionB": "좋아하는 아티스트라면 망설임 없이 결정한다",
    "image": "/images/questions/q11.png",
    "type": "TF"
  },
  {
    "id": 12,
    "text": "음악 감상 스타일을 묻는다면, 당신은...",
    "optionA": "계획적으로 정해진 시간에 집중해서 듣는다",
    "optionB": "상황과 기분에 따라 자유롭게 듣는다",
    "image": "/images/questions/q12.png",
    "type": "JP"
  }
];
export const results = {
  "ISTJ": {
    genre: "클래식",
    description: "체계적이고 신중한 당신! 복잡한 구조와 정교한 작곡의 클래식 음악을 즐기시는군요.",
    image: "/images/genres/classic.png",
    personality: "전통을 중시하며 체계적인 당신은 클래식 음악의 정교함과 완성도를 높이 평가합니다. 바흐나 베토벤의 작품을 분석하며 즐기는 타입이군요."
  },
  "ISFJ": {
    genre: "어쿠스틱 포크",
    description: "따뜻하고 섬세한 당신! 잔잔한 어쿠스틱 선율과 진솔한 가사의 포크 음악이 어울려요.",
    image: "/images/genres/acoustic_folk.png",
    personality: "세심하고 배려심 많은 당신은 솔직한 감정을 담은 포크 음악에 공감합니다. 제임스 테일러나 조니 미첼의 노래를 즐기실 거예요."
  },
  "INFJ": {
    genre: "인디 록",
    description: "이상적이고 창의적인 당신! 독특한 세계관을 가진 인디 록 밴드들의 음악을 좋아하시겠어요.",
    image: "/images/genres/indie_rock.png",
    personality: "깊이 있는 사고와 독특한 관점을 가진 당신은 레이디오헤드나 아케이드 파이어 같은 밴드의 실험적인 음악을 즐깁니다."
  },
  "INTJ": {
    genre: "프로그레시브 록",
    description: "논리적이고 창의적인 당신! 복잡한 구조와 기교가 돋보이는 프로그레시브 록이 딱이에요.",
    image: "/images/genres/progressive_rock.png",
    personality: "분석적이고 전략적인 당신은 핑크 플로이드나 킹 크림슨 같은 밴드의 복잡한 음악 구조를 파악하는 것을 즐깁니다."
  },
  "ISTP": {
    genre: "메탈",
    description: "대담하고 실용적인 당신! 강렬한 기타 리프와 테크니컬한 연주의 메탈 음악이 어울려요.",
    image: "/images/genres/metal.png",
    personality: "뛰어난 적응력과 문제 해결 능력을 가진 당신은 메탈리카나 드림 시어터의 테크니컬한 연주를 감상하며 에너지를 얻습니다."
  },
  "ISFP": {
    genre: "R&B/소울",
    description: "감성적이고 융통성 있는 당신! 부드러운 멜로디와 감성적인 보컬의 R&B/소울 음악이 딱이에요.",
    image: "/images/genres/rnb_soul.png",
    personality: "현재를 즐기고 감성이 풍부한 당신은 알리샤 키스나 존 레전드의 감미로운 목소리에 매료됩니다."
  },
  "INFP": {
    genre: "얼터너티브/드림팝",
    description: "이상주의적이고 창의적인 당신! 몽환적인 사운드의 얼터너티브/드림팝 음악을 즐기시겠어요.",
    image: "/images/genres/alternative_dreampop.png",
    personality: "내면의 가치를 중시하는 당신은 비치 하우스나 코코로지 같은 밴드의 몽환적이고 감성적인 음악에 빠져듭니다."
  },
  "INTP": {
    genre: "일렉트로니카",
    description: "논리적이고 창의적인 당신! 실험적인 사운드와 복잡한 리듬의 일렉트로니카 음악이 어울려요.",
    image: "/images/genres/electronica.png",
    personality: "지적 호기심이 강한 당신은 아프렉스 트윈이나 보드카 오렌지 같은 아티스트의 실험적인 전자음악을 분석하며 즐깁니다."
  },
  "ESTP": {
    genre: "힙합",
    description: "활동적이고 현실적인 당신! 강렬한 비트와 자신감 넘치는 랩의 힙합 음악이 딱이에요.",
    image: "/images/genres/hiphop.png",
    personality: "순발력이 뛰어나고 모험을 즐기는 당신은 켄드릭 라마나 제이지의 강렬한 랩과 비트에 열광합니다."
  },
  "ESFP": {
    genre: "팝",
    description: "사교적이고 즉흥적인 당신! 캐치한 멜로디와 신나는 리듬의 팝 음악이 어울려요.",
    image: "/images/genres/pop.png",
    personality: "활발하고 낙천적인 당신은 아리아나 그란데나 브루노 마스의 밝고 경쾌한 팝 음악과 함께 춤추기를 즐깁니다."
  },
  "ENFP": {
    genre: "월드뮤직",
    description: "열정적이고 창의적인 당신! 다양한 문화의 음악을 융합한 월드뮤직이 딱이에요.",
    image: "/images/genres/world_music.png",
    personality: "새로운 가능성을 탐구하는 당신은 뷔엉가 같은 아티스트의 다채로운 문화적 요소가 섞인 음악에 매료됩니다."
  },
  "ENTP": {
    genre: "재즈",
    description: "독창적이고 논쟁을 즐기는 당신! 즉흥성과 창의성이 돋보이는 재즈 음악이 어울려요.",
    image: "/images/genres/jazz.png",
    personality: "새로운 아이디어를 탐구하는 당신은 마일스 데이비스나 존 콜트레인의 혁신적인 재즈 즉흥 연주를 감상하며 영감을 얻습니다."
  },
  "ESTJ": {
    genre: "컨트리",
    description: "체계적이고 실용적인 당신! 전통적인 가치와 스토리텔링이 돋보이는 컨트리 음악이 딱이에요.",
    image: "/images/genres/country.png",
    personality: "책임감 있고 전통을 중시하는 당신은 조니 캐시나 돌리 파튼의 진솔한 이야기가 담긴 컨트리 음악에 공감합니다."
  },
  "ESFJ": {
    genre: "디스코/펑크",
    description: "사교적이고 협력적인 당신! 신나는 리듬과 그루브가 있는 디스코/펑크 음악이 어울려요.",
    image: "/images/genres/disco_funk.png",
    personality: "타인을 배려하고 조화를 추구하는 당신은 어스, 윈드 & 파이어나 ABBA의 흥겨운 음악과 함께 다른 사람들과 어울리기를 좋아합니다."
  },
  "ENFJ": {
    genre: "뮤지컬 OST",
    description: "카리스마 있고 영감을 주는 당신! 드라마틱한 스토리와 감동적인 넘버의 뮤지컬 OST가 딱이에요.",
    image: "/images/genres/musical_ost.png",
    personality: "타인에게 영감을 주는 당신은 '레 미제라블'이나 '위키드' 같은 뮤지컬의 OST를 들으며 감동과 카타르시스를 느낍니다."
  },
  "ENTJ": {
    genre: "오페라",
    description: "대담하고 지도력 있는 당신! 웅장하고 드라마틱한 오페라 음악이 어울려요.",
    image: "/images/genres/opera.png",
    personality: "야망이 크고 목표 지향적인 당신은 바그너의 '니벨룽의 반지' 같은 대작 오페라를 감상하며 거대한 스케일과 복잡한 구조를 즐깁니다."
  }
};


export const mbtiCompatibility = {
  "ISTJ": {
    bestMatch: ["ENFP", "ESTJ"],
    worstMatch: ["ENFJ", "INFJ"],
    description: "실용적이고 사실적인 ISTJ는 비슷한 현실 감각을 가진 ESTP, ESFP와 잘 맞습니다. 반면 이상주의적이고 변화를 좋아하는 ENFP, ENTP와는 갈등할 수 있습니다."
  },
  "ISFJ": {
    bestMatch: ["ENTP", "INFP"],
    worstMatch: ["INTJ", "ENTJ"],
    description: "따뜻하고 세심한 ISFJ는 활발하고 현실적인 ESFP, ESTP와 조화를 이룹니다. 논리적이고 직설적인 ENTP, ENTJ와는 소통에 어려움을 겪을 수 있습니다."
  },
  "INFJ": {
    bestMatch: ["ENFP", "INTJ"],
    worstMatch: ["ESTJ", "ISTJ"],
    description: "이상주의적이고 통찰력 있는 INFJ는 창의적인 ENTP, ENFP와 깊은 대화를 나눌 수 있습니다. 현실적이고 즉흥적인 ESTP, ESFP와는 가치관 차이로 어려움을 겪을 수 있습니다."
  },
  "INTJ": {
    bestMatch: ["ENTP", "ISTP"],
    worstMatch: ["ESFJ", "ISFJ"],
    description: "전략적이고 독립적인 INTJ는 논리적이고 창의적인 ENTP, ENTJ와 잘 맞습니다. 감정적이고 전통을 중시하는 ESFJ, ISFJ와는 의사소통 방식의 차이로 갈등할 수 있습니다."
  },
  "ISTP": {
    bestMatch: ["ESTJ", "ENFJ"],
    worstMatch: ["INFP", "ENFP"],
    description: "논리적이고 실용적인 ISTP는 체계적인 ESTJ, ENTJ와 효율적으로 협력할 수 있습니다. 이상주의적이고 감정적인 INFJ, ENFJ와는 가치관 차이로 충돌할 수 있습니다."
  },
  "ISFP": {
    bestMatch: ["ENTJ", "ESFJ"],
    worstMatch: ["ENTP", "INTP"],
    description: "예술적이고 유연한 ISFP는 따뜻하고 외향적인 ENFJ, ESFJ와 잘 어울립니다. 논리적이고 체계적인 INTJ, ENTJ와는 소통 방식의 차이로 어려움을 겪을 수 있습니다."
  },
  "INFP": {
    bestMatch: ["ENFJ", "ENFP"],
    worstMatch: ["ISTP", "ESTP"],
    description: "이상주의적이고 창의적인 INFP는 영감을 주는 ENFJ, ENTJ와 깊은 관계를 맺을 수 있습니다. 현실적이고 체계적인 ESTJ, ESFJ와는 가치관 차이로 갈등할 수 있습니다."
  },
  "INTP": {
    bestMatch: ["ENTP", "ISTJ"],
    worstMatch: ["ESFP", "ISFP"],
    description: "분석적이고 창의적인 INTP는 목표 지향적인 ENTJ, ESTJ와 지적인 대화를 즐길 수 있습니다. 감정적이고 실용적인 ESFJ, ISFJ와는 의사소통 방식의 차이로 어려움을 겪을 수 있습니다."
  },
  "ESTP": {
    bestMatch: ["ISTJ", "ISFJ"],
    worstMatch: ["INFJ", "INTJ"],
    description: "활동적이고 현실적인 ESTP는 책임감 있는 ISTJ, ISFJ와 잘 맞습니다. 내향적이고 이상주의적인 INFJ, INTJ와는 가치관과 생활 방식의 차이로 갈등할 수 있습니다."
  },
  "ESFP": {
    bestMatch: ["ENTJ", "INFJ"],
    worstMatch: ["INFP", "ENFP"],
    description: "즉흥적이고 사교적인 ESFP는 안정적인 ISFJ, ISTJ와 조화를 이룹니다. 내향적이고 체계적인 INTJ, INFJ와는 생활 방식과 가치관의 차이로 충돌할 수 있습니다."
  },
  "ENFP": {
    bestMatch: ["INFP", "INFJ"],
    worstMatch: ["ESTP", "ISTP"],
    description: "열정적이고 창의적인 ENFP는 통찰력 있는 INTJ, INFJ와 깊은 관계를 맺을 수 있습니다. 현실적이고 전통적인 ISTJ, ISFJ와는 가치관과 생활 방식의 차이로 어려움을 겪을 수 있습니다."
  },
  "ENTP": {
    bestMatch: ["INTJ", "ISFJ"],
    worstMatch: ["ESFP", "ISFP"],
    description: "창의적이고 논쟁을 즐기는 ENTP는 전략적인 INTJ, INFJ와 지적인 대화를 즐길 수 있습니다. 안정을 추구하는 ISFJ, ISTJ와는 가치관과 의사소통 방식의 차이로 갈등할 수 있습니다."
  },
  "ESTJ": {
    bestMatch: ["ISTJ", "ISTP"],
    worstMatch: ["ENFJ", "INFJ"],
    description: "체계적이고 실용적인 ESTJ는 논리적인 ISTP, INTP와 효율적으로 협력할 수 있습니다. 이상주의적이고 감정적인 INFP, ENFP와는 가치관과 의사결정 방식의 차이로 충돌할 수 있습니다."
  },
  "ESFJ": {
    bestMatch: ["ISFP", "ISFJ"],
    worstMatch: ["ENTJ", "INTJ"],
    description: "사교적이고 협조적인 ESFJ는 온화한 ISFP, ISTP와 조화를 이룹니다. 논리적이고 독립적인 INTP, INTJ와는 감정 표현과 의사소통 방식의 차이로 어려움을 겪을 수 있습니다."
  },
  "ENFJ": {
    bestMatch: ["INFP", "ISTP"],
    worstMatch: ["ESTJ", "ISTJ"],
    description: "카리스마 있고 이상주의적인 ENFJ는 감성적인 INFP, ISFP와 깊은 유대관계를 맺을 수 있습니다. 논리적이고 독립적인 ISTP, INTP와는 가치관과 의사소통 방식의 차이로 갈등할 수 있습니다."
  },
  "ENTJ": {
    bestMatch: ["INTJ", "ESTP"],
    worstMatch: ["ESFJ", "ISFJ"],
    description: "전략적이고 리더십 있는 ENTJ는 분석적인 INTP, INTJ와 잘 맞습니다. 즉흥적이고 감성적인 ISFP, ESFP와는 계획성과 의사결정 방식의 차이로 충돌할 수 있습니다."
  }
};