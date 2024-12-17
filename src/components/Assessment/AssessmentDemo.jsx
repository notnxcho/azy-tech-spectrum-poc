import { useMemo, useState } from "react"
import AssessmentTopbar from "./AssessmentTopbar"
import AssessmentSidebar from "./Sidebar/AssessmentSidebar"
import SectionCard from "./SectionCard"
import QuestionCardContainer from "./QuestionCardContainer"
import { useQuestionBank } from './QuestionBankContext';


const AssessmentDemo = () => {
  const { questionBank, setQuestionBank } = useQuestionBank();

  const changeChapter = (id) => {
    setCurrentChapter(id)
    setCurrentQuestion(0)
    setCurrentSection(1)
  }
  const changeSection = (id) => {
    setCurrentSection(id)
    setCurrentQuestion(0)
  }

  const completionStatus = useMemo(() => {
    return questionBank.map(chapter => {
      const chapterStatus = {
        id: chapter.id,
        isComplete: chapter.sections.every(s => s.questions.every(q => q.answer !== undefined)),
        sections: chapter.sections.map(section => {
          return {
            id: section.id,
            isComplete: section.questions.every(q => q.answer !== undefined),
            questions: section.questions.map(question => {
              return {
                id: question.id,
                isComplete: question.answer !== undefined
              }
            })
          }
        })
      }
      return chapterStatus
    })
  }, [questionBank])

  const [currentChapter, setCurrentChapter] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [focusedLayer, setFocusedLayer] = useState('chapter')
  const [relativePosition, setRelativePosition] = useState({x: 0, y: 0})

  const updateQuestionAnswer = (questionIndex, answer) => {
    const updatedQuestionBank = [...questionBank]
    if (answer) {
      updatedQuestionBank[currentChapter].sections[currentSection].questions[questionIndex].answer = answer
    }
    setQuestionBank(updatedQuestionBank)
  }

  return (
    <div className="assessment-container">
      <AssessmentSidebar 
        currentChapter={currentChapter} 
        changeChapter={changeChapter} 
        questionBank={questionBank}
        completionStatus={completionStatus}
        focusedLayer={focusedLayer}
      />
      <div className="assessment-main-wrap">
        <div className="assessment-main">
          <AssessmentTopbar 
            questionBank={questionBank} 
            setQuestionBank={setQuestionBank} 
            currentChapter={currentChapter} 
            currentSection={currentSection} 
            focusedLayer={focusedLayer}
            setFocusedLayer={setFocusedLayer}
            completionStatus={completionStatus}
            currentQuestion={currentQuestion}
          />
          <div className={`sections-grid ${focusedLayer!== 'chapter' ? 'question-grid' : ''}`}>
            {questionBank[currentChapter].sections.map((section, index) => {
              return (
                <SectionCard
                  section={section} 
                  index={index} 
                  completionStatus={completionStatus[currentChapter].sections[index].questions}
                  setFocusedLayer={setFocusedLayer}
                  changeSection={changeSection}
                  setRelativePosition={setRelativePosition}
                  key={index}
                /> 
              )
            })}
            {
              <QuestionCardContainer 
                questions={questionBank[currentChapter].sections[currentSection].questions} 
                currentQuestion={currentQuestion} 
                setCurrentQuestion={setCurrentQuestion}
                focusedLayer={focusedLayer}
                relativePosition={relativePosition}
                updateQuestionAnswer={updateQuestionAnswer}
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssessmentDemo
