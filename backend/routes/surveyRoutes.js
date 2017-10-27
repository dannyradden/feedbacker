const mongoose = require('mongoose');
const Survey = mongoose.model('Survey');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
  app.post('api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _owner: req.user.id,
      dateSent: Date.now()
    });

    // send emails
    const mailer = new Mailer(survey, surveyTemplate(survey.body));
    mailer.send();
  });
};
