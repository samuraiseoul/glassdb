"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomElement_1 = __importDefault(require("../CustomElement"));
class ListItem extends CustomElement_1.default {
    constructor() {
        super(...arguments);
        this.STYLE = `
        <style> 
        </style>
    `;
        this.TEMPLATE = `
        <div class='glassListing' tabindex="0">
            <img src="../../glass.jpg"/>
            <p>Moon & Stars</p>
            <p>L.E. Smith</p>
        </div>
    `;
    }
}
exports.default = ListItem;
//# sourceMappingURL=ListItem.js.map