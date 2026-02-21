'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  let oldIndexY = fromFormat.indexOf('YYYY');

  if (oldIndexY === -1) {
    oldIndexY = fromFormat.indexOf('YY');
  }

  const oldIndexM = fromFormat.indexOf('MM');
  const oldIndexD = fromFormat.indexOf('DD');

  let newIndexY = toFormat.indexOf('YYYY');

  if (newIndexY === -1) {
    newIndexY = toFormat.indexOf('YY');
  }

  const newIndexM = toFormat.indexOf('MM');
  const newIndexD = toFormat.indexOf('DD');

  const sepFrom = fromFormat[3];
  const newDate = Array(3).fill('');

  const parts = date.split(sepFrom);

  let yearValue = parts[oldIndexY];

  if (fromFormat[oldIndexY] === 'YY') {
    yearValue = (+yearValue < 30 ? '20' : '19') + yearValue;
  }

  if (toFormat[newIndexY] === 'YY') {
    yearValue = yearValue.slice(-2);
  }

  newDate[newIndexY] = yearValue;
  newDate[newIndexM] = parts[oldIndexM];
  newDate[newIndexD] = parts[oldIndexD];

  return newDate.join(toFormat[3]);
}

module.exports = formatDate;
