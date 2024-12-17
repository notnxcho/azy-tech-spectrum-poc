const QuestionCardContainer = ({questions, currentQuestion, setCurrentQuestion, focusedLayer, relativePosition}) => {
    return (
        <div className={`question-card-container ${focusedLayer !== 'chapter' ? 'display-card' : 'hide-card'}`} style={{transformOrigin: `${relativePosition.x}px ${relativePosition.y}px`}}>
            <div className="question-wrap">
                <div className="label">Question {questions[currentQuestion].id}</div>
                <div className="enunciate">{questions[currentQuestion].text}</div>

                <div className="answer-box">
                    <input placeholder="Answer"/>
                </div>

                <div className="footer">
                    <div className="cta alt">Previous</div>
                    <div className="cta">Next question</div>
                </div>
            </div>
        </div>
    )
} 

export default QuestionCardContainer