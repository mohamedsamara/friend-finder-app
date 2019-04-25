const getHomePage = (req, res) => {
  res.render('home', {});
};

const getSurveyPage = (req, res) => {
  res.render('survey', {});
};

module.exports = {
  getHomePage,
  getSurveyPage
};
