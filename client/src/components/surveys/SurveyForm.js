import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} type="text" name={name} label={label} component={SurveyField} />;
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red darken-1 btn-flat left white-text">
            Cancel
            <i className="material-icons right">cancel</i>
          </Link>
          <button type="submit" className="teal darken-1 btn-flat right white-text">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  errors.emails = validateEmails(values.emails || '');

  if (!values.title) {
    errors.title = 'You must provide a title';
  }
  if (!values.subject) {
    errors.subject = 'You must provide a subject';
  }
  if (!values.body) {
    errors.body = 'You must provide a body';
  }
  if (!values.emails) {
    errors.emails = 'You must provide at least one recipient';
  }
  return errors;
};

export default reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false
})(SurveyForm);
