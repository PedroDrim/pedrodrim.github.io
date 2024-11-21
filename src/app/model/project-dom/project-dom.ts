export class ProjectDOM {

    readonly image: string;
    readonly title: string;
    readonly text: string;

    constructor(image: string, title: string, text: string) {
        this.image = image;
        this.title = title;
        this.text = text;
    }
}
