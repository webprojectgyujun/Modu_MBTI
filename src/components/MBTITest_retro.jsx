import React, { useState } from 'react';
import { questions, results } from '../data/questions_retro';
import MainPage from './MainPage';
import { useNavigate } from 'react-router-dom';

const MBTITest = () => {
    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);

    const handleAnswer = (choice) => {
        const newAnswers = { ...answers, [questions[currentQuestion].type]: choice };
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            const mbtiResult = calculateMBTI(newAnswers);
            setResult(results[mbtiResult]);
        }
    };


    const handleNavigateToMain = () => {
        navigate('/');
    };

    const calculateMBTI = (answers) => {
        const types = ['IE', 'SN', 'TF', 'JP'];
        let mbtiResult = '';

        types.forEach(type => {
            const [option1, option2] = type.split('');
            mbtiResult += (answers[type] === 'A') ? option1 : option2;
        });

        return mbtiResult;
    };

    return (
        <div className="mbti-test">
            <h1>레트로 게임 MBTI 테스트</h1>
            {!result ? (
                <>
                    <div className="question-image">
                        <img src={questions[currentQuestion].image} alt="Question illustration" />
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                    <h2>{questions[currentQuestion].text}</h2>
                    <button onClick={() => handleAnswer('A')}>
                        {questions[currentQuestion].optionA}
                    </button>
                    <button onClick={() => handleAnswer('B')}>
                        {questions[currentQuestion].optionB}
                    </button>
                    <h3>
                        <button onClick={handleNavigateToMain}>메인 페이지로 이동</button>
                    </h3>
                </>
            ) : (
                <div className="result">
                    <h2>당신의 레트로 게임 캐릭터는...</h2>
                    <div className="character-image">
                        <img src={result.image} alt={result.character} />
                    </div>
                    <h3>{result.character}</h3>
                    <p>{result.description}</p>
                    <h4>당신의 성격 특성:</h4>
                    <p>{result.personality}</p>
                    <button onClick={() => { setCurrentQuestion(0); setAnswers({}); setResult(null); }}>
                        다시 테스트하기
                    </button>
                </div>
            )}
        </div>
    );
};

export default MBTITest;