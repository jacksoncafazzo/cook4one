import Ember from 'ember';

export default Ember.Helper.helper(function(params/*, hash*/) {
  let measurement = params[0];
  let servings = params[1];
  let userServings = params[2];
// console.log("measurement", measurement);
// console.log("userServings", userServings);
//   console.log((measurement / servings) * userServings);
  return Math.round(((measurement / servings) * userServings) * 100)/100;
  }
);
