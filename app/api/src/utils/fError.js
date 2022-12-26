const fError = (status, enError, faError) => {
  const error = new Error(enError);
  error.text = faError ?? enError;
  error.status = status;
  return error;
};

module.exports = fError;
