import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./colorSelection.html";
class ColorSelection extends LightningElement {
  constructor(...args) {
    super(...args);
    this.color = void 0;
  }
  get colorClassList() {
    return `slds-radio_label color_circle ${this.color.value}`;
  }
  selectionHandler(event) {
    this.dispatchEvent(new CustomEvent("colorselection", {
      detail: this.color.value
    }));
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(ColorSelection, {
  publicProps: {
    color: {
      config: 0
    }
  }
});
export default _registerComponent(ColorSelection, {
  tmpl: _tmpl,
  sel: "components-color-selection",
  apiVersion: 60
});