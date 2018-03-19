export class NameTag extends HTMLElement {

    // Assign a private variable to store the name property
    constructor() {
        super();
        this._name = '';
    }

    // Static method that returns an array with the name of 
    // all the properties that should be observed
    static get observedAttributes() { return ["name"]; }

    // A lifecycle call back that gets invoked every time 
    // a property in the observation list changes. This method
    // leaves room to do some dirty checking
    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue !== oldValue && name === 'name') {
            this.name = newValue;
        }
    }

    // ES6 setter method for the name property which gets
    // called when the value for `name` is assigned
    set name(val) {
        this._name = val;
        this.innerHTML = this._name;
    }

    // ES6 getter method for the name property which gets
    // called when the value for `name` is read
    get name() {
        return this._name;
    }
}
window.customElements.define('name-tag', NameTag);