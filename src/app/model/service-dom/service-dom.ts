import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export class ServiceDOM {

    readonly icon: IconDefinition;
    readonly title: string;
    readonly text: string;

    constructor(icon: IconDefinition, title: string, text: string) {
        this.icon = icon;
        this.title = title;
        this.text = text;
    }
}
