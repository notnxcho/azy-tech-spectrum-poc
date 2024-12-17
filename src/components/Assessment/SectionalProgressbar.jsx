import "./AssessmentTopbar.scss"

const SectionalProgressbar = ({ steps, currentQuestion, focusedLayer }) => {
    console.log(steps)
    return (
        <div className="section-progress">
            <div className="progress-steps">
                {steps.map((s, index) => {
                    return (
                        <div 
                            key={index} 
                            className={`step ${s.isComplete ? 'completed' : ''} ${(index === currentQuestion) && focusedLayer !== 'chapter' ? 'active' : ''}`}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default SectionalProgressbar