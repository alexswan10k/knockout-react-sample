/*
  Text plugin
*/
//exports.translate = function (load) {
//	return 'module.exports = "' + load.source
//	  .replace(/(["\\])/g, '\\$1')
//	  .replace(/[\f]/g, "\\f")
//	  .replace(/[\b]/g, "\\b")
//	  .replace(/[\n]/g, "\\n")
//	  .replace(/[\t]/g, "\\t")
//	  .replace(/[\r]/g, "\\r")
//	  .replace(/[\u2028]/g, "\\u2028")
//	  .replace(/[\u2029]/g, "\\u2029")
//	+ '";';
//}

//For some reason system loader seems to be having trouble with commonjs modules, so have temporarily 'ported' this to AMD
define(["require", "exports"], function(require, exports)
{
	exports.translate = function (load) {
		return 'module.exports = "' + load.source
		  .replace(/(["\\])/g, '\\$1')
		  .replace(/[\f]/g, "\\f")
		  .replace(/[\b]/g, "\\b")
		  .replace(/[\n]/g, "\\n")
		  .replace(/[\t]/g, "\\t")
		  .replace(/[\r]/g, "\\r")
		  .replace(/[\u2028]/g, "\\u2028")
		  .replace(/[\u2029]/g, "\\u2029")
		+ '";';
	};
});