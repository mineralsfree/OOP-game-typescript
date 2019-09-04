import {Unit} from "../Unit/unit";
import {UnitConstants} from "../../Constants";
import {ICoordinates} from "../../Field/Field";

const berserk = UnitConstants.Berserk;
export class Berserk extends Unit{
    constructor(team:string ){
        super(berserk.maxHP, berserk.damage, berserk.initiative, berserk.type, team)
    }
    public getAttackCoordinates(enemyField: Array<Array<Unit>>){
        const getAliveLine = ()=>{
                for (let i = 0; i < enemyField.length; i++) {
                    for (let j = 0; j < enemyField[0].length; j++) {
                        if (!enemyField[i][j].dead){
                            return i;
                        }
                    }
                }
            return 0;
        }
        let aliveLine = getAliveLine();
        console.log(aliveLine);
        const field={
            x: enemyField[0].length,
            y: enemyField.length
        }
        let arr: Array<ICoordinates> = [];
        if (this.y === 0) {
            if (this.x === 0 && !enemyField[aliveLine][this.x].dead) {
                return [{x: 0, y: aliveLine}, {x: 1, y: aliveLine}]
            } else if (this.x === field.x - 1 && !enemyField[aliveLine][this.x].dead) {
                return [{x: field.x - 1, y: aliveLine}, {x: field.x - 2, y: aliveLine}]
            } else {
                // TODO: fix bug
                for (let i = 0; i < field.x; i++) {
                    if (!enemyField[aliveLine][i].dead) {
                        arr.push({x: i, y: aliveLine})
                    }
                }
            }
            return arr;
        }
        return arr;
    }
}