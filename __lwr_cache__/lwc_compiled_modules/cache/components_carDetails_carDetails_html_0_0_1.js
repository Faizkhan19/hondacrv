import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./carDetails.css";

import _implicitScopedStylesheets from "./carDetails.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-text-heading_medium${0}"${2}>Fuel Consumption(litres/100km)<sup${3}>D32</sup></div>`;
const $fragment2 = parseFragment`<div class="slds-text-heading_medium${0}"${2}>Seating Capacity<sup${3}>D32</sup></div>`;
const $fragment3 = parseFragment`<div class="slds-text-heading_medium${0}"${2}>Allow Wheels<sup${3}>D32</sup></div>`;
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-col": true,
    "slds-size_12-of-12": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-col": true,
    "slds-size_12-of-12": true,
    "slds-large-size_4-of-12": true,
    "slds-text-align_center": true
  },
  key: 3
};
const stc3 = {
  classMap: {
    "slds-text-heading_large": true
  },
  key: 4
};
const stc4 = {
  key: 5
};
const stc5 = {
  classMap: {
    "slds-col": true,
    "slds-size_12-of-12": true,
    "slds-large-size_4-of-12": true,
    "slds-text-align_center": true
  },
  key: 8
};
const stc6 = {
  classMap: {
    "slds-text-heading_large": true
  },
  key: 9
};
const stc7 = {
  key: 10
};
const stc8 = {
  classMap: {
    "slds-col": true,
    "slds-size_12-of-12": true,
    "slds-large-size_4-of-12": true,
    "slds-text-align_center": true
  },
  key: 13
};
const stc9 = {
  classMap: {
    "slds-text-heading_large": true
  },
  key: 14
};
const stc10 = {
  key: 15
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, d: api_dynamic_text, t: api_text, st: api_static_fragment} = $api;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("img", {
    attrs: {
      "src": $cmp.selectedVariant.selectedimage,
      "alt": "honda image"
    },
    key: 2
  })]), api_element("div", stc2, [api_element("div", stc3, [api_element("strong", stc4, [api_text(api_dynamic_text($cmp.selectedVariant.fuelConsumption))])]), api_static_fragment($fragment1(), 7)]), api_element("div", stc5, [api_element("div", stc6, [api_element("strong", stc7, [api_text(api_dynamic_text($cmp.selectedVariant.seatingCapacity))])]), api_static_fragment($fragment2(), 12)]), api_element("div", stc8, [api_element("div", stc9, [api_element("strong", stc10, [api_text(api_dynamic_text($cmp.selectedVariant.allowWheels) + "\"")])]), api_static_fragment($fragment3(), 17)])])];
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
tmpl.stylesheetToken = "lwc-3re1gl0c0i7";
tmpl.legacyStylesheetToken = "components-carDetails_carDetails";
freezeTemplate(tmpl);
