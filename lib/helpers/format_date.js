// Generated by CoffeeScript 1.6.3
var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

module.exports = function(dateMoment, outFormat) {
  if (__indexOf.call(Object.keys(geomoment.formats), outFormat) >= 0) {
    outFormat = geomoment.formats[outFormat];
  }
  return dateMoment.format(outFormat);
};
