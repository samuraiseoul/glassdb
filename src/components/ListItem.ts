import CustomElement from "../CustomElement";
import Service from "../Service";

export default class ListItem extends CustomElement {
    protected readonly STYLE: string = `
        <style> 
            .glassListing {
                background-color: blueviolet;
                width: 10em;
            }
            .glassListing img {
                width: 100%;
            }
        </style>
    `;

    // &#9432; is an 'i' with a circle around it, thanks unicode!
    protected readonly TEMPLATE: string = `
        <div class='glassListing' tabindex="0">
            <img id="thumbnail"/>
            <p id="patternName"></p>
            <p id="manufacturer"></p>
        </div>
    `;

    protected postRender() {
        const item = Service.getPatternStub(parseInt(this.getAttribute('data-id') as string));
        (this.shadowSelector('#thumbnail') as HTMLImageElement).src = item.imgSrc;
        (this.shadowSelector("#patternName") as HTMLParagraphElement).innerText = item.patternName;
        (this.shadowSelector('#manufacturer') as HTMLParagraphElement).innerText = item.manufacturers.toString();
    }
}

