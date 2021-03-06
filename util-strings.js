/**
 * Parse query string
 * @param {string} query
 */
function parseQuery (query) {
  var res = {};
  if (!query) return res;
  query = query.trim().replace(/^(\?|#|&)/, '');
  if (!query) return res;

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decodeURIComponent(parts.shift());
    var val = parts.length > 0
      ? decodeURIComponent(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });
  return res;
}

const reFirstLetter = /^([a-z])|\s([a-z])/g
/**
 * Capitalize given string s
 * @param  {String} s
 * @return {String}
 */
function capitalize (s) {
  return s.replace(reFirstLetter, a => a.toUpperCase());
}

export default {
  parseQuery,
  capitalize
};