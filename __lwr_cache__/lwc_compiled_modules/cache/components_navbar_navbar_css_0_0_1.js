function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "nav" + shadowSelector + "{box-shadow: 0px 0px 2px grey ;width :100%;}a" + shadowSelector + "{font-size: 24px;color: #cc0000;}@media screen and (max-width:520px) {a" + shadowSelector + "{font-size: 16px;}img" + shadowSelector + "{width:150px;}}";
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];