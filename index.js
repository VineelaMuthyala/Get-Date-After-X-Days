const addDays = require("date-fns/addDays");
function getTheDate(days) {
  newDate = addDays(new Date(2020, 8, 22), days);
  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
}

module.exports = getTheDate;
