/* global customElements */
/**
 * Base template from https://www.polymer-project.org/blog/2017-08-23-hands-on-30-preview
 */
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

/**
 * `polymer3-element`
 * Test KendoUI jQuery
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

export class Polymer3Element extends PolymerElement {
    // Define a string template instead of a `<template>` element.
    static get template() {
        return `
        <link rel="stylesheet" href="../assets/kendo.common.min.css" />
        <link rel="stylesheet" href="../assets/kendo.rtl.min.css" />
        <link rel="stylesheet" href="../assets/kendo.silver.min.css" />
    
        
        <div>This is my [[name]] custom element.</div>
        <kendo-scheduler id="scheduler"></kendo-scheduler>
        `;
    }

    constructor() {
        super();
        this.name = 'polymer3-element';
    }

    ready() {
        super.ready();
        var scheduler = this.shadowRoot.querySelector('#scheduler')
        var dataSource = new kendo.data.SchedulerDataSource({
            data: [{
                id: 1,
                start: new Date("2017/3/20 08:00 AM"),
                end: new Date("2017/3/20 09:00 AM"),
                title: "MEETING"
            }]
        });

        scheduler.setDataSource(dataSource);
    }

    // properties, observers, etc. are identical to 2.x
    static get properties() {
        return {
            name: {
                Type: String
            }
        };
    }
}
customElements.define('polymer3-element', Polymer3Element);