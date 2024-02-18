import instances from './instances';
import { initFlowbiteFrom } from '../components';

function findIds(element: Element): string[] {
    const ids: string[] = [];
    element.querySelectorAll('[id]').forEach((e) => ids.push(e.id));
    element.id && ids.unshift(element.id);
    return ids;
}

function destroyAndRemoveInstances(ids: string[]) {
    const lookup = new Set(ids);

    // No explicit types for Instances._instances
    type AllInstances = { [component in InstancesComponent]: InstancesMap };
    type InstancesComponent = keyof (typeof instances)['_instances'];
    type InstancesInterface = (typeof instances)['_instances'][InstancesComponent][string];
    type InstancesMap = { [id: string]: InstancesInterface };

    const allInstances: AllInstances = instances.getAllInstances();

    // No `Object.entries` in es2015 lib, must use `Object.keys`
    for (const component of Object.keys(allInstances) as InstancesComponent[]) {
        for (const id of Object.keys(allInstances[component])) {
            if (lookup.has(id)) {
                allInstances[component][id].destroyAndRemoveInstance();
            }
        }
    }
}

export function observeFlowbite() {
    const observer = new MutationObserver((mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type !== 'childList') {
                continue;
            }

            // Destroy components from removed DOM elements
            const ids: string[] = [];
            mutation.removedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    ids.concat(findIds(node as Element));
                }
            });
            destroyAndRemoveInstances(ids);

            // Initialize components from added DOM elements
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    initFlowbiteFrom(node as Element);
                }
            });
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
