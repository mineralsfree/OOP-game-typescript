import {Unit} from "../Unit/unit";
import {UnitConstants} from "../../Constants";
import {ICoordinates} from "../../Field/Field";
import {
    IActionBehavior,
    IActionPossibility,
    MeleePossibility,
    SingleUnitAttackBehavior
} from "../Behavior/ActionBehavior";

const berserk = UnitConstants.Berserk;
export class Berserk extends Unit{
    constructor(team:string ){
        super(berserk.maxHP, berserk.damage, berserk.initiative, berserk.type, team, berserk.name);
        this.attackPossibility= new MeleePossibility();
        this.actionBehavior = new SingleUnitAttackBehavior();
    }
    public getAttackCoordinates(field: Array<Array<Unit>>){
        const getAliveLine = ()=>{
                for (let i = 0; i < field.length; i++) {
                    for (let j = 0; j < field[0].length; j++) {
                        if (!field[i][j].dead){
                            return i;
                        }
                    }
                }
            return 0;
        };
        let aliveLine = getAliveLine();
        const fieldSize={
            x: field[0].length,
            y: field.length
        };
        let arr: Array<ICoordinates> = [];
        if (this.y === 0) {
            if (this.x === 0 && !field[aliveLine][this.x].dead) {
                return [{x: 0, y: aliveLine}, {x: 1, y: aliveLine}]
            } else if (this.x === fieldSize.x - 1 && !field[aliveLine][this.x].dead) {
                return [{x: fieldSize.x - 1, y: aliveLine}, {x: fieldSize.x - 2, y: aliveLine}]
            } else {
                for (let i = 0; i < fieldSize.x; i++) {
                    if (!field[aliveLine][i].dead) {
                        arr.push({x: i, y: aliveLine})
                    }
                }
            }
            return arr;
        }
        return arr;
    }
    actionBehavior: IActionBehavior;
    attackPossibility: IActionPossibility;
}