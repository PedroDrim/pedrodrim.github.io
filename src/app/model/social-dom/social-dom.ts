import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export class SocialDOM {

    readonly icon: IconDefinition;
    readonly url: string;

    constructor(icon: IconDefinition, url: string) {
        this.icon = icon;
        this.url = url;
    }
}
