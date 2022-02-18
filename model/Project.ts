import {Entity} from "./Entity";

export class Project extends Entity{
    name: string;
    constructor(name: string) {
        super();
        this.name = name;
    }
}
