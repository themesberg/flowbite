class Events {
    constructor(eventType, eventFunctions = []) {
        this._eventType = eventType;
        this._eventFunctions = eventFunctions;
    }

    init() {
        this._eventFunctions.forEach((eventFunction) => {
            window.addEventListener(this._eventType, eventFunction);
        });
    }
    
}

export default Events