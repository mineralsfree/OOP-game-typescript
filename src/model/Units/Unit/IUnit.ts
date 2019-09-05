import {Field, ICoordinates} from "../../Field/Field";
import {Unit} from "./unit";
import {IActionPossibility} from "../Behavior/ActionBehavior";
export interface IUnit {
    maxHP: number,
    damage: number,
    initiative: number,
    team: string,
    id: number
    [propName: string]: any;
    getAttackCoordinates(field: Array<Array<Unit>>):  Array<ICoordinates>;
    dealDamage(target: Unit, field? :Field): void;
    attackPossibility: IActionPossibility;

}