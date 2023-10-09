/* TO DO:
- carousel: add and refactor destroy and init
- dial: add and refactor destroy and init
- drawer: add and refactor destroy and init
- modal: add and refactor destroy and init
- tabs: add and refactor destroy and init
    - add unique ID selector for tabs

*/
class Instances {
    private _instances: [];

    constructor() {
        this._instances = {
            Accordion: [],
            Carousel: [],
            Collapse: [],
            Dial: [],
            Dismiss: [],
            Drawer: [],
            Dropdown: [],
            Modal: [],
            Popover: [],
            Tabs: [],
            Tooltip: [],
        };
    }

    init() {}

    addInstance(component: string, instance: any, id?: string) {
        this._instances[component][id ? id : this._generateRandomId()] =
            instance;
    }

    getInstance(component: string, id: string) {
        return this._instances[component][id];
    }

    destroyAndRemoveInstance(component: string, id: string) {
        this.destroyInstanceObject(component, id);
        this.removeInstance(component, id);
    }

    removeInstance(component: string, id: string) {
        delete this._instances[component][id];
    }

    destroyInstanceObject(component: string, id: string) {
        this._instances[component][id].destroy();
    }

    _generateRandomId() {
        return Math.random().toString(36).substr(2, 9);
    }
}

const instances = new Instances();

export default instances;

if (typeof window !== 'undefined') {
    window.flowbiteInstances = instances;
}
