let questions = [
  {
    id: 'q1',
    title: 'question 1',
    question: 'Your mind is always buzzing with unexplored ideas and plans',
    options: [
      { id: 0, text: 'Please select an answer' },
      { id: 1, text: '1 (Strongly Disagree)' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
      { id: 5, text: '5 (Strongly Agree)' }
    ]
  },
  {
    id: 'q2',
    title: 'question 2',
    question:
      'Generally speaking, you rely more on your experience than your imagination',
    options: [
      { id: 0, text: 'Please select an answer' },
      { id: 1, text: '1 (Strongly Disagree)' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
      { id: 5, text: '5 (Strongly Agree)' }
    ]
  },
  {
    id: 'q3',
    title: 'question 3',
    question:
      'You find it easy to stay relaxed and focused even when there is some pressure',
    options: [
      { id: 0, text: 'Please select an answer' },
      { id: 1, text: '1 (Strongly Disagree)' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
      { id: 5, text: '5 (Strongly Agree)' }
    ]
  },
  {
    id: 'q4',
    title: 'question 4',
    question: 'You rarely do something just out of sheer curiosity',
    options: [
      { id: 0, text: 'Please select an answer' },
      { id: 1, text: '1 (Strongly Disagree)' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
      { id: 5, text: '5 (Strongly Agree)' }
    ]
  },
  {
    id: 'q5',
    title: 'question 5',
    question: 'People can rarely upset you',
    options: [
      { id: 0, text: 'Please select an answer' },
      { id: 1, text: '1 (Strongly Disagree)' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
      { id: 5, text: '5 (Strongly Agree)' }
    ]
  },
  {
    id: 'q6',
    title: 'question 6',
    question:
      'It is often difficult for you to relate to other people’s feelings',
    options: [
      { id: 0, text: 'Please select an answer' },
      { id: 1, text: '1 (Strongly Disagree)' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
      { id: 5, text: '5 (Strongly Agree)' }
    ]
  },
  {
    id: 'q7',
    title: 'question 7',
    question:
      'In a discussion, truth should be more important than people’s sensitivities',
    options: [
      { id: 0, text: 'Please select an answer' },
      { id: 1, text: '1 (Strongly Disagree)' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
      { id: 5, text: '5 (Strongly Agree)' }
    ]
  },
  {
    id: 'q8',
    title: 'question 8',
    question: 'You rarely get carried away by fantasies and ideas',
    options: [
      { id: 0, text: 'Please select an answer' },
      { id: 1, text: '1 (Strongly Disagree)' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
      { id: 5, text: '5 (Strongly Agree)' }
    ]
  },
  {
    id: 'q9',
    title: 'question 9',
    question:
      'You think that everyone’s views should be respected regardless of whether they are supported by facts or not',
    options: [
      { id: 0, text: 'Please select an answer' },
      { id: 1, text: '1 (Strongly Disagree)' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
      { id: 5, text: '5 (Strongly Agree)' }
    ]
  },
  {
    id: 'q10',
    title: 'question 10',
    question:
      'You feel more energetic after spending time with a group of people',
    options: [
      { id: 0, text: 'Please select an answer' },
      { id: 1, text: '1 (Strongly Disagree)' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
      { id: 5, text: '5 (Strongly Agree)' }
    ]
  }
];

const getHomePage = (req, res) => {
  res.render('home', {});
};

const getSurveyPage = (req, res) => {
  res.render('survey', {
    questions: questions
  });
};

module.exports = {
  getHomePage,
  getSurveyPage
};
