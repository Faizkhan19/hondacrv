function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "label" + shadowSelector + "{font-size: 20px;border: 0.56px solid grey;padding: 12px 24px;width: 100%;color: black;border-radius: 5px;display: flex;justify-content: space-between;cursor: pointer;margin-bottom: 10px;background-color: #f2f2f2;}input[type=\"radio\"]:checked" + shadowSelector + "+label" + shadowSelector + "{background-color: #ffc200;}";
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];