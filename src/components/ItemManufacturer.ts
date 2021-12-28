import CustomElement from "../CustomElement";
import Service from "../Service";
import ManufacturerObject from "../serviceObjects/ManufacturerObject";

export default class ItemManufacturer extends CustomElement {
    protected readonly STYLE: string = `
        <style> 
            .manufacturer div {
                margin-left: auto;
                margin-right: auto;
                width: 50%;
            }
            
            .manufacturer img {
                display: block;
                margin-left: auto;
                margin-right: auto;
                height: auto;
                max-height: 250px
            }
            
            p, h1, h3 { 
                margin-left: auto;
                margin-right: auto;
                width: 50%;
                text-align: center;
            }
        </style>
    `;

    protected readonly TEMPLATE: string = `
        <div class='manufacturer' tabindex="0">
            <h1 id="manufacturerName">Anchor Hocking</h1>
            <img id="companyLogo"/>
            <p id="description"></p>
            <h3>Produced Patterns:</h3>
            <div id="patterns">
            </div>
            <h3>Makers Marks:</h3>
            <div id="makerMarks"></div>
        </div>
    `;

    static get observedAttributes() { return ['data-id']; }

    // @ts-ignore
    public attributeChangedCallback(name : string, oldValue : string | null, newValue : string | null) {
        if(name === 'data-id') {
            this.loadData(Service.getManufacturer(parseInt(newValue as string)) as ManufacturerObject);
        }
    }

    private loadPatterns(manufacturer : ManufacturerObject) {
        const patterns = this.shadowSelector('#patterns') as HTMLDivElement;
        patterns.innerHTML = "";
        manufacturer.patterns.forEach(function(pattern) {
            patterns.innerHTML += `<p class='pattern' data-id="${pattern.id}">${pattern.patternName}<p/>`
        });
    }

    private loadMakersMarks(manufacturer : ManufacturerObject) {
        const makerMarks = this.shadowSelector('#makerMarks') as HTMLDivElement;
        makerMarks.innerHTML = "";
        manufacturer.makerMarks.forEach(function(makersMark) {
            makerMarks.innerHTML += `<img class="makersMark" src="${makersMark}"/>`
        });
    }

    private loadData(manufacturer : ManufacturerObject) {
        (this.shadowSelector('#manufacturerName') as HTMLHeadingElement).innerText = manufacturer.manufacturerName;
        (this.shadowSelector('#companyLogo') as HTMLImageElement).src = manufacturer.companyLogo;
        (this.shadowSelector('#description') as HTMLParagraphElement).innerText = manufacturer.description;

        this.loadPatterns(manufacturer);
        this.loadMakersMarks(manufacturer);
    }

    protected postRender() {
        const manufacturer = Service.getManufacturer(parseInt(this.getAttribute('data-id') as string));
        if(manufacturer) { this.loadData(manufacturer); }
    }
}

