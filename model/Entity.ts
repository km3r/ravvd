export abstract class Entity {
    uuid: number;
    constructor() {
        this.uuid = (Date.now() << 16) + Math.random() % (2**16);
    }
}
