import { createContext, useContext, useState } from 'react';

const QuestionBankContext = createContext();

const questionBankInitial = [
    {
      id: 0,
      type: 'chapter',
      title: 'Tech Baseline',
      sections: [
        {
          id: 0,
          type: 'section',
          title: 'Tech fundamentals',
          questions: [
            {
              id: 0,
              text: 'What is your technology about?',
              answer: undefined
            },
            {
              id: 1,
              text: 'Has it been tested in operational fields?',
              answer: undefined
            },
            {
              id: 2,
              text: 'What is the science behind it?',
              answer: undefined
            }
          ]
        },
       {
          id: 1,
          type: 'section',
          title: 'Operational details',
          questions: [
            {
              id: 0,
              text: 'What is the range of operation?',
              answer: undefined
            },
            {
              id: 1,
              text: 'What is the operative cost?',
              answer: undefined
            },
            {
              id: 2,
              text: 'What training does someone require to operate?',
              answer: undefined
            }
          ]
        },
        // {
        //   id: 2,
        //   type: 'section',
        //   title: 'Operational details',
        //   questions: [
        //     {
        //       id: 0,
        //       text: 'What is the range of operation?',
        //       answer: undefined
        //     },
        //     {
        //       id: 1,
        //       text: 'What is the operative cost?',
        //       answer: undefined
        //     },
        //     {
        //       id: 2,
        //       text: 'What training does someone require to operate?',
        //       answer: undefined
        //     }
        //   ]
        // },
        // {
        //   id: 4,
        //   type: 'section',
        //   title: 'Operational details',
        //   questions: [
        //     {
        //       id: 0,
        //       text: 'What is the range of operation?',
        //       answer: undefined
        //     },
        //     {
        //       id: 1,
        //       text: 'What is the operative cost?',
        //       answer: undefined
        //     },
        //     {
        //       id: 2,
        //       text: 'What training does someone require to operate?',
        //       answer: undefined
        //     }
        //   ]
        // },
        // {
        //   id: 5,
        //   type: 'section',
        //   title: 'Operational details',
        //   questions: [
        //     {
        //       id: 0,
        //       text: 'What is the range of operation?',
        //       answer: undefined
        //     },
        //     {
        //       id: 1,
        //       text: 'What is the operative cost?',
        //       answer: undefined
        //     },
        //     {
        //       id: 2,
        //       text: 'What training does someone require to operate?',
        //       answer: undefined
        //     }
        //   ]
        // },
        // {
        //   id: 6,
        //   type: 'section',
        //   title: 'Operational details',
        //   questions: [
        //     {
        //       id: 0,
        //       text: 'What is the range of operation?',
        //       answer: undefined
        //     },
        //     {
        //       id: 1,
        //       text: 'What is the operative cost?',
        //       answer: undefined
        //     },
        //     {
        //       id: 2,
        //       text: 'What training does someone require to operate?',
        //       answer: undefined
        //     }
        //   ]
        // },
        // {
        //   id: 7,
        //   type: 'section',
        //   title: 'Operational details',
        //   questions: [
        //     {
        //       id: 0,
        //       text: 'What is the range of operation?',
        //       answer: undefined
        //     },
        //     {
        //       id: 1,
        //       text: 'What is the operative cost?',
        //       answer: undefined
        //     },
        //     {
        //       id: 2,
        //       text: 'What training does someone require to operate?',
        //       answer: undefined
        //     }
        //   ]
        // },
      ]
    },
    {
      id: 1,
      type: 'chapter',
      title: 'Ballistic missile intereception',
      sections: [
        {
          id: 0,
          type: 'section',
          title: 'Desert',
          questions: [
            {
              id: 0,
              text: 'What is the maximum temperature it can whitstand?',
              answer: undefined
            },
            {
              id: 1,
              text: 'What is the maximum temperature it can whitstand?',
              answer: undefined
            },
            {
              id: 2,
              text: 'Is is resistant to mineral erosion?',
              answer: undefined
            }
          ]
        },
        {
          id: 1,
          type: 'section',
          title: 'Ocean',
          questions: [
            {
              id: 0,
              text: 'How does it respond to strong winds?',
              answer: undefined
            },
            {
              id: 1,
              text: 'Is it waterproof?',
              answer: undefined
            },
            {
              id: 2,
              text: 'Can it operate in a humid environment?',
              answer: undefined
            }
          ]
        }
      ]
    }
  ]

export const useQuestionBank = () => {
  return useContext(QuestionBankContext);
};

export const QuestionBankProvider = ({ children }) => {
  const [questionBank, setQuestionBank] = useState(questionBankInitial);

  return (
    <QuestionBankContext.Provider value={{ questionBank, setQuestionBank }}>
      {children}
    </QuestionBankContext.Provider>
  );
}; 