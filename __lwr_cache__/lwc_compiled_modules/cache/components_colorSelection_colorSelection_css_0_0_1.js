function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".color_circle" + shadowSelector + "{height:50px;width:50px;display: block;border-radius: 50%;cursor: pointer;}.ignite_red" + shadowSelector + "{background-color: #FF0000;}.sporty_blue" + shadowSelector + "{background-color: mediumblue;}.crystal_black" + shadowSelector + "{background-color: black;}.platinum_white" + shadowSelector + "{background-color:lavenderblush;}input[type=\"radio\"]:checked" + shadowSelector + "+label" + shadowSelector + "{border: 5px solid #ffc200;}input[type=\"radio\"]:checked" + shadowSelector + "+label" + shadowSelector + "+div" + shadowSelector + "{color: #ffc200 ;}";
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];