import { CopyClipboardInterface } from './interface';

export declare type CopyClipboardOptions = {
    htmlEntities: boolean;
    contentType?: string;
    onCopy?: (clipboard: CopyClipboardInterface) => void;
};
