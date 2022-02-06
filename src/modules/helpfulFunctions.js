/* eslint-disable no-restricted-globals */
// src/modules/helfulFunctions

// function to help validate input
const validateScore = (name, score) => {
  if (name === null || name === '') {
    return false;
  }
  if (isNaN(score)) {
    return false;
  }
  if (score < 0) {
    return false;
  }
  return true;
};

export default validateScore;