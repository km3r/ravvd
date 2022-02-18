import {Project} from "./Project";

function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}

class OrgProject extends Project {
    // owners
}

class Label extends OrgProject {

}

class Promoter extends OrgProject {

}

class LabelPromotor extends OrgProject {

}

interface LabelPromotor extends Promoter, Label {

}

applyMixins(LabelPromotor, [Label,Promoter]);

export {Label, Promoter, LabelPromotor, OrgProject}
