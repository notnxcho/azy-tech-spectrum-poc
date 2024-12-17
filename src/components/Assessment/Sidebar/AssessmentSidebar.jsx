import "./AssessmentSidebar.scss"
import ChapterBox from "./ChapterBox"

const AssessmentSidebar = ({currentChapter, changeChapter, questionBank, completionStatus, focusedLayer}) => {
    return <div className={`assessment-sidebar ${focusedLayer === 'chapter' ? '' : 'hide'}`}>
        <div className="header">
            <div className="label">New Rapid</div>
            <div className="title">Assessment chapters</div>
            <div className="sublabel">Select to access content</div>
        </div>
        {questionBank.map( (chap, index) => {
            return <ChapterBox key={chap.id} chapter={chap} currentChapter={currentChapter} changeChapter={changeChapter} completionStatus={completionStatus[index]}/>
        })}
    </div>
}

export default AssessmentSidebar