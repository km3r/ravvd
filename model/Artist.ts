import {Project} from "./Project";
import {Entity} from "./Entity";

export class Artist extends Entity{
    project: Project[] = [];
    name: string = "";
}
