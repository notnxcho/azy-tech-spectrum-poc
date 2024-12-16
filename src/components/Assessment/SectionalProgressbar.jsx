import "./AssessmentTopbar.scss"

const SectionalProgressbar = ({steps}) => {
    return (
        <div className="section-progress">
            <div className="progress-steps">
                {steps.map((s, index) => {
                    return (
                        <div key={index} className={`step ${s.isComplete}`}/>
                    )
                })}
            </div>
        </div>
    )
}

export default SectionalProgressbar