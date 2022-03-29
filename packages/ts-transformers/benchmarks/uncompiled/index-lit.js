var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, css, render } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { runBenchmark } from './runner.js';
const propertyOptions = {};
let XThing = class XThing extends LitElement {
    constructor() {
        super(...arguments);
        this.from = '';
        this.time = '';
        this.subject = '';
    }
    render() {
        return html `
      <div class="container">
        <div class="from">${this.from}</div>
        <div class="time">${this.time}</div>
        <div class="subject">${this.subject}</div>
        <div>slotted: <slot></slot></div>
      </div>
    `;
    }
};
XThing.styles = css `
    .container {
      box-sizing: border-box;
      height: 200px;
      padding: 4px;
      padding-left: 77px;
      line-height: 167%;
      cursor: default;
      background-color: white;
      position: relative;
      color: black;
      background-repeat: no-repeat;
      background-position: 10px 10px;
      background-size: 60px;
      border-bottom: 1px solid #ddd;
    }

    .from {
      display: inline;
      font-weight: bold;
    }

    .time {
      margin-left: 10px;
      font-size: 12px;
      opacity: 0.8;
    }
  `;
__decorate([
    property(propertyOptions)
], XThing.prototype, "from", void 0);
__decorate([
    property(propertyOptions)
], XThing.prototype, "time", void 0);
__decorate([
    property(propertyOptions)
], XThing.prototype, "subject", void 0);
XThing = __decorate([
    customElement('x-thing')
], XThing);
export { XThing };
let XItem = class XItem extends LitElement {
    render() {
        return html `
      <div @click="${this.onClick}" class="item">
        <x-thing
          .from="${this.item.value0}"
          .time="${this.item.value1}"
          .subject="${this.item.value2}"
        >
          <div>s-${this.item.value0}</div>
          <div>s-${this.item.value1}</div>
          <div>s-${this.item.value2}</div>
        </x-thing>
        <x-thing
          .from="${this.item.value3}"
          .time="${this.item.value4}"
          .subject="${this.item.value5}"
        >
          <div>s-${this.item.value3}</div>
          <div>s-${this.item.value4}</div>
          <div>s-${this.item.value5}</div>
        </x-thing>
        <x-thing
          .from="${this.item.value6}"
          .time="${this.item.value7}"
          .subject="${this.item.value8}"
        >
          <div>s-${this.item.value6}</div>
          <div>s-${this.item.value7}</div>
          <div>s-${this.item.value8}</div>
        </x-thing>
        <x-thing
          .from="${this.item.value9}"
          .time="${this.item.value10}"
          .subject="${this.item.value11}"
        >
          <div>s-${this.item.value9}</div>
          <div>s-${this.item.value10}</div>
          <div>s-${this.item.value11}</div>
        </x-thing>
        <x-thing
          .from="${this.item.value12}"
          .time="${this.item.value13}"
          .subject="${this.item.value14}"
        >
          <div>s-${this.item.value12}</div>
          <div>s-${this.item.value13}</div>
          <div>s-${this.item.value14}</div>
        </x-thing>
        <x-thing
          .from="${this.item.value15}"
          .time="${this.item.value16}"
          .subject="${this.item.value17}"
        >
          <div>s-${this.item.value15}</div>
          <div>s-${this.item.value16}</div>
          <div>s-${this.item.value17}</div>
        </x-thing>
      </div>
    `;
    }
    onClick() {
        console.log('click');
    }
};
XItem.styles = css `
    .item {
      display: flex;
    }
  `;
__decorate([
    property()
], XItem.prototype, "item", void 0);
XItem = __decorate([
    customElement('x-item')
], XItem);
export { XItem };
let XApp = class XApp extends LitElement {
    render() {
        return html `${this.items.map((item) => html `<x-item .item="${item}"></x-item>`)}`;
    }
};
__decorate([
    property()
], XApp.prototype, "items", void 0);
XApp = __decorate([
    customElement('x-app')
], XApp);
export { XApp };
const updateComplete = () => new Promise((r) => requestAnimationFrame(r));
const renderApp = async (data) => {
    render(html `<x-app .items=${data}></x-app>`, document.body);
    // await (document.body.firstElementChild as XApp).updateComplete;
    await updateComplete();
};
runBenchmark(renderApp);
//# sourceMappingURL=index-lit.js.map