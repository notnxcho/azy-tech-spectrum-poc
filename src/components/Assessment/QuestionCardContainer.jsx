const QuestionCardContainer = ({questions, currentQuestions, setCurrentQuestions, focusedLayer, relativePosition}) => {
    return (
        <div className={`question-card-container ${focusedLayer !== 'chapter' ? 'display-card' : 'hide-card'}`} style={{transformOrigin: `${relativePosition.x}px ${relativePosition.y}px`}}>
            holis
        </div>
    )
} 

export default QuestionCardContainer