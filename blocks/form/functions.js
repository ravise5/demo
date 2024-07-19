/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
 * Get City Name
 * @name getFullName Fetches city name
 * @param {object} globals - The global object containing necessary globals form data.
 * @return {string}
 */
function getCityName(globals) {
  globals.functions.markFieldAsInvalid('$form.t1', '', { useQualifiedName: true });
}

/**
 * Get Country Name
 * @name getFullName Fetches country name
 * @param {object} globals - The global object containing necessary globals form data.
 * @return {string}
 */
function getCountryName(globals) {
  globals.functions.markFieldAsInvalid('$form.t1', 'xyz', { useQualifiedName: true });
}

// eslint-disable-next-line import/prefer-default-export
export { getFullName, days, getCityName, getCountryName };
