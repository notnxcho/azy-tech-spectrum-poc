import { useState } from 'react'
import "./AssessmentTopbar.scss"
import SectionalProgressbar from './SectionalProgressbar'

const AssessmentTopbar = ({questionBank, setQuestionBank, currentChapter, currentSection, focusedLayer, setFocusedLayer, completionStatus}) => {
    const calculateString = () => {
        const primary = "#3D2EFF"
        let res = `${primary} 0deg`
        if (focusedLayer === 'chapter') {
            completionStatus.forEach((step, index) => {
                res+=(`, ${index < currentChapter ? primary : (primary+'00')} ${(index+1) * (360/completionStatus.length) - 20}deg, ${primary}${index < (currentChapter - 1) ? '' : '00'} ${(index+1) * (360/completionStatus.length) + 10}deg`)
            })
        }
        return(res)
    }
  return (
    <div className="assessment-topbar">
      <div className="chapter-info">
        <div 
            className="chapter-number"
            style={{backgroundImage: `conic-gradient(${calculateString()})`}}
        >
          <div className="radial-progress">
            <span className="chapter">{currentChapter}</span>
          </div>
        </div>
        <div className="chapter-details">
          <span className="label">Current {focusedLayer}</span>
          <div className='title'>{focusedLayer === 'chapter' ? questionBank[currentChapter - 1]?.title : questionBank[currentChapter - 1]?.sections[currentSection - 1].title }</div>
          <p>Agnostic to uses and domains, general information about the technology.</p>
        </div>
      </div>
      <SectionalProgressbar steps={focusedLayer === 'chapter' ? completionStatus[currentChapter - 1]?.sections : completionStatus[currentChapter - 1]?.sections[currentSection - 1]?.questions}/>
      {focusedLayer==='section' && <div className='top-level-nav' onClick={()=>setFocusedLayer('chapter')}>See top-level breakdown</div>}
    </div>
  )
}

export default AssessmentTopbar