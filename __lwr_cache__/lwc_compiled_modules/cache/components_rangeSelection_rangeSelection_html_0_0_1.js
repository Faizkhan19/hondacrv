import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./rangeSelection.css";

import _implicitScopedStylesheets from "./rangeSelection.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  "slds-hidden": true
};
const stc1 = {
  "slds-radio_label": true
};
const stc2 = {
  key: 3
};
const stc3 = {
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, gid: api_scoped_id, b: api_bind, h: api_element, d: api_dynamic_text, t: api_text, i: api_iterator} = $api;
  const {_m0} = $ctx;
  return api_iterator($cmp.variants, function (item) {
    return api_element("div", {
      key: api_key(0, item.variant)
    }, [api_element("input", {
      classMap: stc0,
      attrs: {
        "type": "radio",
        "id": api_scoped_id(item.variant),
        "name": "variants"
      },
      props: {
        "value": item.variant,
        "checked": item.checked
      },
      key: 1,
      on: {
        "change": _m0 || ($ctx._m0 = api_bind($cmp.selectionHandler))
      }
    }), api_element("label", {
      classMap: stc1,
      attrs: {
        "for": api_scoped_id(item.variant)
      },
      key: 2
    }, [api_element("span", stc2, [api_text(api_dynamic_text(item.variant))]), api_element("span", stc3, [api_text("From " + api_dynamic_text(item.formattedPrice))])])]);
  });
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
tmpl.stylesheetToken = "lwc-2l9ecvf6fe1";
tmpl.legacyStylesheetToken = "components-rangeSelection_rangeSelection";
freezeTemplate(tmpl);
