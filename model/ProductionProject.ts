import {Project} from "./Project";
import {Track} from "./Track";
import {Artist} from "./Artist";
import {Performance} from "./Performance";

export class ProductionProject extends Project{
    tracks: Track[] = [];
    artists: Artist[] = [];
    sets: Performance[] = [];

    constructor( name: string) {
        super(name);
    }
}
