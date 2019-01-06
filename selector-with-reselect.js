import { createSelector } from 'reselect';

const someSelector = createSelector(
  // These input functions can be other selectors
  // created by reselect or they can just be
  // plain functions.
  inputSelector1,
  inputSelector2,
  inputSelector3,
  // note that the results of the input functions
  // just get passed as arguments to the last function
  // in the order their listed above
  (result1, result2, result3) => {
    // do our logic here
  }
);
