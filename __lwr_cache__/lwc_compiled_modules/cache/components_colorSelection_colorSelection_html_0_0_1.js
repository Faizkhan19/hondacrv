import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./colorSelection.css";

import _implicitScopedStylesheets from "./colorSelection.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-m-top_medium": true,
    "slds-grid-vertical-align-center": true
  },
  key: 0
};
const stc1 = {
  "slds-hidden": true
};
const stc2 = {
  classMap: {
    "slds-text-heading_medium": true,
    "slds-m-left_medium": true
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, b: api_bind, h: api_element, d: api_dynamic_text, t: api_text} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_element("input", {
    classMap: stc1,
    attrs: {
      "type": "radio",
      "id": api_scoped_id($cmp.color.value),
      "name": "colors"
    },
    props: {
      "checked": $cmp.color.checked,
      "value": $cmp.color.value
    },
    key: 1,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.selectionHandler))
    }
  }), api_element("label", {
    className: $cmp.colorClassList,
    attrs: {
      "for": api_scoped_id($cmp.color.value)
    },
    key: 2
  }), api_element("div", stc2, [api_text(api_dynamic_text($cmp.color.label))])])];
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
tmpl.stylesheetToken = "lwc-739jhth4bt6";
tmpl.legacyStylesheetToken = "components-colorSelection_colorSelection";
freezeTemplate(tmpl);
