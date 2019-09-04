import {Field, ICoordinates} from "../../Field/Field";
import {Unit} from "./unit";
export interface IUnit {
    maxHP: number,
    damage: number,
    initiative: number,
    team: string,
    id: number
    [propName: string]: any;
    getAttackCoordinates(enemyField: Array<Array<Unit>>):  Array<ICoordinates>;
    dealDamage(target: Unit, field? :Field): void;
}