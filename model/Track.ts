import {Label} from "./OrgProject";
import {ProductionProject} from "./ProductionProject";
import {Rateable, Rating, RATING_TYPE, RatingCollection} from "./Rating";
import {Entity} from "./Entity";
import {StyleSheet} from "react-native";

export type Genre = {
    name: string;
    id: number;
}

export class Track extends Entity implements Rateable{
    name: string;
    genre?: Genre | undefined;
    label?: Label; // can be self-published
    production: Set<ProductionProject> = new Set<ProductionProject>();
    remixProduction?: Set<ProductionProject> = new Set<ProductionProject>();
    ratingCollection: RatingCollection;

    constructor(name: string, production: Set<ProductionProject>, remixProduction?: Set<ProductionProject>,
                genre?: Genre, label?: Label) {
        super();
        this.ratingCollection = new RatingCollection(RATING_TYPE.TRACK_RATING);
        this.production = production;
        this.remixProduction = remixProduction;
        this.name = name;
        this.genre = genre;
        this.label = label;
    }

    addProduction(production: ProductionProject) {
        production.tracks.push(this);
        this.production.add(production);
    }

    addRemix(remix: ProductionProject) {
        remix.tracks.push(this);
        this.production.add(remix);
    }

}
