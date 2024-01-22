import { CopyClipboardInterface } from './interface';

export declare type CopyClipboardOptions = {
    HTMLEntities: boolean;
    contentType?: string;
    onCopy?: (clipboard: CopyClipboardInterface) => void;
};
