import {IField} from "./IField";
import {Unit} from "../Unit/unit";
import {fill} from "../helpers/fillUnitsHelper";
import {sortByInitiativity} from "./sortHelper";

export class Field implements IField{
    field: Array<Array<Unit>>;
    team: string;
    constructor(team: string, field:  Array<Array<Unit>> | null) {
        this.team = team;
        this.field = field ? field : fill(team);
    }
    getUnitsSortedByInitiative(): Array<Unit>{
        let flatArr = this.field.flat();
        return flatArr.sort(sortByInitiativity)
    }
    recieveDamage(): void{

    }
}
