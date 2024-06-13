import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./navbar.css";

import _implicitScopedStylesheets from "./navbar.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<nav class="slds-grid slds-grid_align-spread  slds-grid slds-grid_vertical-align-center
  slds-p-horizontal_medium${0}"${2}><a href="/"${3}><img src="/public/assets/honda/honda-logo.svg" alt="Honda logo" height="'80px" width="200px"${3}></a><a href="/buildAndPrice"${3}>Build your CR_V</a></nav>`;
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
tmpl.stylesheetToken = "lwc-38n2s6kncb0";
tmpl.legacyStylesheetToken = "components-navbar_navbar";
freezeTemplate(tmpl);
