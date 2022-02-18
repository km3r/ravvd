import {Entity} from "./Entity";

interface Rateable {
    ratingCollection: RatingCollection;
}

class RatingCollection extends Entity{
    ratings: Rating[] = [];
    average: Rating;
    categories: Category[] = [];

    constructor(categories: Category[]) {
        super();
        let scores: Score[] = [];
        for (let cat of categories) {
            scores.push(new Score(cat,0))
        }
        this.average = new Rating("Average",scores, "")
    }
}

class Rating extends Entity{
    review: string | undefined;
    scores: Score[];
    reviewer: string;

    constructor(reviewer: string, scores: Score[], review: string | undefined) {
        super();
        this.reviewer = reviewer;
        this.scores = scores;
        this.review = review;
    }
}
class Score extends Entity{
    category: Category;
    value: number;

    constructor(category: Category, value: number) {
        super();
        this.category = category;
        this.value = value;
    }
}



class Category {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let TRACK_RATING = [new Category("Drop"),
    new Category("Build"),
    new Category("Grove"),
    new Category("Overall")]

let SET_RATING = [new Category("Mixing"),
    new Category("Curation"),
    new Category("Lights"),
    new Category("Overall")]

let EVENT_RATING = [new Category("Lineup"),
    new Category("Production"),
    new Category("Location"),
    new Category("Overall")]

let RATING_TYPE = {TRACK_RATING,SET_RATING,EVENT_RATING};

export {Rateable, RatingCollection, Rating, Score, Category, RATING_TYPE};
