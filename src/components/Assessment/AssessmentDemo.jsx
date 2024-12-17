import { useMemo, useState } from "react"
import AssessmentTopbar from "./AssessmentTopbar"
import AssessmentSidebar from "./Sidebar/AssessmentSidebar"
import SectionCard from "./SectionCard"
import QuestionCardContainer from "./QuestionCardContainer"
const questionBankInitial = [
  {
    id: 1,
    type: 'chapter',
    title: 'Tech Baseline',
    sections: [
      {
        id: 1,
        type: 'section',
        title: 'Tech fundamentals',
        questions: [
          {
            id: 1,
            text: 'What is your technology about?',
            answer: undefined
          },
          {
            id: 2,
            text: 'Has it been tested in operational fields?',
            answer: undefined
          },
          {
            id: 3,
            text: 'What is the science behind it?',
            answer: undefined
          }
        ]
      },
     {
        id: 2,
        type: 'section',
        title: 'Operational details',
        questions: [
          {
            id: 1,
            text: 'What is the range of operation?',
            answer: undefined
          },
          {
            id: 2,
            text: 'What is the operative cost?',
            answer: undefined
          },
          {
            id: 3,
            text: 'What training does someone require to operate?',
            answer: undefined
          }
        ]
      },
      {
        id: 3,
        type: 'section',
        title: 'Operational details',
        questions: [
          {
            id: 1,
            text: 'What is the range of operation?',
            answer: undefined
          },
          {
            id: 2,
            text: 'What is the operative cost?',
            answer: undefined
          },
          {
            id: 3,
            text: 'What training does someone require to operate?',
            answer: undefined
          }
        ]
      },
      {
        id: 4,
        type: 'section',
        title: 'Operational details',
        questions: [
          {
            id: 1,
            text: 'What is the range of operation?',
            answer: undefined
          },
          {
            id: 2,
            text: 'What is the operative cost?',
            answer: undefined
          },
          {
            id: 3,
            text: 'What training does someone require to operate?',
            answer: undefined
          }
        ]
      },
      {
        id: 5,
        type: 'section',
        title: 'Operational details',
        questions: [
          {
            id: 1,
            text: 'What is the range of operation?',
            answer: undefined
          },
          {
            id: 2,
            text: 'What is the operative cost?',
            answer: undefined
          },
          {
            id: 3,
            text: 'What training does someone require to operate?',
            answer: undefined
          }
        ]
      },
      {
        id: 6,
        type: 'section',
        title: 'Operational details',
        questions: [
          {
            id: 1,
            text: 'What is the range of operation?',
            answer: undefined
          },
          {
            id: 2,
            text: 'What is the operative cost?',
            answer: undefined
          },
          {
            id: 3,
            text: 'What training does someone require to operate?',
            answer: undefined
          }
        ]
      },
      {
        id: 7,
        type: 'section',
        title: 'Operational details',
        questions: [
          {
            id: 1,
            text: 'What is the range of operation?',
            answer: undefined
          },
          {
            id: 2,
            text: 'What is the operative cost?',
            answer: undefined
          },
          {
            id: 3,
            text: 'What training does someone require to operate?',
            answer: undefined
          }
        ]
      },
    ]
  },
  {
    id: 2,
    type: 'chapter',
    title: 'Ballistic missile intereception',
    sections: [
      {
        id: 1,
        type: 'section',
        title: 'Desert',
        questions: [
          {
            id: 1,
            text: 'What is the maximum temperature it can whitstand?',
            answer: undefined
          },
          {
            id: 2,
            text: 'What is the maximum temperature it can whitstand?',
            answer: undefined
          },
          {
            id: 3,
            text: 'Is is resistant to mineral erosion?',
            answer: undefined
          }
        ]
      },
      {
        id: 2,
        type: 'section',
        title: 'Ocean',
        questions: [
          {
            id: 1,
            text: 'How does it respond to strong winds?',
            answer: undefined
          },
          {
            id: 2,
            text: 'Is it waterproof?',
            answer: undefined
          },
          {
            id: 3,
            text: 'Can it operate in a humid environment?',
            answer: undefined
          }
        ]
      }
    ]
  }
]


const AssessmentDemo = () => {
  const [questionBank, setQuestionBank] = useState(questionBankInitial)

  const changeChapter = (id) => {
    setCurrentChapter(id)
    setCurrentQuestion(1)
    setCurrentSection(1)
  }
  const changeSection = (id) => {
    setCurrentSection(id)
    setCurrentQuestion(1)
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

  const [currentChapter, setCurrentChapter] = useState(1)
  const [currentSection, setCurrentSection] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [focusedLayer, setFocusedLayer] = useState('chapter')
  const [relativePosition, setRelativePosition] = useState({x: 0, y: 0})

  return (
    <div className="assessment-container">
      <AssessmentSidebar 
        currentChapter={currentChapter} 
        changeChapter={changeChapter} 
        questionBank={questionBank}
        completionStatus={completionStatus}
        focusedLayer={focusedLayer}
      />
      <div className="assessment-main">
        <AssessmentTopbar 
          questionBank={questionBank} 
          setQuestionBank={setQuestionBank} 
          currentChapter={currentChapter} 
          currentSection={currentSection} 
          focusedLayer={focusedLayer}
          setFocusedLayer={setFocusedLayer}
          completionStatus={completionStatus}
        />
        <div className={`sections-grid ${focusedLayer!== 'chapter' ? 'question-grid' : ''}`}>
          {questionBank[currentChapter-1].sections.map((section, index) => {
            return (
              <SectionCard
                section={section} 
                index={index} 
                completionStatus={completionStatus[currentChapter-1].sections[currentSection-1].questions}
                setFocusedLayer={setFocusedLayer}
                changeSection={changeSection}
                setRelativePosition={setRelativePosition}
              /> 
            )
          })}
          {
            <QuestionCardContainer 
              questions={questionBank[currentChapter-1].sections[currentSection-1].questions} 
              currentQuestion={currentQuestion} 
              setCurrentQuestion={setCurrentQuestion}
              focusedLayer={focusedLayer}
              relativePosition={relativePosition}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default AssessmentDemo
