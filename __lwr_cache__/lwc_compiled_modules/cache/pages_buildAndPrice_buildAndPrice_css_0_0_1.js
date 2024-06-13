function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "main" + shadowSelector + "{padding-bottom: 160px;}";
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];