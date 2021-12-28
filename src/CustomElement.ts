function toSnakeCase(camelCase : string) : string {
    return camelCase //replace caps with their lowercase version and add a dash in front
        .replace(/[A-Z]/g, (firstMatch) => { return '-' + firstMatch.toLowerCase(); })
        .slice(1); //remove the added dash from the first character being uppercase
}

export default abstract class CustomElement extends HTMLElement {
    protected abstract readonly TEMPLATE : string;

    protected abstract readonly STYLE : string;

    protected registerListeners?() : void;

    protected preRender?() : void;

    protected postRender?() : void;

    public connectedCallback() {
        this.render();
        if(this.registerListeners) { this.registerListeners(); }
    }

    private getTemplate() : HTMLTemplateElement {
        const template = document.createElement('template');
        template.innerHTML = `${this.STYLE} ${this.TEMPLATE}`;
        return template;
    }

    private render() : void {
        this.preRenderHook();
        const shadowRoot = this.attachShadow({mode : "open"});
        shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        this.postRenderHook();
    }

    private preRenderHook() : void {
        if(this.preRender) { this.preRender(); }
    }

    private postRenderHook() : void {
        if(this.postRender) { this.postRender(); }
    }

    protected shadowSelector<Type extends HTMLElement>(selector : string) : Type | null {
        return this.shadowRoot ? this.shadowRoot.querySelector(selector) : null;
    }

    protected shadowSelectorAll<Type extends HTMLElement>(selector : string) : Type[] | null {
        return this.shadowRoot ? Array.from(this.shadowRoot.querySelectorAll(selector)) : null;
    }

    public static get ELEMENT_NAME() : string { return toSnakeCase(this.name); }
}
