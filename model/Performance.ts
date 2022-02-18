import {ProductionProject} from "./ProductionProject";
import {Track} from "./Track";
import {Rateable, RATING_TYPE, RatingCollection} from "./Rating";
import {Entity} from "./Entity";
import {MusicEvent} from "./MusicEvent";

export class Performance extends Entity implements Rateable{
    productions: ProductionProject[];
    private _tracks: Track[] = [];
    event: MusicEvent;
    ratingCollection: RatingCollection;

    constructor(event: MusicEvent, productions: ProductionProject[]) {
        super();
        this.ratingCollection = new RatingCollection(RATING_TYPE.SET_RATING);
        this.event = event;
        this.productions = productions;
        this._tracks = [];
    }

    get tracks(): Track[] {
        return this._tracks;
    }

    set tracks(value: Track[]) {
        this._tracks = value;
    }
    addTrack(track: Track) {
        this._tracks.push(track);
    }
}
