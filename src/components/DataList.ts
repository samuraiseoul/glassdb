import Service from "../Service";
import CustomElement from "../CustomElement";


export default class DataList extends CustomElement {
    protected readonly STYLE: string = `
        <style> 
        </style>
    `;

    protected readonly TEMPLATE: string = `
        <div>
        <label>
            <slot></slot> 
            <input type="text" list="datalist">
            </label>
        </div>
        <datalist id="datalist"></datalist>
    `;

    private loadData(tags : string[]) {
        const datalist = this.shadowSelector('#datalist') as HTMLDataListElement;
        tags.forEach(function(tag) {
            datalist.innerHTML += `<option>${tag}</option>`;
        });
    }

    protected postRender() {
        this.loadData(Service.getAttributes());
    }
}