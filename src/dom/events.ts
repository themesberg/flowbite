class Events {
    private _eventType: string;
    private _eventFunctions: EventListener[];

    constructor(eventType: string, eventFunctions: EventListener[] = []) {
        this._eventType = eventType;
        this._eventFunctions = eventFunctions;
    }

    init() {
        this._eventFunctions.forEach((eventFunction) => {
            if (typeof window !== 'undefined') {
                window.addEventListener(this._eventType, eventFunction);
            }
        });
    }
}

export default Events;
