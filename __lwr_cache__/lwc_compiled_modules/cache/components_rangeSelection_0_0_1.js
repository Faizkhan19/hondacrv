import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./rangeSelection.html";
class RangeSelection extends LightningElement {
  constructor(...args) {
    super(...args);
    this.variants = [];
  }
  selectionHandler(event) {
    const {
      value
    } = event.target;
    console.log("value", value);
    let selected = this.variants.find(item => item.variant == value);
    this.dispatchEvent(new CustomEvent("selection", {
      detail: {
        selected: selected,
        variant: value
      }
    }));
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(RangeSelection, {
  publicProps: {
    variants: {
      config: 0
    }
  }
});
export default _registerComponent(RangeSelection, {
  tmpl: _tmpl,
  sel: "components-range-selection",
  apiVersion: 60
});