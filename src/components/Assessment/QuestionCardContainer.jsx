import { useEffect, useState } from 'react'

const QuestionCardContainer = ({questions, currentQuestion, setCurrentQuestion, focusedLayer, relativePosition, updateQuestionAnswer}) => {
    
    const [answer, setAnswer] = useState(questions[currentQuestion].answer || '')
    useEffect(() => {
        setAnswer(questions[currentQuestion].answer || '')
    }, [focusedLayer, currentQuestion, questions])

    const handleNextQuestion = () => {
        updateQuestionAnswer(currentQuestion, answer)
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setAnswer(questions[currentQuestion + 1].answer || '')
        }
    }

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
            setAnswer(questions[currentQuestion - 1].answer || '')
        }
    }

    return (
        <div className={`question-card-container ${focusedLayer !== 'chapter' ? 'display-card' : 'hide-card'}`} style={{transformOrigin: `${relativePosition.x}px ${relativePosition.y}px`}}>
            <div className="question-wrap">
                <div className="label">Question {questions[currentQuestion].id + 1}</div>
                <div className="enunciate">{questions[currentQuestion].text}</div>

                <div className="answer-box">
                    <input 
                        placeholder="Answer" 
                        value={answer} 
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </div>

                <div className="footer">
                    <div className="cta alt" onClick={handlePreviousQuestion}>Previous</div>
                    <div className="cta" onClick={handleNextQuestion}>Next question</div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCardContainer