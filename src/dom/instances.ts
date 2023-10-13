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

    addInstance(component: string, instance: any, id?: string) {
        if (this._instances[component][id]) {
            console.warn(`Flowbite: Instance with ID ${id} already exists.`);
            return;
        }

        this._instances[component][id ? id : this._generateRandomId()] =
            instance;
    }

    getInstance(component: string, id: string) {
        if (!this._instances[component][id]) {
            console.warn(`Flowbite: Instance with ID ${id} does not exist.`);
            return;
        }
        return this._instances[component][id];
    }

    destroyAndRemoveInstance(component: string, id: string) {
        if (!this._instances[component][id]) {
            console.warn(`Flowbite: Instance with ID ${id} does not exist.`);
            return;
        }
        this.destroyInstanceObject(component, id);
        this.removeInstance(component, id);
    }

    removeInstance(component: string, id: string) {
        if (!this._instances[component][id]) {
            console.warn(`Flowbite: Instance with ID ${id} does not exist.`);
            return;
        }
        this._instances[component][id].removeInstance();
    }

    destroyInstanceObject(component: string, id: string) {
        if (!this._instances[component][id]) {
            console.warn(`Flowbite: Instance with ID ${id} does not exist.`);
            return;
        }
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
