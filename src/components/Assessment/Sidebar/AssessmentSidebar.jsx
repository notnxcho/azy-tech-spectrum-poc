import "./AssessmentSidebar.scss"
import ChapterBox from "./ChapterBox"

const AssessmentSidebar = ({currentChapter, changeChapter, questionBank, completionStatus, focusedLayer}) => {
    return <div className={`assessment-sidebar ${focusedLayer === 'chapter' ? '' : 'hide'}`}>
        {questionBank.map( (chap, index) => {
            return <ChapterBox key={chap.id} chapter={chap} currentChapter={currentChapter} changeChapter={changeChapter} completionStatus={completionStatus[index]}/>
        })}
    </div>
}

export default AssessmentSidebar