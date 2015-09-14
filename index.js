/**
 * @param  {string} string   any input
 * @return {Object} given    input string converted to a nodered JSON message
 */
module.exports = function (input) {
  var ret;
  try {
    var json = JSON.parse(input);
    if (typeof json.payload === 'undefined') {
      ret = { payload: json };
    } else {
      ret = json;
    }
  } catch (err) {
    ret = { payload: input };
  }
  return ret;
};
