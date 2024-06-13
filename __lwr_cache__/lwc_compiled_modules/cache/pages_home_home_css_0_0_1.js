function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "main" + shadowSelector + "{padding-top: 36px;}.first_heading" + shadowSelector + "{font-size: 48px;margin-bottom: 20px;font-weight: 700;}.second_heading" + shadowSelector + "{font-size: 224px;line-height: 0.8;font-weight: 700;margin-bottom: 24px;}.responsiveImage" + shadowSelector + "{width:100%;height:auto;max-width: 720px;}.fiveNumber" + shadowSelector + "{font-size: 68px;color: #cc0000;font-weight: 700;}.benefits" + shadowSelector + "{padding: 32px;text-align: center;font-size: 32px;}@media screen and (max-width:520px) {.first_heading" + shadowSelector + "{font-size: 32px;}.second_heading" + shadowSelector + "{font-size: 96px;}}";
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];