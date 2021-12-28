import CustomElement from "../CustomElement";
import Service from "../Service";
import GlassPatternObject from "../serviceObjects/GlassPatternObject";

export default class GlassItem extends CustomElement {
    protected readonly STYLE: string = `
        <style> 
            .glassItem div {
                margin-left: auto;
                margin-right: auto;
                width: 50%;
            }
            
            .glassItem img {
                display: block;
                margin-left: auto;
                margin-right: auto;
                height: auto;
                max-height: 250px
            }
            
            p, h1, h2, h3, h4 { 
                margin-left: auto;
                margin-right: auto;
                width: 50%;
                text-align: center;
            }
            
            #patternPictures {
                display: flex;
                flex-flow: row wrap;
                position: relative;
                align-items: center;
                justify-content: center;
            }
            
            #patternPictures img {
                margin: 4px;
                flex: 0 1 calc(20% - 8px); /* <-- adjusting for margin */
            }
        </style>
    `;

    protected readonly TEMPLATE: string = `
        <div class='glassItem' tabindex="0">
            <h2 id="patternName">Moon & Stars</h2>
            <div id="patternPictures"></div>
            <p id="description"></p>
            <h4>Tags:</h4>
            <p id="tags"></p>
            <h3>Produced By:</h3>
            <div id="producers"></div>
        </div>
    `;

    static get observedAttributes() { return ['data-id']; }

    // @ts-ignore
    public attributeChangedCallback(name : string, oldValue : string | null, newValue : string | null) {
        if(name === 'data-id' && newValue) {
            this.loadData(Service.getPattern(parseInt(newValue)) as GlassPatternObject);
        }
    }

    private static getYearSpan(manufacturer : any) {
        if(manufacturer.isCurrent) {
            return `<span class="years">${manufacturer.yearStarted || "unknown"} - current</span>`
        }
        return `<span class="years">${manufacturer.yearStarted || "unknown"} - ${manufacturer.yearFinished || "unknown"}</span>`
    }

    private loadPatternPictures(patternListing : GlassPatternObject) {
        const patternPictures = this.shadowSelector('#patternPictures') as HTMLDivElement;
        patternPictures.innerHTML = "";
        patternListing.patternImages.forEach(function (patternImage) {
            patternPictures.innerHTML += `<img class='patternPicture' src="${patternImage.src}"/>`
        });
        return this;
    }

    private loadTags(patternListing : GlassPatternObject) {
        const tags = this.shadowSelector('#tags') as HTMLParagraphElement;
        tags.innerHTML = '';
        patternListing.tags.forEach(function (tag, index) {
            tags.innerHTML += `<span class="tag">${tag}${(index === patternListing.tags.length - 1) ? '' : ', '}</span>`
        });
        return this;
    }

    private loadManufacturers(patternListing : GlassPatternObject) {
        const manufacturers = this.shadowSelector('#producers') as HTMLDivElement;
        manufacturers.innerHTML = '';
        patternListing.manufacturers.forEach(function (manufacturer)  {
            const yearSpan = GlassItem.getYearSpan(manufacturer);
            manufacturers.innerHTML += `<p class="producer">
                <span class="manufacturerName">${manufacturer.name}</span>
                ${yearSpan}
            </p>`;
        });
        return this;
    }

    private loadData(patternListing : GlassPatternObject) {
        (this.shadowSelector('#patternName') as HTMLHeadingElement).innerText = patternListing.patternName;
        (this.shadowSelector('#description') as HTMLParagraphElement).innerHTML = patternListing.description;

        this.loadPatternPictures(patternListing)
            .loadTags(patternListing)
            .loadManufacturers(patternListing);
    }

    protected postRender() {
        this.loadData(Service.getPattern(parseInt(this.getAttribute('data-id') as string)) as GlassPatternObject);
    }
}