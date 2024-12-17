import { useQuestionBank } from "../QuestionBankContext";
import "./AssessmentSidebar.scss"
import ChapterBox from "./ChapterBox"

const AssessmentSidebar = ({ currentChapter, changeChapter, completionStatus, focusedLayer }) => {
    const { questionBank } = useQuestionBank();
    return <div className={`assessment-sidebar ${focusedLayer === 'chapter' ? '' : 'hide'}`}>
        <div className="header">
            <div className="label">New Rapid</div>
            <div className="title">Assessment chapters</div>
            <div className="sublabel">Select to access content</div>
        </div>
        {questionBank.map( (chap, index) => {
            return <ChapterBox key={index + chap.title} chapter={chap} currentChapter={currentChapter} changeChapter={changeChapter} completionStatus={completionStatus[index]}/>
        })}
    </div>
}

export default AssessmentSidebar