export default class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById("foot")!;
    }
    get X(): number {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    change() {
        this.element.style.left = Math.floor(Math.random() * 29) * 10 + "px";
        this.element.style.top = Math.floor(Math.random() * 29) * 10 + "px";
    }
}