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
        this._instances[component][id ? id : this.generateRandomId()] =
            instance;
    }

    getInstance(component: string, id: string) {
        return this._instances[component][id];
    }

    destroyAndRemoveInstance(component: string, id: string) {
        this.destroyInstance(component, id);
        this.removeInstance(component, id);
    }

    removeInstance(component: string, id: string) {
        delete this._instances[component][id];
    }

    destroyInstance(component: string, id: string) {
        this._instances[component][id].destroy();
    }

    generateRandomId() {
        return Math.random().toString(36).substr(2, 9);
    }
}

const instances = new Instances();

export default instances;

if (typeof window !== 'undefined') {
    window.flowbiteInstances = instances;
}
