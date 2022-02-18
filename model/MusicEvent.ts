import {Performance} from "./Performance";
import {Project} from "./Project";
import {Promoter} from "./OrgProject";
import {Rateable, RATING_TYPE, RatingCollection} from "./Rating";

export class MusicEvent extends Project implements Rateable{

    lineup: Performance[] = [];
    promoters: Promoter[];
    ratingCollection: RatingCollection;
    date: Date;

    constructor(name: string, promoters: Promoter[], date: Date) {
        super(name);
        this.date = date;
        this.promoters = promoters;
        this.ratingCollection = new RatingCollection(RATING_TYPE.EVENT_RATING)
    }
}
