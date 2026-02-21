'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const oldIndexY = fromFormat.indexOf('YYYY');
  const oldIndexM = fromFormat.indexOf('MM');
  const oldIndexD = fromFormat.indexOf('DD');
  const newIndexY = toFormat.indexOf('YYYY');
  const newIndexM = toFormat.indexOf('MM');
  const newIndexD = toFormat.indexOf('DD');
  const newDate = [0, 1, 2];

  const parts = date.split(fromFormat[3]);

  if (newIndexY === -1) {
    newDate[toFormat.indexOf('YY')] = parts[oldIndexY].slice(2);
  } else {
    newDate[newIndexY] = parts[oldIndexY];
  }

  if (oldIndexY === -1) {
    if (parts[fromFormat.indexOf('YY')] < 30) {
      newDate[newIndexY] = `20${parts[fromFormat.indexOf('YY')]}`;
    } else {
      newDate[newIndexY] = `19${parts[fromFormat.indexOf('YY')]}`;
    }
  } else {
    newDate[newIndexY] = parts[oldIndexY];
  }

  newDate[newIndexM] = parts[oldIndexM];
  newDate[newIndexD] = parts[oldIndexD];

  return newDate.join(toFormat[3]);
}

module.exports = formatDate;
