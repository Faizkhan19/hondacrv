import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./home.css";

import _implicitScopedStylesheets from "./home.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<main${3}><h2 class="slds-text-align_center first_heading${0}"${2}>Your New Honda</h2><h2 class="slds-text-align_center second_heading${0}"${2}>CR-V</h2><div class="slds-text-align_center${0}"${2}><img src="/public/assets/honda/vti/ignite_red.png" alt="ignite red" class="responsiveImage${0}"${2}></div><div class="slds-grid slds-gutters slds-wrap${0}"${2}><div class="slds-col benefits${0}"${2}><div class="fiveNumber${0}"${2}>5</div><div${3}>Low Price Services</div></div><div class="slds-col benefits${0}"${2}><div class="fiveNumber${0}"${2}>5</div><div${3}>Year Unlimited KM Warranty</div></div><div class="slds-col benefits${0}"${2}><div class="fiveNumber${0}"${2}>5</div><div${3}>Year Premium Roadside Assist</div></div></div></main>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1(), 1)];
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
tmpl.stylesheetToken = "lwc-6le4c39rot8";
tmpl.legacyStylesheetToken = "pages-home_home";
freezeTemplate(tmpl);
