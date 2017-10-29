const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  const invalidEmails = emails
    .split(',')
    .map(email => {
      return email.trim();
    })
    .filter(email => {
      return re.test(email) === false;
    });
  if (invalidEmails.length) {
    return 'These emails are invalid: ' + invalidEmails;
  } else {
    return null;
  }
};
