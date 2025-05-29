export declare type InstanceOptions = {
    id?: string;
    override?: boolean;
};

export declare type EventListenerInstance = {
    element: HTMLElement;
    type: string;
    handler: EventListenerOrEventListenerObject;
};

export declare type RootElement = Element | HTMLElement | Document;