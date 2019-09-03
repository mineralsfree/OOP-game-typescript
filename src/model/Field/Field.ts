import {IField} from "./IField";
import {Unit} from "../Units/Unit/unit";
import {fill} from "../helpers/fillUnitsHelper";
import {sortByInitiativity} from "./sortHelper";
export interface ICoordinates {
    x: number;
    y: number;
}
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
    getUnitsSortedByHealthPoints(): Array<Unit>{
        let flatArr = this.field.flat();
        return flatArr.sort((a,b)=>a.HP > b.HP ? 1: -1);
    }

}
