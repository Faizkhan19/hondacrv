import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./modal.html";
class Modal extends LightningElement {
  constructor(...args) {
    super(...args);
    this.heading = void 0;
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(Modal, {
  publicProps: {
    heading: {
      config: 0
    }
  }
});
export default _registerComponent(Modal, {
  tmpl: _tmpl,
  sel: "components-modal",
  apiVersion: 60
});