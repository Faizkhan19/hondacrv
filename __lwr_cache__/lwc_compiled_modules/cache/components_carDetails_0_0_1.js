import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./carDetails.html";
class CarDetails extends LightningElement {
  constructor(...args) {
    super(...args);
    this._selectedVariant = {};
  }
  get selectedVariant() {
    return this._selectedVariant;
  }
  set selectedVariant(data) {
    if (data) {
      let model = data.variant.toLowerCase().replaceAll(' ', '');
      let selectedimage = `/public/assets/honda/${model}/${data.ImageName}.png`;
      console.log("selectedimage", selectedimage);
      this._selectedVariant = {
        ...data,
        "selectedimage": selectedimage
      };
    }
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(CarDetails, {
  publicProps: {
    selectedVariant: {
      config: 3
    }
  },
  fields: ["_selectedVariant"]
});
export default _registerComponent(CarDetails, {
  tmpl: _tmpl,
  sel: "components-car-details",
  apiVersion: 60
});