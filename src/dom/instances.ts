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

    addInstance(component: string, instance: any) {
        this._instances[component].push(instance);
    }

    getInstance(component: string, id: string) {
        return this._instances[component].filter(
            (instance: any) => instance.id === id
        )[0];
    }

    removeInstance(component: string, id: string) {
        this._instances[component] = this._instances[component].filter(
            (instance: any) => instance.id !== id
        );
    }
}

const instances = new Instances();

export default instances;

if (typeof window !== 'undefined') {
    window.flowbiteInstances = instances;
}
