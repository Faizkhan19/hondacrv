import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./modal.css";

import _implicitScopedStylesheets from "./modal.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-backdrop slds-backdrop_open${0}" role="presentation"${2}></div>`;
const stc0 = {
  "slds-modal": true,
  "slds-fade-in-open": true
};
const stc1 = {
  classMap: {
    "slds-modal__container": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-modal__header": true
  },
  key: 2
};
const stc3 = {
  "slds-modal__title": true,
  "slds-hyphenate": true
};
const stc4 = {
  "slds-modal__content": true,
  "slds-p-around_medium": true
};
const stc5 = {
  key: 5
};
const stc6 = [];
const stc7 = {
  classMap: {
    "slds-modal__footer": true
  },
  key: 6
};
const stc8 = {
  attrs: {
    "name": "footer"
  },
  key: 7
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, d: api_dynamic_text, t: api_text, h: api_element, s: api_slot, st: api_static_fragment} = $api;
  return [api_element("section", {
    classMap: stc0,
    attrs: {
      "role": "dialog",
      "tabindex": "-1",
      "aria-modal": "true",
      "aria-labelledby": api_scoped_id("modal-heading-01")
    },
    key: 0
  }, [api_element("div", stc1, [api_element("div", stc2, [api_element("h1", {
    classMap: stc3,
    attrs: {
      "id": api_scoped_id("modal-heading-01"),
      "tabindex": "-1"
    },
    key: 3
  }, [api_text(api_dynamic_text($cmp.heading))])]), api_element("div", {
    classMap: stc4,
    attrs: {
      "id": api_scoped_id("modal-content-id-1")
    },
    key: 4
  }, [api_slot("", stc5, stc6, $slotset)]), api_element("div", stc7, [api_slot("footer", stc8, stc6, $slotset)])])]), api_static_fragment($fragment1(), 9)];
  /*LWC compiler v5.0.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = ["", "footer"];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-42s9bakjnfm";
tmpl.legacyStylesheetToken = "components-modal_modal";
freezeTemplate(tmpl);
