import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./priceFooter.css";

import _implicitScopedStylesheets from "./priceFooter.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<sup${3}>*</sup>`;
const $fragment2 = parseFragment`<button class="slds-button slds-button_destructive${0}"${2}>Save and Contact Us</button>`;
const stc0 = {
  classMap: {
    "slds-p-around_medium": true,
    "slds-wrap": true,
    "slds-grid": true,
    "slds-grid_align-spread": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "price": true
  },
  key: 1
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, st: api_static_fragment, h: api_element, b: api_bind, sp: api_static_part} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("footer", stc0, [api_element("div", stc1, [api_text(api_dynamic_text($cmp.formattedPrice)), api_static_fragment($fragment1(), 3)]), api_static_fragment($fragment2(), 5, [api_static_part(0, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.contactUsHandler))
    }
  })])])];
  /*LWC compiler v5.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-jcicmu9s7k";
tmpl.legacyStylesheetToken = "components-priceFooter_priceFooter";
freezeTemplate(tmpl);
